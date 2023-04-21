import {create} from "zustand";
import {persist} from "zustand/middleware";

type UserStore = {
    currentUser: string | null | undefined | unknown;
    getSessionToken: () => string;
    pending: boolean;
    login: (username: string) => void;
}

function getIdToken() {
    return "12345";
}

function signInWithEmailAndPassword(username: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username);
        }, 1000);
    })
}

export const useUser = create(
    persist<UserStore>(
        (set, get) => ({
            currentUser: undefined,
            getSessionToken: () => getIdToken(),
            pending: false,
            login: async (username) => {
                set({pending: true});
                const user = await signInWithEmailAndPassword(username);
                set({ currentUser: user, pending: false })
            }
        }),
        {
            name: 'viasat-goldmines-storage',
        }
    )
);

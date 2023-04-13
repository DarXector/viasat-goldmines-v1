import {create} from "zustand";
import {persist} from "zustand/middleware";

type UserStore = {
    currentUser: string | null | undefined | unknown;
    getSessionToken: () => string;
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

export const userStore = create(
    persist<UserStore>(
        (set, get) => ({
            currentUser: undefined,
            getSessionToken: () => getIdToken(),
            login: async (username) => {
                const user = await signInWithEmailAndPassword(username);
                set({ currentUser: user })
            }
        }),
        {
            name: 'viasat-goldmines-storage',
        }
    )
);

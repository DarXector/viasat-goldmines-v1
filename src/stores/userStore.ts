import {create} from "zustand";
import {persist} from "zustand/middleware";
import constants from "../data/constants";

type UserStore = {
    currentUser: string | null | undefined | unknown;
    getSessionToken: () => string;
    pending: boolean;
    login: (username: string, country: string) => void;
}

function getIdToken() {
    return "12345";
}

async function signInWithUsername(username: string, country: string) {
    const response = await fetch(constants.API_URL + 'join_game', { method: "POST", body: JSON.stringify({name: username, country: country})});
    console.log('signInWithUsername response', response);
    return response.json();
}

export const useUser = create(
    persist<UserStore>(
        (set, get) => ({
            currentUser: undefined,
            getSessionToken: () => getIdToken(),
            pending: false,
            login: async (username, country) => {
                set({pending: true});
                const user = await signInWithUsername(username, country);
                set({ currentUser: user, pending: false })
            }
        }),
        {
            name: 'viasat-goldmines-storage',
        }
    )
);

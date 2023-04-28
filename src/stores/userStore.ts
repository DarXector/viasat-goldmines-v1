import {create} from "zustand";
import {persist} from "zustand/middleware";
import constants from "../data/constants";

export type User = {
    id: string;
    name: string;
    language: string;
    country: string;
    current_question_id: string;
    correct_answers: number;
    completed: boolean;
}

type UserStore = {
    currentUser: User | null;
    getSessionToken: () => string;
    pending: boolean;
    login: (username: string, country: string) => void;
    getPlayerInfo: () => void;
    error: string | null;
}

function getIdToken() {
    return "12345";
}

async function signInWithUsername(username: string, country: string) {
    let formData = new FormData();
    formData.append('name', username);
    formData.append('country', country);
    formData.append('language', country);

    const response = await fetch(constants.API_URL + 'join_game', { method: "POST", body: formData});
    if (response.status !== 200) {
        console.error('signInWithUsername response', response);
        return  {error: response.statusText};
    }
    const parsedResult = await response.json();
    if (parsedResult.error) {
        console.error('signInWithUsername response', parsedResult.error);
        return {error: parsedResult.error};
    }
    return parsedResult.player;
}

async function getPlayerInfo() {
    const response = await fetch(constants.API_URL + 'player_info', { method: "GET", /*headers: {'Force-Identifier' : '6359f6e0e34c4987fefac23aef282a9f'}*/ });
    if (response.status !== 200) {
        console.error('getPlayerInfo response', response);
        return  {error: response.statusText};
    }
    const parsedResult = await response.json();
    if (parsedResult.error) {
        console.error('getPlayerInfo response', parsedResult.error);
        return {error: parsedResult.error};
    }
    return parsedResult.player;
}

export const useUser = create(
    persist<UserStore>(
        (set, get) => ({
            currentUser: null,
            getSessionToken: () => getIdToken(),
            pending: false,
            error: null,
            login: async (username, country) => {
                set({pending: true, error: null});
                const user = await signInWithUsername(username, country);
                if (user) {
                    if (user.error) {
                        set({error: user.error, pending: false});
                    } else {
                        set({currentUser: user, pending: false});
                    }
                } else {
                    set({pending: false});
                }
            },
            getPlayerInfo: async () => {
                set({pending: true, error: null});
                const user = await getPlayerInfo();
                if (user) {
                    if (user.error) {
                        set({error: user.error, pending: false});
                    } else {
                        set({currentUser: user, pending: false});
                    }
                } else {
                    set({pending: false});
                }
            }
        }),
        {
            name: 'viasat-goldmines-storage',
        }
    )
);

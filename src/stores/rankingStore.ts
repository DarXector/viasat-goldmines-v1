import {create} from "zustand";
import contants from "../data/constants";

export type UserRanking = {
    id: number;
    rank: number;
    name: string;
    total_time: string;
    correct_answers: number;
}

type RankingStore = {
    loading: boolean;
    ranking: UserRanking[];
    userRanking: UserRanking | null;
    getRanking: () => Promise<void>;
}

async function getRanking() {
    const response = await fetch(contants.API_URL + 'rankings', { method: "GET", /*headers: {'Force-Identifier' : '6359f6e0e34c4987fefac23aef282a9f'}*/ });
    if (response.status !== 200) {
        console.error('getRanking response', response);
        return null;
    }
    const parsedResult = await response.json();
    if (parsedResult.error) {
        console.error('getRanking response', parsedResult.error);
        return null;
    }
    return {
        ranking: parsedResult.top_players,
        userRanking: parsedResult.player_rank
    };
}

export const useRanking = create<RankingStore>(
    (set, get) => ({
        ranking: [],
        userRanking: null,
        loading: false,
        getRanking: async () => {
            set({loading: true});
            const ranking = await getRanking();
            if (ranking) {
                set({ranking: ranking.ranking, userRanking: ranking.userRanking, loading: false})
            }
        }
    })
);

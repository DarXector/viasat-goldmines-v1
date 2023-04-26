import {create} from "zustand";
import contants from "../data/constants";

const rankingStatic = [
    {rank: 1, username: "user1", totalTime: "1:00", correctAnswers: 10},
    {rank: 2, username: "user2", totalTime: "1:00", correctAnswers: 10},
    {rank: 3, username: "user3", totalTime: "1:00", correctAnswers: 10},
    {rank: 4, username: "user4", totalTime: "1:00", correctAnswers: 10},
    {rank: 5, username: "user5", totalTime: "1:00", correctAnswers: 10},
    {rank: 6, username: "user6", totalTime: "1:00", correctAnswers: 10},
    {rank: 7, username: "user7", totalTime: "1:00", correctAnswers: 10},
    {rank: 8, username: "user8", totalTime: "1:00", correctAnswers: 10},
    {rank: 9, username: "user9", totalTime: "1:00", correctAnswers: 10},
    {rank: 10, username: "user10", totalTime: "1:00", correctAnswers: 10},
]

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
    const response = await fetch(contants.API_URL + 'rankings', { method: "GET", headers: {'Force-Identifier' : '460807c1f88639e897c9a360cb6ae6f7'} });
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

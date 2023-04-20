import {create} from "zustand";

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
    rank: number;
    username: string;
    totalTime: string;
    correctAnswers: number;
}

type RankingStore = {
    loading: boolean;
    ranking: UserRanking[];
    userRanking: UserRanking | null;
    getRanking: () => Promise<void>;
}

function getRanking(): Promise<{ ranking: UserRanking[], userRanking: UserRanking }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ranking: rankingStatic,
                userRanking: {rank: 12, username: "user1", totalTime: "1:00", correctAnswers: 10}
            });
        }, 1000);
    })
}

export const useRanking = create<RankingStore>(
    (set, get) => ({
        ranking: [],
        userRanking: null,
        loading: false,
        getRanking: async () => {
            set({loading: true});
            const ranking = await getRanking();
            set({ranking: ranking.ranking, userRanking: ranking.userRanking, loading: false})
        }
    })
);

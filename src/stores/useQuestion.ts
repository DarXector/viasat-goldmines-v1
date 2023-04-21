import {create} from "zustand";
import {persist} from "zustand/middleware";
import majdanpekMap from '../assets/maps/majdanpek_map.png';

let currentQuestion = -1;

const questions: Question[] = [
    {
        id: 'q1',
        text: 'What is the name of the mine shown on the map of Serbia?',
        map: majdanpekMap,
        answers: [
            {
                id: 'a1',
                text: 'Bor',
                correct: false,
            },{
                id: 'a2',
                text: 'Majdanpek',
                correct: true,
            },{
                id: 'a2',
                text: 'Kolubara',
                correct: true,
            }
        ]
    }
]

export type Answer = {
    id: string;
    text: string;
    correct: boolean;
}

export type Question = {
    id: string;
    text: string;
    map: string | null;
    answers: Answer[]
}

type QuestionStore = {
    getNextQuestion: () => void
    currentQuestion: Question | unknown;
    loading: boolean;
    answer: (id:string) => Promise<boolean>;
}

function getNextQuestion() {
    return new Promise((resolve, reject) => {
        currentQuestion += 1;
        setTimeout(() => {
            resolve(questions[currentQuestion]);
        }, 1000);
    })
}

function answerQuestion(id: string) {
    return new Promise((resolve, reject) => {
        currentQuestion += 1;
        setTimeout(() => {
            resolve(questions[currentQuestion]);
        }, 1000);
    })
}

export const useQuestion = create<QuestionStore>(
    (set, get) => ({
        currentQuestion: null,
        loading: false,
        getNextQuestion: async () => {
            set({loading: true});
            const question = await getNextQuestion();
            set({currentQuestion: question, loading: false});
        },
        answer: (id:string) => {
            const question = get().currentQuestion as Question;
            const answered = question.answers.find((answer => answer.id === id));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (answered) resolve(answered.correct);
                    else reject('No answer with id: ' + id);
                });
            })
        }
    }),
);

import {create} from "zustand";
import {persist} from "zustand/middleware";
import majdanpekMap from '../assets/maps/majdanpek_map.png';
import leceMap from '../assets/maps/lece_map.png';
import q3Bg from '../assets/maps/q3_bg.png';

let currentQuestionIndex = 0;

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
                id: 'a3',
                text: 'Kolubara',
                correct: false,
            }
        ]
    },{
        id: 'q2',
        text: 'What is the name of the mine shown on the map of Serbia?',
        map: leceMap,
        answers: [
            {
                id: 'a1',
                text: 'Lece',
                correct: true,
            },{
                id: 'a2',
                text: 'Trepca',
                correct: false,
            },{
                id: 'a3',
                text: 'Majdanpek',
                correct: false,
            }
        ]
    },{
        id: 'q3',
        text: 'What is the symbol of gold in the periodic table?',
        map: q3Bg,
        answers: [
            {
                id: 'a1',
                text: 'Cd',
                correct: false,
            },{
                id: 'a2',
                text: 'Ag',
                correct: false,
            },{
                id: 'a3',
                text: 'Au',
                correct: true,
            }
        ]
    },
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
    getNextQuestion: (iterate?: number) => void
    currentQuestion: Question | unknown;
    loading: boolean;
    isCorrect: boolean;
    isLastQuestion: boolean;
    answered: boolean;
    correctAnswer: string;
    wrongAnswer: string;
    answer: (id:string) => Promise<boolean>;
}

function getNextQuestion() {
    return new Promise((resolve, reject) => {
        console.log(currentQuestionIndex, 'currentQuestion');
        setTimeout(() => {
            resolve(questions[currentQuestionIndex]);
        }, 1000);
    })
}

function answerQuestion(id: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(questions[currentQuestionIndex]);
        }, 1000);
    })
}

export const useQuestion = create<QuestionStore>(
    (set, get) => ({
        currentQuestion: null,
        isCorrect: false,
        correctAnswer: '',
        wrongAnswer: '',
        answered: false,
        isLastQuestion: false,
        loading: false,
        getNextQuestion: async (iterate: number = 0) => {
            if (get().loading) return;
            set({loading: true, answered: false, correctAnswer: '', wrongAnswer: ''});
            currentQuestionIndex += iterate;
            const question = await getNextQuestion();
            console.log('question', question);
            set({currentQuestion: question, loading: false, isLastQuestion: currentQuestionIndex === questions.length - 1});
        },
        answer: (id:string) => {
            const question = get().currentQuestion as Question;
            const correctAnswer = question.answers.find((answer => answer.correct)) as Answer;
            const answeredCorrectly = correctAnswer.id === id;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    set({isCorrect: answeredCorrectly, correctAnswer: correctAnswer.id, wrongAnswer: answeredCorrectly ? '' : id, answered: true});
                    resolve(answeredCorrectly);
                });
            })
        }
    }),
);

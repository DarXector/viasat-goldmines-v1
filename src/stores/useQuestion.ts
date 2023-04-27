import {create} from "zustand";
import contants from "../data/constants";
import constants from "../data/constants";

//let currentQuestionIndex = 0;

/*const questions: Question[] = [
    {
        id: 'q1',
        text: 'What is the name of the mine shown on the map of Serbia?',
        map: majdanpekMap,
        answers: [
            {
                id: 'a1',
                text: 'Bor',
            },{
                id: 'a2',
                text: 'Majdanpek',
            },{
                id: 'a3',
                text: 'Kolubara',
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
            },{
                id: 'a2',
                text: 'Trepca',
            },{
                id: 'a3',
                text: 'Majdanpek',
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
]*/

export type Answer = {
    id: string;
    text: string;
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
    completed: boolean;
    answered: boolean;
    correctAnswer: string;
    wrongAnswer: string;
    answer: (id:string) => void;
}

async function getNextQuestion() {
    const response = await fetch(contants.API_URL + 'get_question', { method: "GET", /*headers: {'Force-Identifier' : '7023e2349c22dbb9fe3ebe2624cb58f8'}*/ });
    if (response.status !== 200) {
        console.error('getNextQuestion response', response);
        return null;
    }
    console.log('getNextQuestion response', response);
    const parsedResult = await response.json();
    if (parsedResult.error) {
        console.error('getNextQuestion response', parsedResult.error);
        return null;
    }
    return {
        id: parsedResult.question.id,
        text: parsedResult.question.question,
        map: parsedResult.question.map_image,
        answers: [
            {
                id: '1',
                text: parsedResult.question.answer_1,
            },
            {
                id: '2',
                text: parsedResult.question.answer_2,
            },
            {
                id: '3',
                text: parsedResult.question.answer_3,
            },
        ]
    };
}

async function answerQuestion(id: string) {
    let formData = new FormData();
    formData.append('answer_id', id);

    const response = await fetch(constants.API_URL + 'answer_question ', { method: "POST", body: formData, /*headers: {'Force-Identifier' : '7023e2349c22dbb9fe3ebe2624cb58f8'}*/ });
    if (response.status !== 200) {
        console.error('answerQuestion response', response);
        return  {error: response.statusText};
    }
    console.log('answerQuestion response', response);
    const parsedResult = await response.json();
    if (parsedResult.error) {
        console.error('answerQuestion response', parsedResult.error);
        return {error: parsedResult.error};
    }
    return parsedResult;
}

export const useQuestion = create<QuestionStore>(
    (set, get) => ({
        currentQuestion: null,
        isCorrect: false,
        correctAnswer: '',
        wrongAnswer: '',
        answered: false,
        completed: false,
        loading: false,
        getNextQuestion: async (iterate: number = 0) => {
            if (get().loading) return;
            set({loading: true, answered: false, correctAnswer: '', wrongAnswer: ''});
            const question = await getNextQuestion();
            console.log('question', question);
            set({currentQuestion: question, loading: false, completed: false});
        },
        answer: async (id:string) => {
            const response = await answerQuestion(id);
            set({isCorrect: response.is_correct, correctAnswer: response.correct_answer_id.toString(), wrongAnswer: response.is_correct ? '' : id, answered: true, completed: response.player.completed});
        }
    }),
);

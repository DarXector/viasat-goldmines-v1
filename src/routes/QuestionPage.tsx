import viasatLogoImg from "../assets/images/viasat-explore-logo.png";
import {InnerPage} from "./InnerPage";
import {Question, useQuestion} from "../stores/useQuestion";
import {stat} from "fs";
import {CSSProperties, useEffect} from "react";
import {Spinner} from "reactstrap";
import {AnswerButton} from "../components/AnswerButton";

import './QuestionPage.css';


export function QuestionPage() {
    const currentQuestion = useQuestion(state => state.currentQuestion) as Question | null;
    const getNextQuestion = useQuestion(state => state.getNextQuestion);
    const loading = useQuestion(state => state.loading);
    const answer = useQuestion(state => state.answer);

    useEffect(() => {
        getNextQuestion();
    }, [currentQuestion])

    return  <InnerPage title={`Question ${1}`}>
        <div className='question-page page' style={currentQuestion ? {backgroundImage: currentQuestion.map} as CSSProperties : undefined}>
            {loading ? <Spinner color={'light'} /> :
                <div className='d-flex flex-column justify-content-between align-items-center'>
                    <div className='question'>{currentQuestion?.text}</div>
                    <div className='d-flex flex-column align-items-center'>
                        {currentQuestion?.answers.map((answer, index) => <AnswerButton>{answer.text}</AnswerButton>)}
                    </div>
                </div>
            }
        </div>
    </InnerPage>
}

import {InnerPage} from "./InnerPage";
import {Question, useQuestion} from "../stores/useQuestion";
import {CSSProperties, useEffect} from "react";
import {Spinner} from "reactstrap";
import {AnswerButton} from "../components/AnswerButton";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {useNavigate} from "react-router-dom";

import hexagonCheck from '../assets/images/hexagon_check.svg';
import hexagonCross from '../assets/images/hexagon_cross.svg';

import './QuestionPage.css';
import {TransparentButton} from "../components/TransparentButton";
import {useTranslation} from "react-i18next";


export function QuestionPage() {
    const currentQuestion = useQuestion(state => state.currentQuestion) as Question | null;
    const getNextQuestion = useQuestion(state => state.getNextQuestion);
    const loading = useQuestion(state => state.loading);
    const answer = useQuestion(state => state.answer);
    const answered = useQuestion(state => state.answered);
    const isCorrect = useQuestion(state => state.isCorrect);
    const correctAnswer = useQuestion(state => state.correctAnswer);
    const wrongAnswer = useQuestion(state => state.wrongAnswer);
    const completed = useQuestion(state => state.completed);

    const navigate = useNavigate();
    const {i18n} = useTranslation();

    useEffect(() => {
        getNextQuestion();
    }, []);

    if (currentQuestion) {
        console.log("currentQuestion.map: ", currentQuestion.map);
    }

    function onAnswer(id: string) {
        if (answered) return;
        answer(id);
    }

    return <InnerPage title={`Question ${1}`}>
        <div className='question-page page'
             style={currentQuestion ? {backgroundImage: `url(${currentQuestion.map})`} as CSSProperties : undefined}>
            {loading ? <Spinner color={'light'}/> :
                <div
                    className={`d-flex flex-column justify-content-between align-items-center question-container ${answered ? 'answered' : ''}`}>
                    <div className='question w-75'>{currentQuestion?.text}</div>
                    {answered ? <div className='answer-result d-flex flex-row align-items-center'>
                        <img src={isCorrect ? hexagonCheck : hexagonCross} alt={'Answer Icon'}/>
                        {isCorrect ? 'Correct Answer!' : 'Wrong Answer!'}
                    </div> : ''}
                    <div className='d-flex flex-column align-items-center w-75'>
                        {currentQuestion?.answers.map((answer, index) => <AnswerButton key={answer.id}
                                                                                       isCorrectAnswer={correctAnswer === answer.id}
                                                                                       isWrongAnswer={wrongAnswer === answer.id}
                                                                                       onClick={() => onAnswer(answer.id)}
                                                                                       order={index}>{answer.text}</AnswerButton>)}
                        {answered ? <TransparentButton onClick={() => completed ? navigate(`/${i18n.language}/ranking`) : getNextQuestion(1)}
                                                       style={{minHeight: '80px'}}>{completed ? 'Finish >' : 'Next Question >'}</TransparentButton> :
                            <CountdownCircleTimer
                                isPlaying
                                size={100}
                                duration={30}
                                strokeWidth={6}
                                colors={['#261301', '#A51B17', '#A51B17']}
                                trailColor={'#fff'}
                                colorsTime={[30, 10, 0]}
                                onComplete={() => onAnswer('0')}
                            >
                                {({remainingTime}) => <div className='d-flex justify-content-center align-items-center'
                                                           style={{
                                                               color: '#A51B17',
                                                               fontSize: '20pt',
                                                               fontWeight: 700,
                                                               width: '88px',
                                                               height: '88px',
                                                               borderRadius: '99999px',
                                                               backgroundColor: '#fff'
                                                           }}>{remainingTime}</div>}
                            </CountdownCircleTimer>}
                        <br/>
                    </div>
                </div>
            }
        </div>
    </InnerPage>
}

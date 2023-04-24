import {InnerPage} from "./InnerPage";
import {Question, useQuestion} from "../stores/useQuestion";
import {CSSProperties, useEffect} from "react";
import {Spinner} from "reactstrap";
import {AnswerButton} from "../components/AnswerButton";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import './QuestionPage.css';


export function QuestionPage() {
    const currentQuestion = useQuestion(state => state.currentQuestion) as Question | null;
    const getNextQuestion = useQuestion(state => state.getNextQuestion);
    const loading = useQuestion(state => state.loading);
    const answer = useQuestion(state => state.answer);

    useEffect(() => {
        getNextQuestion();
    }, []);

    if (currentQuestion) {
        console.log("currentQuestion.map: ", currentQuestion.map);
    }

    return  <InnerPage title={`Question ${1}`}>
        <div className='question-page page' style={currentQuestion ? {backgroundImage: `url(${currentQuestion.map})`} as CSSProperties : undefined}>
            {loading ? <Spinner color={'light'} /> :
                <div className='d-flex flex-column justify-content-between align-items-center question-container'>
                    <div className='question'>{currentQuestion?.text}</div>
                    <div className='d-flex flex-column align-items-center w-100'>
                        {currentQuestion?.answers.map((answer, index) => <AnswerButton key={answer.id} order={index}>{answer.text}</AnswerButton>)}
                        <CountdownCircleTimer
                            isPlaying
                            size={100}
                            duration={30}
                            strokeWidth={6}
                            colors={['#261301', '#A51B17', '#A51B17']}
                            trailColor={'#fff'}
                            colorsTime={[30, 10, 0]}
                        >
                            {({ remainingTime }) => <div className='d-flex justify-content-center align-items-center' style={{color: '#A51B17' ,fontSize: '20pt', fontWeight: 700, width: '88px', height: '88px', borderRadius: '99999px', backgroundColor: '#fff'}}>{remainingTime}</div>}
                        </CountdownCircleTimer>
                        <br />
                    </div>
                </div>
            }
        </div>
    </InnerPage>
}

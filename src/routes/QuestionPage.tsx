import {InnerPage} from "./InnerPage";
import {Question, useQuestion} from "../stores/useQuestion";
import {CSSProperties, useEffect} from "react";
import {Spinner} from "reactstrap";
import {AnswerButton} from "../components/AnswerButton";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {useLocation, useNavigate} from "react-router-dom";

import hexagonCheck from '../assets/images/hexagon_check.svg';
import hexagonCross from '../assets/images/hexagon_cross.svg';

import './QuestionPage.css';
import {TransparentButton} from "../components/TransparentButton";
import {useTranslation} from "react-i18next";
import constants from "../data/constants";
import defaultBg from "../assets/maps/q3_bg.png";
import ReactGA from "react-ga4";
import {User, useUser} from "../stores/userStore";


export function QuestionPage() {
    const currentQuestion = useQuestion(state => state.currentQuestion) as Question | null;
    const getNextQuestion = useQuestion(state => state.getNextQuestion);
    const loading = useQuestion(state => state.loading);
    const answer = useQuestion(state => state.answer);
    const resetQuestions = useQuestion(state => state.resetQuestions);
    const answered = useQuestion(state => state.answered);
    const isCorrect = useQuestion(state => state.isCorrect);
    const correctAnswer = useQuestion(state => state.correctAnswer);
    const wrongAnswer = useQuestion(state => state.wrongAnswer);
    const completed = useQuestion(state => state.completed);

    const currentUser = useUser(state => state.currentUser) as User;

    const navigate = useNavigate();
    const {t, i18n} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash });
    }, [location]);

    useEffect(() => {
        console.log('useEffect checkQuestionsState');
        checkQuestionsState();
    }, []);



    async function checkQuestionsState () {
        console.log('checkQuestionsState', currentUser);
        if (currentUser && currentUser.completed) {
            await resetQuestions();
        }
        getNextQuestion();
    }

    function onAnswer(id: string) {
        if (answered) return;

        ReactGA.event({
            category: "Question",
            action: "Answer",
            label: currentQuestion?.text, // optional
            value: parseInt(id), // optional, must be a number
        });

        answer(id);
    }

    return <InnerPage title={`${t('question')} ${1}`} scrollable={true}>
        <div className='question-page page'
             style={currentQuestion ? {backgroundImage: currentQuestion.map ? `url(${constants.BASE_URL}/${currentQuestion.map})` : `url(${defaultBg})`} as CSSProperties : undefined}>
            {loading ? <Spinner color={'light'}/> :
                currentQuestion && <div
                    className={`d-flex flex-column justify-content-between align-items-center question-container ${answered ? 'answered' : ''}`}>
                    <div className='question w-75'>{currentQuestion?.text}</div>
                    {answered ? <div className='answer-result d-flex flex-row align-items-center'>
                        <img src={isCorrect ? hexagonCheck : hexagonCross} alt={'Answer Icon'}/>
                        {isCorrect ? t('correct_answer') : t('wrong_answer')}
                    </div> : ''}
                    <div className='d-flex flex-column align-items-center w-75'>
                        {currentQuestion?.answers.map((answer, index) => <AnswerButton key={answer.id}
                                                                                       isCorrectAnswer={correctAnswer === answer.id}
                                                                                       isWrongAnswer={wrongAnswer === answer.id}
                                                                                       onClick={() => onAnswer(answer.id)}
                                                                                       order={index}>{answer.text}</AnswerButton>)}
                        {answered ? <TransparentButton onClick={() => {
                            if (completed) {
                                navigate(`/${i18n.language}/ranking`);
                            } else {
                                getNextQuestion(1)
                            }
                        }}>{completed ? `${t('finish').toUpperCase()} >` : `${t('next_question').toUpperCase()} >`}</TransparentButton> :
                            <CountdownCircleTimer
                                isPlaying
                                size={70}
                                duration={30}
                                strokeWidth={4}
                                colors={['#261301', '#A51B17', '#A51B17']}
                                trailColor={'#fff'}
                                colorsTime={[30, 10, 0]}
                                onComplete={() => onAnswer('0')}
                            >
                                {({remainingTime}) => <div className='d-flex justify-content-center align-items-center'
                                                           style={{
                                                               color: '#A51B17',
                                                               fontSize: '16pt',
                                                               fontWeight: 700,
                                                               width: '62px',
                                                               height: '62px',
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

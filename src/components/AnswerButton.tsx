import {Button} from "reactstrap";

import './AnswerButton.css';
import {MouseEventHandler} from "react";
export function AnswerButton({order, children, onClick, isCorrectAnswer, isWrongAnswer}: {order:number, children: any, onClick:MouseEventHandler, isCorrectAnswer:boolean, isWrongAnswer:boolean}) {
    return (
        <Button onClick={onClick} className={`answer-button w-100 ${isCorrectAnswer ? 'correct' : ''} ${isWrongAnswer ? 'wrong' : ''}`}>
            {children}
        </Button>
    );
};

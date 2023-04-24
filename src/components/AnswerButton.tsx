import {Button} from "reactstrap";

import './AnswerButton.css';
export function AnswerButton({order, children}: {order:number, children: any}) {
    return (
        <Button className={`answer-button w-100`}>
            {children}
        </Button>
    );
};

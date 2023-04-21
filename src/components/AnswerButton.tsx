import {Button} from "reactstrap";

import './AppButton.css';
export function AnswerButton({children}: {children: any}) {
    return (
        <Button className={`answer-button`}>
            {children}
        </Button>
    );
};

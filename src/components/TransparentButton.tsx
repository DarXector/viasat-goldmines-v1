import {Button} from "reactstrap";

import './TransparentButton.css';
import {ButtonHTMLAttributes} from "react";

interface InputGroupProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    inverted?: boolean;
}
export function TransparentButton({inverted, children, ...rest}: InputGroupProps) {
    return (
        <Button className={`transparent-button ${inverted ? 'inverted' : ''}`} {...rest}>
            {children}
        </Button>
    );
};

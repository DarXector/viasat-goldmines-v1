import {Button} from "reactstrap";

import './AppButton.css';
export function AppButton({inverted, children, type}: {children: any, inverted?: boolean, type?:'submit' | 'reset' | 'button' | undefined }) {
    return (
        <Button type={type} className={`app-button ${inverted ? 'inverted' : ''}`}>
            {children}
        </Button>
    );
};

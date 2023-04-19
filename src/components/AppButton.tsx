import {Button} from "reactstrap";

import './AppButton.css';
export function AppButton({inverted, children}: {children: any, inverted?: boolean}) {
    return (
        <Button className={`app-button ${inverted ? 'inverted' : ''}`}>
            {children}
        </Button>
    );
};

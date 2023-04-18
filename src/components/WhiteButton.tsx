import {Button} from "reactstrap";

import './WhiteButton.css';
export function WhiteButton({children}: {children: any}) {
    return (
        <Button className='white-button'>
            {children}
        </Button>
    );
};

import {Button} from "reactstrap";

import './TransparentButton.css';
export function TransparentButton({children}: {children: any}) {
    return (
        <Button className='transparent-button'>
            {children}
        </Button>
    );
};

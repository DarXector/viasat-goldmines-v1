import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import viasatLogoImg from "../assets/images/viasat-explore-logo.png";
import {useNavigate} from "react-router-dom";
import {TransparentButton} from "./TransparentButton";

export function PageTitle({title}: {title: string}) {
    const navigate = useNavigate();

    return (
        <div className='page-title'>
            <TransparentButton onClick={() => navigate(-1)}>
                <FontAwesomeIcon size="lg" icon={faArrowLeft}/>
            </TransparentButton>
            <h3>{title}</h3>
            <img className='viasat-logo' alt="Viasat History Logo" src={viasatLogoImg}/>
        </div>
    );
};

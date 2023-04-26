import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {TransparentButton} from "./TransparentButton";
import {useTranslation} from "react-i18next";

export function PageTitle({title}: {title: string}) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className='page-title'>
            <TransparentButton onClick={() => navigate(-1)}>
                <FontAwesomeIcon size="lg" icon={faArrowLeft}/>
            </TransparentButton>
            <h3>{title}</h3>
            <img className='viasat-logo' alt="Viasat History Logo" src={t('viasatLogo') as string}/>
        </div>
    );
};

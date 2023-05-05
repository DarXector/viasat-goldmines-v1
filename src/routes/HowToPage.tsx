import {InnerPage} from "./InnerPage";

import './HowToPage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import {Link, useLocation} from "react-router-dom";
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import ReactGA from "react-ga4";

export function HowToPage() {
    const {t, i18n} = useTranslation();
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash });
    }, [location]);

    return (
        <InnerPage title={t('how_to_play')} scrollable={true}>
            <div className='page howto-page'>
                <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={t('logo') as string}/>
                <p style={{marginTop: '-20px'}}>Q U I Z Z</p>
                <div className='page-container d-flex flex-column align-items-center'>
                    <FontAwesomeIcon size="lg" icon={faCompass} color='#A51B17'  style={{marginBottom: '10px'}}/>
                    <p>
                        {t('how_to_play_text_1')}
                    </p>
                    <p>
                        {t('how_to_play_text_2')}
                    </p>
                    <p>
                        {t('how_to_play_text_3')}
                    </p>
                    <p>
                        {t('how_to_play_text_4')}
                    </p>
                    <p>
                        {t('how_to_play_text_5')}
                    </p>
                    <br />
                    <Link to={`/${i18n.language}/quiz`}>
                        <AppButton inverted={true}>{t('take_a_quiz').toUpperCase()}</AppButton>
                    </Link>
                    <br/>
                    <Link to={`/${i18n.language}/about`}>
                        <TransparentButton inverted={true}>{t('about').toUpperCase()}</TransparentButton>
                    </Link>
                    <br/>
                </div>
            </div>
        </InnerPage>
    );
};

import {InnerPage} from "./InnerPage";

import './AboutPage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {schedule, scheduleRerun} from "../data/schedule";
import {EpisodeInfo} from "../components/EpisodeInfo";
import {Link} from "react-router-dom";
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";
import {useTranslation} from "react-i18next";

export function AboutPage() {
    const {t, i18n} = useTranslation();
    return (
        <InnerPage title={t('about')} scrollable={true}>
            <div className='page about-page'>
                <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={t('logo') as string}/>
                <p className='subtitle' style={{marginTop: '-20px'}}>{t('quiz').toUpperCase().split('').join(' ')}</p>
                <div className='page-container d-flex flex-column align-items-center'>
                    <FontAwesomeIcon size="lg" icon={faCircleInfo} color='#A51B17' style={{marginBottom: '10px'}}/>
                    <p>{t('about_text_1')}</p>
                    <div className='premiere-block d-flex flex-column align-items-center'>
                        <p className='premiere-line-1'>{t('about_text_2')}</p>
                        <p className='premiere-line-2'>{t('about_text_3')}</p>
                    </div>
                    {
                        schedule.map((item, index) => <EpisodeInfo key={item.id} title={`${t('episode')} ${item.title}`} day={`${t(item.day)} ${item.date}`} time={item.time}/>)
                    }
                    <br />
                    <p>
                        {t('about_text_4')}
                    </p>
                    <p>
                        {t('about_text_5')}
                    </p>
                    <div className='premiere-block d-flex flex-column align-items-center'>
                        <p className='premiere-line-1'>{t('about_text_6')}</p>
                        <p className='premiere-line-2'>{t('about_text_7')}</p>
                    </div>
                    <br />
                    {
                        scheduleRerun.map((item, index) => <EpisodeInfo key={item.id} title={`${t('episode')} ${item.title}`} day={`${t(item.day)} ${item.date}`} time={item.time}/>)
                    }
                    <br />
                    <p>
                        {t('about_text_8')}
                    </p>
                    <p>
                        {t('about_text_9')}
                    </p>
                    <Link to={`/${i18n.language}/quiz`}>
                        <AppButton inverted={true}>{t('take_a_quiz').toUpperCase()}</AppButton>
                    </Link>
                    <br />
                    <Link to={`/${i18n.language}/howto`}>
                        <TransparentButton inverted={true}>{t('how_to_play').toUpperCase()}</TransparentButton>
                    </Link>
                    <br />
                </div>
            </div>
        </InnerPage>
    );
};

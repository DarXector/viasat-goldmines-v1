// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Scrollbar} from "swiper";
import {Slide} from "../components/Slide";

import viasatLogoImg from '../assets/images/viasat-explore-logo.png';
import appTitleImg from '../assets/images/title-en.png';
import castImg from '../assets/images/cast.png';
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export function StartPage() {
    const { t, i18n } = useTranslation();

    return (
        <Swiper pagination={true} modules={[Pagination, Scrollbar]} className="my-swiper">
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' alt="Viasat History Logo" src={t('viasatLogo') as string}/>
                    <p>{t('welcome')}</p>
                    <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={t('logo') as string}/>
                    <p style={{marginTop: '-20px'}}>{t('quiz').toUpperCase().split('').join(' ')}</p>
                    <img alt="Cast" className='cast-image' src={castImg}/>
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' alt="Viasat History Logo" src={t('viasatLogo') as string}/>
                    <p>{t('welcome_text')}</p>
                    <br />
                    <Link to={`/${i18n.language}/quiz`}>
                        <AppButton>{t('take_a_quiz').toUpperCase()}</AppButton>
                    </Link>
                    <br />
                    <Link to={`/${i18n.language}/about`}>
                        <TransparentButton>{t('about').toUpperCase()}</TransparentButton>
                    </Link>
                    <br />
                </Slide>
            </SwiperSlide>
        </Swiper>
    );
};

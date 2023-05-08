// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Scrollbar, Autoplay} from "swiper";
import {Slide} from "../components/Slide";

import logoGlow from '../assets/images/glow.png';
import castImg from '../assets/images/cast.png';
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import ReactGA from "react-ga4";

export function StartPage() {
    const { t, i18n } = useTranslation();

    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash });
    }, [location]);

    return (
        <Swiper pagination={true}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className="my-swiper">
            <SwiperSlide>
                <Slide>
                    <div className='position-relative'>
                        <img className='logo-glow' alt="Viasat History Logo Glow" src={logoGlow}/>
                        <img className='viasat-logo' alt="Viasat History Logo" src={t('viasatLogo') as string}/>
                    </div>
                    <p>{t('welcome')}</p>
                    <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={t('logo') as string}/>
                    <p style={{marginTop: '-20px'}}>{t('quiz').toUpperCase().split('').join(' ')}</p>
                    <img alt="Cast" className='cast-image' src={castImg}/>
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <div className='position-relative'>
                        <img className='logo-glow' alt="Viasat History Logo Glow" src={logoGlow}/>
                        <img className='viasat-logo' alt="Viasat History Logo" src={t('viasatLogo') as string}/>
                    </div>
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

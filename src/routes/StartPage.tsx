// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Scrollbar} from "swiper";
import {Slide} from "../components/Slide";

import viasatLogoImg from '../assets/images/viasat-explore-logo.png';
import appTitleImg from '../assets/images/title-ENG.png';
import castImg from '../assets/images/cast.png';
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";
import {Link} from "react-router-dom";

export function StartPage() {
    return (
        <Swiper pagination={true} modules={[Pagination, Scrollbar]} className="my-swiper">
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' alt="Viasat History Logo" src={viasatLogoImg}/>
                    <p>Welcome to</p>
                    <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={appTitleImg}/>
                    <p style={{marginTop: '-20px'}}>Q U I Z Z</p>
                    <img alt="Cast" className='cast-image' src={castImg}/>
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' alt="Viasat History Logo" src={viasatLogoImg}/>
                    <p>Welcome to our quizz inspired by Auusie Gold Hunters Mine SOS Show on Viasat Explore channel.</p>
                    <br />
                    <p>Lorem ipsum veteran gold hunter Paul Mackie, geologist Aaron Raddock, and logistics expert Melanie Wood travel to Australia’s toughest frontiers to help restore six struggling gold mining operations to success.</p>
                    <br />
                    <Link to='/quiz'>
                        <AppButton>TAKE A QUIZ</AppButton>
                    </Link>
                    <br />
                    <Link to='/about'>
                        <TransparentButton>ABOUT</TransparentButton>
                    </Link>
                    <br />
                </Slide>
            </SwiperSlide>
        </Swiper>
    );
};

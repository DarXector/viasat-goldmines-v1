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
import {Button} from "reactstrap";
import {WhiteButton} from "../components/WhiteButton";
import {TransparentButton} from "../components/TransparentButton";

export function StartPage() {
    return (
        <Swiper pagination={true} modules={[Pagination, Scrollbar]} className="my-swiper">
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' src={viasatLogoImg}/>
                    <p>Welcome to</p>
                    <img className='app-title' src={appTitleImg}/>
                    <p style={{marginTop: '-20px'}}>Q U I Z Z</p>
                    <img className='cast-image' src={castImg}/>
                </Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide>
                    <img className='viasat-logo' src={viasatLogoImg}/>
                    <p>Welcome to our quizz inspired by Auusie Gold Hunters Mine SOS Show on Viasat Explore channel.</p>
                    <br />
                    <p>Lorem ipsum veteran gold hunter Paul Mackie, geologist Aaron Raddock, and logistics expert Melanie Wood travel to Australia’s toughest frontiers to help restore six struggling gold mining operations to success.</p>
                    <br />
                    <WhiteButton>TAKE A QUIZ</WhiteButton>
                    <br />
                    <TransparentButton>ABOUT</TransparentButton>
                    <br />
                </Slide>
            </SwiperSlide>
        </Swiper>
    );
};

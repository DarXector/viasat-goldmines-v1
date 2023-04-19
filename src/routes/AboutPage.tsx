import {InnerPage} from "./InnerPage";
import appTitleImg from "../assets/images/title-ENG.png";

import './AboutPage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {schedule, scheduleRerun} from "../data/schedule";
import {EpisodeInfo} from "../components/EpisodeInfo";
import {Link} from "react-router-dom";
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";

export function AboutPage() {
    return (
        <InnerPage title={'About'}>
            <div className='page about-page'>
                <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={appTitleImg}/>
                <p className='subtitle' style={{marginTop: '-20px'}}>Q U I Z Z</p>
                <div className='page-container d-flex flex-column align-items-center'>
                    <FontAwesomeIcon size="lg" icon={faCircleInfo} color='#A51B17'/>
                    <br />
                    <p>
                        As a modern-day gold rush sweeps Australia, prospectors are racing to strike it rich, but while a few cash in, many are struggling to turn their gold mining dreams into reality.
                    </p>
                    <div className='premiere-block d-flex flex-column align-items-center'>
                        <p className='premiere-line-1'>Aussie Gold Hunters - Mine SOS</p>
                        <p className='premiere-line-2'>SERIES 1, SHOW PREMIERE</p>
                    </div>
                    <br />
                    {
                        schedule.map((item, index) => <EpisodeInfo key={item.id} title={item.title} day={item.day} time={item.time}/>)
                    }
                    <br />
                    <p>
                        Battling mechanical miseries and epic gold droughts, they’re missing the mining know-how to rescue their fortunes from disaster.
                    </p>
                    <p>
                        However, veteran Aussie Gold Hunter Paul Mackie and his mine makeover team are here to help turn prospectors’ pain back into profit; armed with his signature straight-shooting advice and scrapyard solutions, Paul is joined by master bush geologist Aaron Raddock and his ‘pit boss’ - logistics expert Melanie Wood. The team travel together to Australia’s toughest wild frontiers to help restore six struggling gold mining operations to success; With just six days to make mechanical fixes, locate new gold deposits, upgrade skills and overhaul broken-down camp facilities, the crew are on a mission to transform gold mines - and miners - as they dig deep to help those in need.
                    </p>
                    <div className='premiere-block d-flex flex-column align-items-center'>
                        <p className='premiere-line-1'>Aussie Gold Hunters - Mine SOS</p>
                        <p className='premiere-line-2'>SERIES 1, SHOW RE-RUN</p>
                    </div>
                    <br />
                    {
                        scheduleRerun.map((item, index) => <EpisodeInfo key={item.id} title={item.title} day={item.day} time={item.time}/>)
                    }
                    <br />
                    <p>
                        The team travel together to Australia’s toughest wild frontiers to help restore six struggling gold mining operations to success.
                    </p>
                    <p>
                        With just six days to make mechanical fixes, locate new gold deposits, upgrade skills and overhaul broken-down camp facilities, the crew are on a mission to transform gold mines - and miners - as they dig deep to help those in need.
                    </p>
                    <Link to='/quiz'>
                        <AppButton inverted={true}>TAKE A QUIZ</AppButton>
                    </Link>
                    <br />
                    <Link to='/howto'>
                        <TransparentButton inverted={true}>HOW TO PLAY</TransparentButton>
                    </Link>
                    <br />
                </div>
            </div>
        </InnerPage>
    );
};

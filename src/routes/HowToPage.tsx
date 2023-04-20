import {InnerPage} from "./InnerPage";
import appTitleImg from "../assets/images/title-ENG.png";

import './HowToPage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {AppButton} from "../components/AppButton";
import {TransparentButton} from "../components/TransparentButton";

export function HowToPage() {
    return (
        <InnerPage title={'How To Play'} scrollable={true}>
            <div className='page howto-page'>
                <img className='app-title' alt="Auissie Gold Hunters MINE SOS" src={appTitleImg}/>
                <p style={{marginTop: '-20px'}}>Q U I Z Z</p>
                <div className='page-container d-flex flex-column align-items-center'>
                    <FontAwesomeIcon size="lg" icon={faCompass} color='#A51B17'/>
                    <br />
                    <p>
                        As a modern-day gold rush sweeps Australia, prospectors are racing to strike it rich, but while
                        a few cash in, many are struggling to turn their gold mining dreams into reality;
                    </p>
                    <p>
                        battling mechanical miseries and epic gold droughts, they’re missing the mining know-how to
                        rescue their fortunes from disaster.
                    </p>
                    <p>
                        However, veteran Aussie Gold Hunter Paul Mackie and
                        his mine makeover team are here to help turn prospectors’ pain back into profit; armed with his
                        signature straight-shooting advice and scrapyard solutions, Paul is joined by master bush
                        geologist
                        Aaron Raddock and his ‘pit boss’ - logistics expert Melanie Wood.
                    </p>
                    <p>
                        The team travel together to
                        Australia’s toughest wild frontiers to help restore six struggling gold mining operations to
                        success;
                    </p>
                    <p>
                        With just six days to make mechanical fixes, locate new gold deposits, upgrade skills
                        and overhaul broken-down camp facilities, the crew are on a mission to transform gold mines -
                        and
                        miners - as they dig deep to help those in need.
                    </p>
                    <br />
                    <Link to='/quiz'>
                        <AppButton inverted={true}>TAKE A QUIZ</AppButton>
                    </Link>
                    <br/>
                    <Link to='/about'>
                        <TransparentButton inverted={true}>ABOUT</TransparentButton>
                    </Link>
                    <br/>
                </div>
            </div>
        </InnerPage>
    );
};

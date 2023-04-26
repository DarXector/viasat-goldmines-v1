import {AuthStatus} from "./AuthStatus";
import {Link, NavLink, Outlet} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faCompass, faTrophy, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {Nav, NavItem} from "reactstrap";
import {useTranslation} from "react-i18next";
import CookieConsent from "react-cookie-consent";

const tabs = [{
    route: "/about",
    icon: faCircleInfo,
    label: "about"
},{
    route: "/howto",
    icon: faCompass,
    label: "how_to_play"
},{
    route: "/quiz",
    icon: faClipboardQuestion,
    label: "quiz"
},{
    route: "/ranking",
    icon: faTrophy,
    label: "ranking"
}]

export function Layout() {
    const {t, i18n} = useTranslation();
    return (
        <div className="content">
            <Outlet />
            <nav className="navbar mt-auto navbar-light bottom-tab-nav" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`} className="flex-fill">
                                    <NavLink to={`/${i18n.language}${tab.route}`} className="nav-link bottom-nav-link">
                                        <div className="row d-flex flex-column">
                                            <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                            <div className="bottom-tab-label">{t(tab.label).toUpperCase()}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
            <CookieConsent
                location="bottom"
                buttonText={t('save')}
                style={{ background: "#2B373B", color: "#fff", fontSize: "9pt" }}
                buttonStyle={{ color: "#fff", fontSize: "11pt", borderRadius: "10px", background: "#A41A16", border: "none" }}
            >
                {t('cookies_popup_text')}
            </CookieConsent>
        </div>
    );
}

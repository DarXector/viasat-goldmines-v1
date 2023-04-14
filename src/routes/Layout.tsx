import {AuthStatus} from "./AuthStatus";
import {Link, NavLink, Outlet} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardQuestion, faCompass, faTrophy, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {Nav, NavItem} from "reactstrap";

const tabs = [{
    route: "/about",
    icon: faCircleInfo,
    label: "ABOUT"
},{
    route: "/howto",
    icon: faCompass,
    label: "HOW TO PLAY"
},{
    route: "/quiz",
    icon: faClipboardQuestion,
    label: "QUIZ"
},{
    route: "/ranking",
    icon: faTrophy,
    label: "RANKING"
}]

export function Layout() {
    return (
        <div className="content">
            <Outlet />
            <nav className="navbar mt-auto navbar-light bottom-tab-nav" role="navigation">
                <Nav className="w-100">
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`} className="flex-fill">
                                    <NavLink to={tab.route} className="nav-link bottom-nav-link">
                                        <div className="row d-flex flex-column">
                                            <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                            <div className="bottom-tab-label">{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    );
}

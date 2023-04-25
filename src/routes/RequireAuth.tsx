import {useUser} from "../stores/userStore";
import {Navigate, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let {currentUser} = useUser();
    let location = useLocation();

    const {i18n} = useTranslation();

    if (!currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={`/${i18n.language}/login`} state={{ from: location }} replace />;
    }

    return children;
}

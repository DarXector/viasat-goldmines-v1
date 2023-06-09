import {useUser} from "../stores/userStore";
import {useLocation, useNavigate} from "react-router-dom";
import viasatLogoImg from "../assets/images/viasat-explore-logo.png";

import './LoginPage.css';
import {AppButton} from "../components/AppButton";
import {Spinner} from "reactstrap";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import ReactGA from "react-ga4";

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    const {t, i18n} = useTranslation();
    const {login} = useUser();
    const pending = useUser(state => state.pending);
    const error = useUser(state => state.error);

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search + location.hash });
    }, [location]);

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;

        const unsub1 = useUser.subscribe(() => {
            console.log("userStore.subscribe: ", useUser.getState());
            navigate(from, { replace: true });
        })
        await login(username, i18n.language);
        unsub1();
    }

    return (
        <div className='login-page page'>
            <img className='viasat-logo' alt="Viasat History Logo" src={viasatLogoImg}/>
            <p>
                {t('login_text')}
            </p>
            <form className='d-flex flex-column align-items-stretch w-75' style={{marginBottom: '20px'}} onSubmit={handleSubmit}>
                <input className='login-input' name="username" type="text" placeholder="USERNAME" />
                <AppButton type="submit" inverted={true}>START</AppButton>
            </form>
            {error ? <div className='error'>{error}</div> : ''}
            {pending? <Spinner color='light' /> : ''}
        </div>
    );
}

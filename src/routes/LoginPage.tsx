import {useUser} from "../stores/userStore";
import {useLocation, useNavigate} from "react-router-dom";
import viasatLogoImg from "../assets/images/viasat-explore-logo.png";

import './LoginPage.css';
import {AppButton} from "../components/AppButton";
import {Spinner} from "reactstrap";

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    const {login} = useUser();
    const pending = useUser(state => state.pending)

    let from = location.state?.from?.pathname || "/";

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;

        const unsub1 = useUser.subscribe(() => {
            console.log("userStore.subscribe: ", useUser.getState());
            navigate(from, { replace: true });
        })
        await login(username);
        unsub1();
    }

    return (
        <div className='login-page page'>
            <img className='viasat-logo' alt="Viasat History Logo" src={viasatLogoImg}/>
            <p>
                Enter your nickname below and press start when you are ready.
            </p>
            <form className='d-flex flex-column align-items-stretch w-75' style={{marginBottom: '20px'}} onSubmit={handleSubmit}>
                <input className='login-input' name="username" type="text" placeholder="USERNAME" />
                <AppButton type="submit" inverted={true}>START</AppButton>
            </form>
            {pending? <Spinner color='light' /> : ''}
        </div>
    );
}

import {userStore} from "../stores/userStore";
import {useLocation, useNavigate} from "react-router-dom";

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    const {login} = userStore();

    let from = location.state?.from?.pathname || "/";

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;

        const unsub1 = userStore.subscribe(() => {
            console.log("userStore.subscribe: ", userStore.getState());
            navigate(from, { replace: true });
        })
        await login(username);
        unsub1();
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" />
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

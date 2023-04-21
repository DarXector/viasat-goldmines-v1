import {useUser} from "../stores/userStore";

export function AuthStatus() {
    const {currentUser} = useUser();

    if (!currentUser) {
        return <p>You are not logged in.</p>;
    }

    // @ts-ignore
    return <p>Welcome {currentUser}!</p>;
}

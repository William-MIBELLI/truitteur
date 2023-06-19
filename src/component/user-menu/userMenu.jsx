import { useSelector } from "react-redux";
import { Container, SettingsMenu, UserPic } from "./userMenu.style";
import { getUserSelector } from "../../store/user/user.selector";
import SignIn from "../../route/sign-in/signIn";
import { Brand } from "../../route/navigation/navigation.style";

const UserMenu = (  ) => {

    const user = useSelector(getUserSelector)

    return (
        <Container>
        {
            user.user && (
                <SettingsMenu>
                    <UserPic src={`http://localhost:8080/${user.user.pictureUrl}`}/>
                    <a>Settings</a>
                    <a>Messages</a>
                    <a>Support</a>
                    <a>Link </a>
                </SettingsMenu>
            )
        }
        </Container>
    )
}

export default UserMenu
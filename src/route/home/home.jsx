import { useSelector } from "react-redux";
import Button from "../../component/button/button";
import Spinner from "../../component/spinner/spinner";
import Title from "../../component/title/title";
import { ButtonContainer, Container } from "./home.style";
import { useNavigate } from "react-router-dom";
import { getUserSelector } from "../../store/user/user.selector";

const Home = () => {

    const navigate = useNavigate()
    const user = useSelector(getUserSelector)

    const onClickHandler = (target) => {
        return navigate(target)
    }

    return (
        <Container>
            <Title text={'Welcome on Truitteur'}/>
            <p>Let's post some <strong>Truits</strong></p>
            <ButtonContainer>
            {
                user.user ? (
                    <>
                        <Button clickHandler={() => onClickHandler('/create-post')} text={'New post'}/>
                        <Button clickHandler={() => onClickHandler('/posts')} text={'View posts'}/>
                    </>
                ) : (
                    <Button clickHandler={() => onClickHandler('/Login')} name='/login' target='/Login' text={'Login'}/>
                )
            }
            </ButtonContainer>
        </Container>
    )
}

export default Home
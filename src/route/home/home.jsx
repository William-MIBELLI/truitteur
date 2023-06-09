import Button from "../../component/button/button";
import Spinner from "../../component/spinner/spinner";
import { ButtonContainer, Container } from "./home.style";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const onClickHandler = (target) => {
        console.log('CLICK WESHHH : ', target)
        return navigate(target)
    }

    return (
        <Container>
            <h1>Bienvenue sur Truitteur</h1>
            <p>Que voulez vous faire ?</p>
            <ButtonContainer>
                <Button clickHandler={() => onClickHandler('/Login')} name='/login' target='/Login' text={'Login'}/>
                <Button clickHandler={() => onClickHandler('/create-post')} text={'New post'}/>
                <Button clickHandler={() => onClickHandler('/posts')} text={'View posts'}/>
            </ButtonContainer>
            <Spinner/>
        </Container>
    )
}

export default Home
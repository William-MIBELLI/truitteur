import Button from "../../component/button/button";
import Spinner from "../../component/spinner/spinner";
import Title from "../../component/title/title";
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
            <Title text={'Welcome on Truitteur'}/>
            <p>What you want to do ?</p>
            <ButtonContainer>
                <Button clickHandler={() => onClickHandler('/Login')} name='/login' target='/Login' text={'Login'}/>
                <Button clickHandler={() => onClickHandler('/create-post')} text={'New post'}/>
                <Button clickHandler={() => onClickHandler('/posts')} text={'View posts'}/>
            </ButtonContainer>
        </Container>
    )
}

export default Home
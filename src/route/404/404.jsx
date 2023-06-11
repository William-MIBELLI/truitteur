import Title from '../../component/title/title'
import { Container } from './404.style'

const ErrorPage = () => {
    return (
        <Container>
            <Title text={'Mmhh ?'}/>
            <div>Ups, page introuvable... 🤔</div>
        </Container>
    )
}

export default ErrorPage
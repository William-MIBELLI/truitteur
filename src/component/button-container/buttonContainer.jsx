import { Container } from "./buttonContainer.style";

const ButtonContainer = ({ children }) => {
    return (
        <Container>
            { children}
        </Container>
    )
}

export default ButtonContainer
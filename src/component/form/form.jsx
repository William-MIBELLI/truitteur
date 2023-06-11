import { Container, ErrorMessage } from "./form.style";

const Form = ({ children, onSubmit, error }) => {
    return (
        <Container onSubmit={onSubmit}>
        {
            error && <ErrorMessage>{error} 😢</ErrorMessage>
        }
            { children }
        </Container>
    )
}

export default Form
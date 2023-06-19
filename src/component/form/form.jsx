import { Container, ErrorMessage } from "./form.style";

const Form = ({ children, onSubmit, error }) => {
    return (
        <Container onSubmit={onSubmit} enctype="multipart/form-data">
        {
            error && <ErrorMessage>{error} 😢</ErrorMessage>
        }
            { children }
        </Container>
    )
}

export default Form
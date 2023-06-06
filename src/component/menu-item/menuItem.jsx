import { Container } from './menuItem.style'

const MenuItem = ({ text, target }) => {
    return (
        <Container href={target}>{ text }</Container>
    )
}

export default MenuItem
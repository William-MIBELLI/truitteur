import { Container } from './menuItem.style'

const MenuItem = ({ text, onClickHandler }) => {
    return (
        <Container onClick={onClickHandler}>{ text }</Container>
    )
}

export default MenuItem
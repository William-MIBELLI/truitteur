import { BaseButton } from './button.style'

const Button = ({ text, clickHandler, type = 'button' }) => {
    return (
        <BaseButton onClick={clickHandler} type={type}>{ text }</BaseButton>
    )
}

export default Button
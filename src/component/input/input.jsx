import { InputContainer } from "./input.style";

const Input = ({ label, name, value, changeHandler }) => {
    return (
        <InputContainer>
            <label htmlFor={name}>{ label }</label>
            <input name={name} value={value} onChange={changeHandler}/>
        </InputContainer>
    )
}

export default Input
import { InputContainer } from "./input.style";

const Input = ({ label, name, value, changeHandler, type }) => {
    return (
        <InputContainer>
            <label htmlFor={name}>{ label }</label>
            <input type={type} name={name} value={value} onChange={changeHandler}/>
        </InputContainer>
    )
}

export default Input
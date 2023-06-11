import { InputContainer } from "./input.style";

const Input = ({ label, name, value, changeHandler, type, blurHandler, placeHolder }) => {

    return (
        <InputContainer type={type}>
            <label htmlFor={name}>{ label }</label>
            <input placeholder={placeHolder} type={type} name={name} value={value} onChange={changeHandler} onBlur={blurHandler}/>
        </InputContainer>
    )
}

export default Input
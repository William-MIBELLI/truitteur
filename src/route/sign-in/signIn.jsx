import { useState } from "react";
import Button from "../../component/button/button";
import Input from "../../component/input/input";
import { Container } from "./signIn.style";
import { createUserOnServer } from "../../utils/server/server";

const defaultValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword : ''
}

const SignIn = () => {

    const [ user, setUser ] = useState(defaultValue)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        Object.keys(user).forEach(key => formData.append(key, user[key]))
        await createUserOnServer(formData)
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setUser({...user, [name]: value})
    }

    return (
        <Container>
            <h1>Create your account</h1>
            <form onSubmit={onSubmitHandler}>
                <Input label={'Name'} name={'name'} value={user.name} changeHandler={onChangeHandler}/>
                <Input label={'Email'} name={'email'} type={'email'} value={user.email} changeHandler={onChangeHandler}/>
                <Input label={'Password'} name={'password'} type={'password'} value={user.password} changeHandler={onChangeHandler}/>
                <Input label={'Confirm password'} name={'confirmPassword'} type={'password'} value={user.confirmPassword} changeHandler={onChangeHandler}/>
                <Button text={'Sign in'} type="submit"/>
            </form>
        </Container>
    )
} 

export default SignIn
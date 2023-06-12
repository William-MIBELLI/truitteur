import { useState, useRef } from "react";
import Button from "../../component/button/button";
import Input from "../../component/input/input";
import { Container } from "./signIn.style";
import { createUserOnServer } from "../../utils/server/auth.server";
import Title from "../../component/title/title";
import Form from "../../component/form/form";
import SimpleReactValidator from "simple-react-validator";
import Spinner from '../../component/spinner/spinner'
import ButtonContainer from "../../component/button-container/buttonContainer";

const defaultValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword : ''
}
const NAME_MIN_LENGTH = 4
const NAME_MAX_LENGTH = 15
const PASSWORD_MIN_LENGTH = 6
const PASSWORD_MAX_LENGTH = 20

const SignIn = () => {

    const [ user, setUser ] = useState(defaultValue)
    const [ success, setSuccess ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const validator = useRef(new SimpleReactValidator({
        messages: {
            'in': 'Password must match.'
        }
    }))
    const namePlaceHolder = `Between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} caracters`
    const passwordPlaceHolder = `Between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} caracters`
    const [ up, forceUpdate] = useState(0)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(validator.current.allValid()){
            setLoading(true)
            const formData = new FormData()
            Object.keys(user).forEach(key => formData.append(key, user[key]))
            const response = await createUserOnServer(formData)
            if(response.status === 201){
                setSuccess(true)
            }
            setLoading(false)
        } else {
            validator.current.showMessages()
            forceUpdate(up + 1)
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setUser({...user, [name]: value})
    }

    const onBlurHandler = event => {
        const { name, value } = event.target
        if(value.trim().length !== 0){
            validator.current.showMessageFor(name)
        }else {
            validator.current.hideMessageFor(name)
        }
        forceUpdate(up + 1)
        
    }

    return (
        <Container>
            <Title text={'Create your account'}/>
            {
                success ? ( <p>Account created successfully !</p> ) : (
                    <Form onSubmit={onSubmitHandler}>
                        <Input label={'Name'} name={'name'} placeHolder={namePlaceHolder} value={user.name} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                        {validator.current.message('name', user.name, `required|alpha_num|min:${NAME_MIN_LENGTH}|max:${NAME_MAX_LENGTH}`)}
                        <Input label={'Email'} name={'email'} type={'email'} value={user.email} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                        {validator.current.message('email', user.email, 'required|email')}
                        <Input label={'Password'} name={'password'} placeHolder={passwordPlaceHolder} type={'password'} value={user.password} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                        {validator.current.message('password', user.password, `required|min:${PASSWORD_MIN_LENGTH}|max:${PASSWORD_MAX_LENGTH}`)}
                        <Input label={'Confirm'} name={'confirmPassword'} type={'password'} blurHandler={onBlurHandler} value={user.confirmPassword} changeHandler={onChangeHandler}/>
                        {validator.current.message('confirmPassword', user.confirmPassword, `required|in:${user.password}`)}
                        {
                            !loading ? ( 
                                <ButtonContainer>
                                    <Button text={'Sign in'} type="submit"/>
                                </ButtonContainer>
                                ) : (
                                <Spinner/>
                            )
                        }
                    </Form>
                )
            }
        </Container>
    )
} 

export default SignIn
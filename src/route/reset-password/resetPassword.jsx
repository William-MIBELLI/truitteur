import { useParams } from "react-router-dom";
import { Container } from "./resetPassword.style";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import { useRef, useState } from "react";
import { resetPassword } from "../../utils/server/server";
import Title from "../../component/title/title";
import Form from "../../component/form/form";
import SimpleReactValidator from "simple-react-validator";
import Spinner from "../../component/spinner/spinner";
import ButtonContainer from "../../component/button-container/buttonContainer";

const defaultValue = {
    email: '',
    password: '',
    confirmPassword: '',
    token: ''
}

const ResetPassword = () => {

    const params = useParams()
    const [ credentials, setCredentials ] = useState({...defaultValue, token: params.token})
    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] =useState(false)
    const [ error, setError ] = useState(undefined)
    const [ up, forceUpdate ] = useState(0)
    const validator = useRef(new SimpleReactValidator({
        messages: {
            'in' : 'Password must match.'
        }
    }))

    const onChangeHandler = event => {
        const { name, value } = event.target
        setCredentials({...credentials, [name]: value})
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(validator.current.allValid()){
            setLoading(true)
            const formData = new FormData()
            Object.keys(credentials).forEach(key => formData.append(key, credentials[key]))
            const data = await resetPassword(formData)
            if(data.status === 201){
                setSuccess(true)
            }else{
                setError(data.message)
            }
            setLoading(false)
        }
    }

    const onBlurHandler = event => {
        const { name, value } = event.target
        if(value.trim().length !== 0){
            validator.current.showMessageFor(name)
        }else{
            validator.current.hideMessageFor(name)
        }
        forceUpdate(up + 1)
    }

    return (
        <Container>
            <Title text={'Reset your password'}/>
            {
                success ? ( <p>Password updatet sucessfully.</p> ) : (
                    <Form onSubmit={onSubmitHandler} error={error}>
                        <Input type={'email'} name='email' blurHandler={onBlurHandler} label={'Your email'} value={credentials.email} changeHandler={onChangeHandler}/>
                        {validator.current.message('email', credentials.email, 'required|email')}
                        <Input type={'password'} name='password' blurHandler={onBlurHandler} label={'New password'} value={credentials.password} changeHandler={onChangeHandler}/>
                        {validator.current.message('password', credentials.password, 'required|min:6|max:20')}
                        <Input type={'password'} name='confirmPassword' blurHandler={onBlurHandler} label={'Confirm'} value={credentials.confirmPassword} changeHandler={onChangeHandler}/>
                        {validator.current.message('confirmPassword', credentials.confirmPassword, `required|in:${credentials.password}`)}
                        {
                            loading ? ( <Spinner/> ) : (
                                <ButtonContainer>
                                    <Button type="submit" text={'Reset'}/>
                                </ButtonContainer>
                            )
                        }
                    </Form>
                )
            }
        </Container>
    )
}

export default ResetPassword
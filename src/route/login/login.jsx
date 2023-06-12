import { useState } from 'react'
import Input from '../../component/input/input'
import { Container } from './login.style'
import Button from '../../component/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAsync } from '../../store/user/user.action'
import { getUserSelector } from '../../store/user/user.selector'
import Spinner from '../../component/spinner/spinner'
import { Link, useNavigate } from 'react-router-dom'
import Title from '../../component/title/title'
import Form from '../../component/form/form'
import SimpleReactValidator from 'simple-react-validator'
import { useRef } from 'react'
import ButtonContainer from '../../component/button-container/buttonContainer'

const defaultValue = {
    email: '',
    password: ''
}

const Login = () => {

    const [ credentials, setCredentials ] = useState(defaultValue)
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    const navigate = useNavigate()
    const [ up, forceUpdate ] = useState(0)
    const validator = useRef(new SimpleReactValidator())

    const onChangeHandler = event => {
        const { name, value } = event.target
        setCredentials({...credentials, [name]: value})
    }

    const onSubmitHandler = async event => {
        event.preventDefault()
        const formValid = validator.current.allValid()
        if(formValid){
            const formData = new FormData()
            Object.keys(credentials).forEach(key => formData.append(key, credentials[key]))
    
            dispatch(fetchUserAsync(formData))
        }else{
            validator.current.showMessages()
            forceUpdate(up + 1)
        }

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

    const onForgetPassword = async () => {
        navigate('/forget-password')
    }

    return (
        <Container>
            <Title text={'Log in'}/>
            {
                !user.user ? (
                    <Form onSubmit={onSubmitHandler} error={ user.error && user.error.toString()}>
                        <Input label={'Email'} type={'email'} name={'email'} value={credentials.email} blurHandler={onBlurHandler} changeHandler={onChangeHandler} />
                        {validator.current.message('email',credentials.email, 'required|email')}
                        <Input label={'Password'} type='password' name={'password'} value={credentials.password} blurHandler={onBlurHandler} changeHandler={onChangeHandler}/>
                        {validator.current.message('password', credentials.password, 'required|alpha_num')}
                        {
                            user.isLoading ? (<Spinner/>) : (
                                <ButtonContainer>
                                    <Button text={'Log in'} type='submit'/>
                                    <Button text={'Forget password ?'} type='button' clickHandler={onForgetPassword}/>
                                </ButtonContainer>
                            )
                        }
                    </Form>
                ) : ( <p>Connexion OK</p>)
            }
            {
                !user.user && (<Link as to={'/signin'}>Sign Up</Link>)
            } 
        </Container>
    )
}

export default Login
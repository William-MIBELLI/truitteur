import { useState } from 'react'
import Input from '../../component/input/input'
import { Container } from './login.style'
import Button from '../../component/button/button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAsync } from '../../store/user/user.action'
import { getUserSelector } from '../../store/user/user.selector'
import Spinner from '../../component/spinner/spinner'

const defaultValue = {
    email: '',
    password: ''
}

const Login = () => {

    const [ credentials, setCredentials ] = useState(defaultValue)
    const dispatch = useDispatch()
    const user = useSelector(getUserSelector)
    console.log('user dans login : ', user)

    const onChangeHandler = event => {
        const { name, value } = event.target
        setCredentials({...credentials, [name]: value})
    }

    const onSubmitHandler = async event => {
        event.preventDefault()
        const formData = new FormData()
        Object.keys(credentials).forEach(key => formData.append(key, credentials[key]))

        dispatch(fetchUserAsync(formData))
    }

    if(user.isLoading){
        return ( <Spinner />)
    }

    return (
        <Container>
            <h1>Log in</h1>
            {
                user.error && ( <p>Une erreur est survenue : {user.error.message}</p> )
            }
            <form onSubmit={onSubmitHandler}>
                <Input label={'Email'} type={'email'} name={'email'} value={credentials.email} changeHandler={onChangeHandler}/>
                <Input label={'Password'} type='password' name={'password'} value={credentials.password} changeHandler={onChangeHandler}/>
                <Button text={'Log in'} type='submit'/>
            </form>
        </Container>
    )
}

export default Login
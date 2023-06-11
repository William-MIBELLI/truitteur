import { useRef, useState } from "react";
import Input from "../../component/input/input";
import { Container } from "./forgetPassword.style";
import Button from "../../component/button/button";
import { forgetPassword } from "../../utils/server/server";
import Title from "../../component/title/title";
import Form from "../../component/form/form";
import SimpleReactValidator from "simple-react-validator";
import Spinner from "../../component/spinner/spinner";
import ButtonContainer from "../../component/button-container/buttonContainer";

const ForgetPassword = () => {

    const [ email, setEmail ] = useState('')
    const validator = useRef(new SimpleReactValidator())
    const [ success, setSuccess ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(undefined)
    const [ up, forceUpdate ] = useState(0)

    const onChangeHandler = (event) => {
        const { value } = event.target
        setEmail(value)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(validator.current.allValid()){
            setLoading(true)
            const data = await forgetPassword(email)
            if(data.status === 200){
                setLoading(false)
                setSuccess(true)
            }else{
                setLoading(false)
                setError(data.message)
            }
        }
    }

    const onBlurHandler = event => {
        const { name, value } = event.target
        if(value.trim().length !== 0){
            validator.current.showMessageFor(name)
        } else {
            validator.current.hideMessageFor(name)
        }
        forceUpdate(up + 1)
    }

    return (
        <Container>
            <Title text={'Forget password ?'}/>
            {
                success ? ( <p>Mail sent</p> ) : (
                    <Form onSubmit={onSubmitHandler} error={error}>
                        <Input required label={'Your email'} name={'email'} type={'email'} value={email} blurHandler={onBlurHandler} changeHandler={onChangeHandler} />
                        {validator.current.message('email', email, 'required|email')}
                        { loading ? ( <Spinner/> ) : (
                            <ButtonContainer>
                                <Button type="submit" text={'Send reset\'s link'}/>
                            </ButtonContainer>
                        )}
                    </Form>
                )
            }
        </Container>
    )
}

export default ForgetPassword
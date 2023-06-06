import Input from "../input/input";
import { FormContainer, Container } from "./postForm.style";
import Button from "../button/button";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getPostSelector } from "../../store/post/post.selector";
import { addPost } from "../../store/post/post.action";

const PostForm = () => {

    const [ message, setMessage ] = useState('test usestate')
    const state = useSelector(getPostSelector)
    const dispatch = useDispatch()

    const onChangeHandler = event => {
        const { value } = event.target
        setMessage(value)
    }

    const onClickHandler = event => {
        dispatch(addPost(state, message))
    }

    return (
        <Container>
            <h1>Créez un nouveau Post</h1>
            <FormContainer>
                <Input name={'message'} label={'Votre message'} value={message} changeHandler={onChangeHandler}/>
                <Button text={'Post'} clickHandler={onClickHandler}/>
            </FormContainer>
        </Container>
    )
}

export default PostForm
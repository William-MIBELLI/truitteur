import { Container } from "./commentInput.style";
import Input from '../input/input'
import Button from '../button/button'
import Form from '../form/form'
import { useState } from "react";
import simpleReactValidator from  'simple-react-validator'
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTokenSelector } from "../../store/user/user.selector";
import { getCommentsSelector } from "../../store/comment/comment.selector";
import { addCommentAsync } from "../../store/comment/comment.action";
import { getPostsSelector } from "../../store/post/post.selector";

const CommentInput = ({ postId }) => {

    const [ comment, setComment ] = useState()
    const token = useSelector(getUserTokenSelector)
    const [ up, forceUpdate ] = useState(true)
    const commentState = useSelector(getCommentsSelector)
    const postState = useSelector(getPostsSelector)
    const validator = useRef(new simpleReactValidator())
    const dispatch = useDispatch()

    const onSubmithandler = async (event) => {
        event.preventDefault()
        if(!validator.current.allValid()){
            validator.current.showMessages()
            return forceUpdate(!up)       
        }
        const formData = new FormData()
        formData.append('parentId', postId)
        formData.append('message', comment)
        formData.append('fromPost', true)
        formData.append('postRef', postId)
        dispatch(addCommentAsync(commentState, token, formData, postState))
    }

    const onChangeHandler = (event) => {
        const { value } = event.target
        setComment(value)
    }

    return (
        <Container>
            <Form onSubmit={onSubmithandler}>
                <Input type={'text'}  label={'Your coms'} name={'commentInput'} value={comment} changeHandler={onChangeHandler}/>
                {validator.current.message('commentInput', comment, 'required')}
                <Button type="submit" text={'Comment it'}/>
            </Form>
        </Container>
    )
} 

export default CommentInput
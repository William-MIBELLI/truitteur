import Button from "../button/button";
import { useState } from "react";
import { CommentBody, CommentFooter, CommentInfo, Container, ContentDiv, CreationDiv } from "./comment.style";
import Input from "../input/input";
import { useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAsync } from "../../store/comment/comment.action";
import {  getCommentsSelector, selectCommentById } from "../../store/comment/comment.selector";
import { getUserTokenSelector } from "../../store/user/user.selector";
import CommentList from '../comment-list/commentList'
import { getPostsSelector } from "../../store/post/post.selector";
import Like from "../like/like";
import { useEffect } from "react";

const Comment = ({  commentId }) => {

    const data = useSelector(selectCommentById(commentId))
    const [ comment, setComment ] = useState(data)
    const { createdAt, like, message, userId, _id, gotResponse, postRef } = comment
    const [ displayAnswer, setDisplayAnswer ] = useState(false)
    const [ answer, setAnswer ] = useState(undefined)
    const [ up, forceUp ] = useState(false)
    const { name } = userId
    const validator = useRef(new SimpleReactValidator())
    const dispatch = useDispatch()
    const commentState = useSelector(getCommentsSelector)
    const postState = useSelector(getPostsSelector)
    const token = useSelector(getUserTokenSelector)
    const [ sent, setSent ] = useState(false)
    const [ displayAnswerList, setDisplayAnswerList ] = useState(false)

    useEffect(() => {
        setComment(data)
    },[data])

    const onAnswerHandler = () => {
        if(!displayAnswer){
            return setDisplayAnswer(true)
        }
        if(!validator.current.allValid()){
            validator.current.showMessages()
            return forceUp(!up)
        }
        const formData = new FormData()
        formData.append('message', answer)
        formData.append('parentId', comment._id)
        formData.append('fromPost', false)
        formData.append('postRef', postRef)
        dispatch(addCommentAsync(commentState, token, formData, postState))
        setSent(true)
        setDisplayAnswer(false)
        setComment({...comment, gotResponse:  comment.gotResponse+1})
    }

    const onChangeHandler = event => {
        const { value } = event.target
        setAnswer(value)
    }


    return (
        <Container>
            <CommentBody>
                <CreationDiv>
                    <p>Created at {new Date(createdAt).toLocaleDateString()}</p>
                    <p>By <strong>{name}</strong></p>
                </CreationDiv>
                <ContentDiv>
                    <p>{message}</p>
                </ContentDiv>
            <CommentInfo>
                <p>Like : {like}</p>
                <Like postId={_id} parentType='Comment'/>
                <p>Comms : {gotResponse}</p>
            </CommentInfo>
            </CommentBody>
            <CommentFooter>
            {
                gotResponse > 0 ? (
                    <Button text={'Response'} clickHandler={() => setDisplayAnswerList(!displayAnswerList)}/>
                ) : (
                    <p>No answer 😢</p>
                )
            }
            {
                displayAnswer && (
                    <div>
                        {validator.current.message('answer', answer, 'required')}
                        <Input name={'answer'} value={answer} changeHandler={onChangeHandler}/>
                    </div>
                )
            }
            {
                !sent && (
                    <Button text={displayAnswer ? 'send' : 'answer'} clickHandler={onAnswerHandler}/>
                )
            }
            </CommentFooter>
            <hr></hr>
            {
                displayAnswerList && (
                    <CommentList parentId={_id}/>
                )
            }
        </Container>
    )
}

export default Comment
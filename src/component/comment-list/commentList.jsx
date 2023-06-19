/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./commentList.style";
import { useState, useEffect } from "react";
import Comment from "../comment/comment";
import { fetchCommentsAsync } from "../../store/comment/comment.action";
import { getUserTokenSelector } from "../../store/user/user.selector";
import { getCommentsByParentId, getCommentsSelector } from "../../store/comment/comment.selector";

const CommentList = ({ parentId }) => {

    const dispatch = useDispatch()
    const token = useSelector(getUserTokenSelector)
    const state = useSelector(getCommentsSelector)
    const data = useSelector(getCommentsByParentId(parentId))
    const [ comments, setComments ] = useState(data)


    useEffect(() => {
        if(data.length !== comments.length){
            setComments(data)
        }
    },[data])

    useEffect(() => {
        dispatch(fetchCommentsAsync(parentId, token, state))
    },[])


    return ( 
        <Container>
            {
                comments.length === 0 ? ( <p>No comms 🤯</p>) : (
                    comments.map((c, ind) => {
                        return (
                            <Comment key={ind} commentId={c._id}/>
                        )
                    })
                )
            }
        </Container>
    )
}

export default CommentList
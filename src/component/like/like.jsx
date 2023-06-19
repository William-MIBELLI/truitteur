
import { getUserSelector, getUserTokenSelector, selectUserLikedPostById } from "../../store/user/user.selector";
import { updateLikeOnServer } from "../../utils/server/post.server";
import Button from "../button/button";
import { Container } from "./like.style";
import { useDispatch, useSelector } from 'react-redux'
import { updateLikedPost } from "../../store/post/post.action";
import { getPostSelector } from "../../store/post/post.selector";
import { updateUserLikedPostArray } from "../../store/user/user.action";
import { getCommentsSelector } from "../../store/comment/comment.selector";
import { udpateCommentLike } from "../../store/comment/comment.action";

const Like = ({ postId, parentType = 'Post' }) => {

    const initialValue = useSelector(selectUserLikedPostById(postId))
    const dispatch = useDispatch()
    const postState = useSelector(getPostSelector)
    const commentState = useSelector(getCommentsSelector)
    const token = useSelector(getUserTokenSelector)
    const userState = useSelector(getUserSelector)

    const onUpdateLike = async (value) => {
        const formData = new FormData()
        formData.append('likeValue', value)
        formData.append('postId', postId)
        formData.append('parentType', parentType)
        const upLike = await updateLikeOnServer(token, formData)
        if(upLike){
            if(parentType === 'Post'){
                dispatch(updateLikedPost(postState, postId, value, initialValue))
            }else{
                console.log('il faut up comment')
                dispatch(udpateCommentLike(commentState, postId, value, initialValue))
            }
            dispatch(updateUserLikedPostArray(userState, postId, value))
        }
        console.log(upLike)
    }

    return (
        <Container>
            {
                initialValue === -1 ? ( <p>-</p>) : (
                    <Button text={'-'} clickHandler={() => onUpdateLike(-1)}/>
                )
            }
                <p>Like</p>
            {
                initialValue === 1 ? ( <p>+</p>) : (
                    <Button text={'+'} clickHandler={() => onUpdateLike(1)}/>
                )
            }
        </Container>
    )
}

export default Like
import { useDispatch, useSelector } from "react-redux";
import { deletePostOnServer } from "../../utils/server/post.server";
import Button from "../button/button";
import { Card, CardHeader, CardBody, ButtonContainer, ImgContainer } from "./postCard.style";
import { useNavigate } from 'react-router-dom'
import { getUserSelector, getUserTokenSelector } from "../../store/user/user.selector";
import { getPostsSelector } from "../../store/post/post.selector";
import { deletePostAsync } from "../../store/post/post.action";

const PostCard = ({ post }) => {

    const { title, message, author, createdAt, _id, imageUrl } = post
    const navigate = useNavigate()
    const token = useSelector(getUserTokenSelector)
    const state = useSelector(getPostsSelector)
    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()
    const onClickDetails = () => {
        navigate(`/post-details/${_id}`)
    }

    const onUpdateHandler = () => {
        navigate(`/edit-post/${_id}`)
    }

    const onDeleteHandler = async () => {
        dispatch(deletePostAsync(token,_id, state))
    }

    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
                <p>Posté le : {new Date(createdAt).toLocaleString()}</p>
            </CardHeader>
            <CardBody>
                <ImgContainer src={`http://localhost:8080/${imageUrl}`} alt={title}/>
                <p>{message}</p>
            </CardBody>
            <ButtonContainer>
                <Button text={'View'} clickHandler={onClickDetails}/>
                {
                    post.author._id === user.user._id && ( 
                        <>
                            <Button text={'Delete'} clickHandler={onDeleteHandler}/>
                            <Button text={'Update'} clickHandler={onUpdateHandler}/>
                        </>
                    )
                }
            </ButtonContainer>
        </Card>
    )
}

export default PostCard
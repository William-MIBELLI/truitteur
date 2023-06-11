import { useSelector } from "react-redux";
import { deletePostOnServer } from "../../utils/server/server";
import Button from "../button/button";
import { Card, CardHeader, CardBody, ButtonContainer } from "./postCard.style";
import { useNavigate } from 'react-router-dom'
import { getUserTokenSelector } from "../../store/user/user.selector";

const PostCard = ({ post }) => {

    const { title, message, author, createdAt, _id, imageUrl } = post
    const navigate = useNavigate()
    const token = useSelector(getUserTokenSelector)

    const onClickDetails = () => {
        navigate(`/post-details/${_id}`)
    }

    const onUpdateHandler = () => {
        navigate(`/edit-post/${_id}`)
    }

    const onDeleteHandler = async () => {
        await deletePostOnServer(_id, token)
    }

    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
                <p>Posté le : {new Date(createdAt).toLocaleString()}</p>
            </CardHeader>
            <CardBody>
                {message}
            </CardBody>
            <ButtonContainer>
                <Button text={'View'} clickHandler={onClickDetails}/>
                <Button text={'Delete'} clickHandler={onDeleteHandler}/>
                <Button text={'Update'} clickHandler={onUpdateHandler}/>
            </ButtonContainer>
        </Card>
    )
}

export default PostCard
import Button from "../button/button";
import { Card, CardHeader, CardBody, ButtonContainer } from "./postCard.style";
import { useNavigate } from 'react-router-dom'

const PostCard = ({ post }) => {

    const { title, message, author, createdAt, _id, imageUrl } = post
    const navigate = useNavigate()

    const onClickDetails = () => {
        navigate(`/post-details/${_id}`)
    }

    const onUpdateHandler = () => {
        navigate(`/edit-post/${_id}`)
    }

    return (
        <Card>
            <CardHeader>
                <h2>{title}</h2>
                <p>Posté le : {createdAt}</p>
            </CardHeader>
            <CardBody>
                {message}
            </CardBody>
            <ButtonContainer>
                <Button text={'View'} clickHandler={onClickDetails}/>
                <Button text={'Delete'}/>
                <Button text={'Update'} clickHandler={onUpdateHandler}/>
            </ButtonContainer>
        </Card>
    )
}

export default PostCard
import Button from "../button/button";
import { CommentBody, CommentFooter, CommentInfo, Container, ContentDiv, CreationDiv } from "./comment.style";

const Comment = ({ comment }) => {

    const { createdAt, like, message, userId, comments } = comment
    const { name } = userId
    console.log(comment)

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
                <p>Comms : {comments.length}</p>
            </CommentInfo>
            </CommentBody>
            <CommentFooter>
                <Button text={'answer'}/>
            </CommentFooter>
            <hr></hr>
        </Container>
    )
}

export default Comment
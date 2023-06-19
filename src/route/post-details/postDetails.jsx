import { useParams } from "react-router-dom";
import { Container, Header, Body, Wrapper, Footer, ImgContainer } from "./postDetails.style";
import Spinner from "../../component/spinner/spinner";
import {  useSelector } from "react-redux";
import CommentInput from "../../component/comment-input/commentInput";
import CommentList from "../../component/comment-list/commentList";
import {  getPostByIdSelector } from "../../store/post/post.selector";
import Like from "../../component/like/like";


const PostDetails = () => {

    const { postId } = useParams()
    const  post = useSelector(getPostByIdSelector(postId))
    const { title, message, author, createdAt, imageUrl, gotResponse, like } = post
    const imgUrl = `http://localhost:8080/${imageUrl}`

    return (
        <Wrapper>
            {
                !Object.keys(post).length ? ( <Spinner/>) : (
                    <Container>
                        <Header>
                            <h2>{title}</h2>
                            <p>Posté le {new Date(createdAt).toLocaleString()}</p>
                        </Header>
                        <hr></hr>
                        <Body>
                            <ImgContainer src={imgUrl} onClick={() => window.open(imgUrl, '_blank', 'rel= noopener noreferrer')}/>
                            <p>{message}</p>
                            <p>Comms : {gotResponse}</p>
                            <p>Like : {like}</p>
                            <Like postId={postId}/>
                        </Body>
                        <Footer>
                            <p>Par <strong>{author.name}</strong></p>
                        </Footer>
                        <h3>Comments</h3>
                        <CommentList parentId={postId}/>
                        <CommentInput postId={postId}/>
                    </Container>
                )
            }
        </Wrapper>
    )
}

export default PostDetails
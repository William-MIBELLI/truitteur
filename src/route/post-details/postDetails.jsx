import { useNavigate, useParams } from "react-router-dom";
import { Container, Header, Body, Wrapper, Footer, ImgContainer } from "./postDetails.style";
import { useState, useEffect } from "react";
import Spinner from "../../component/spinner/spinner";
import {  useSelector, connect } from "react-redux";
import { getUserTokenSelector } from "../../store/user/user.selector";
import CommentInput from "../../component/comment-input/commentInput";
import CommentList from "../../component/comment-list/commentList";
import { getCommentsArrayByPostId, getPostByIdSelector } from "../../store/post/post.selector";

const PostDetails = () => {

    const { postId } = useParams()
    const  post = useSelector(getPostByIdSelector(postId))
    const comment = useSelector(getCommentsArrayByPostId(postId))
    const [ up, setUp ] = useState(false)
    const [ to, setTo ] = useState(false)
    const { title, message, author, createdAt, imageUrl } = post
    const imgUrl = `http://localhost:8080/${imageUrl}`
    const navigate = useNavigate()

    useEffect(()=> {
        setTimeout(() => {
            console.log('on rentre dans le timeout')
            setTo(!to)
        }, 200)
    },[up])
    
    const onUpdate = () => {
        setUp(!up)
    }
    
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
                        </Body>
                        <Footer>
                            <p>Par <strong>{author.name}</strong></p>
                        </Footer>
                        <CommentList comments={comment}/>
                        <CommentInput postId={postId} onUpdate={onUpdate} />
                    </Container>
                )
            }
        </Wrapper>
    )
}

export default PostDetails
import { useParams } from "react-router-dom";
import { Container, Header, Body, Wrapper, Footer, ImgContainer } from "./postDetails.style";
import { useState, useEffect } from "react";
import { getSinglePostFromServer } from "../../utils/server/post.server";
import Spinner from "../../component/spinner/spinner";
import { useSelector } from "react-redux";
import { getUserTokenSelector } from "../../store/user/user.selector";

const PostDetails = () => {

    const { postId } = useParams()
    const [ post, setPost ] = useState({})
    const token = useSelector(getUserTokenSelector)

    const { title, message, author, createdAt, imageUrl } = post
    const imgUrl = `http://localhost:8080/${imageUrl}`
    
    console.log(imgUrl)

    useEffect(() => {
        const getData = async () => {
            const data = await getSinglePostFromServer(postId, token)
            setPost(data.post)
        }
        getData()
    }, [])

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
                            <p>{message}</p>
                            <ImgContainer src={imgUrl}/>
                        </Body>
                        <Footer>
                            <p>Par <strong>{author.name}</strong></p>
                        </Footer>
                    </Container>
                )
            }
        </Wrapper>
    )
}

export default PostDetails
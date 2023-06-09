import { useParams } from "react-router-dom";
import { Container, Header, Body, Wrapper, Footer, ImgContainer } from "./postDetails.style";
import { useState, useEffect } from "react";
import { getSinglePostFromServer } from "../../utils/server/server";
import Spinner from "../../component/spinner/spinner";

const PostDetails = () => {

    const { postId } = useParams()
    const [ post, setPost ] = useState({})

    const { title, message, author, createdAt, imageUrl } = post
    const imgUrl = `http://localhost:8080/${imageUrl}`
    
    console.log(imgUrl)

    useEffect(() => {
        const getData = async () => {
            const data = await getSinglePostFromServer(postId)
            setPost(data.post)
        }
        getData()
    }, [])

    return (
        <Wrapper>
            {
                !post.title ? ( <Spinner/>) : (
                    <Container>
                        <Header>
                            <h2>{title}</h2>
                            <p>Posté le {createdAt}</p>
                        </Header>
                        <hr></hr>
                        <Body>
                            <p>{message}</p>
                            <ImgContainer src={imgUrl}/>
                        </Body>
                        <Footer>
                            <p>Par <strong>{author}</strong></p>
                        </Footer>
                    </Container>
                )
            }
        </Wrapper>
    )
}

export default PostDetails
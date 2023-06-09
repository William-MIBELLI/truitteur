import { Fragment } from 'react'
import PostForm from '../../component/post-form/postForm'
import { Container } from './createPost.style'

const CreatePost = () => {
    return (
        <Container>
            <h1>Nouveau post</h1>
            <PostForm/>
        </Container>
    )
}

export default CreatePost
import { Fragment } from 'react'
import PostForm from '../../component/post-form/postForm'
import { Container } from './createPost.style'
import Title from '../../component/title/title'

const CreatePost = () => {
    return (
        <Container>
            <Title text={'New post'}/>
            <PostForm/>
        </Container>
    )
}

export default CreatePost
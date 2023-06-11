import { useParams } from 'react-router-dom'
import PostForm from '../../component/post-form/postForm'
import { Container } from './editPost.style'
import { Fragment } from 'react'
import Title from '../../component/title/title'

const EditPost = () => {

    const { postId } = useParams()

    return (
        <Container>
            <Title text={'Update your post'}/>
            <PostForm editing={true} postId={postId}/>
        </Container>
    )
}

export default EditPost
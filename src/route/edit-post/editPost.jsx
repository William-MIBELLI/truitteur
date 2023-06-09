import { useParams } from 'react-router-dom'
import PostForm from '../../component/post-form/postForm'
import {} from './editPost.style'
import { Fragment } from 'react'

const EditPost = () => {

    const { postId } = useParams()

    return (
        <Fragment>
            <h1>Modifiez votre post</h1>
            <PostForm editing={true} postId={postId}/>
        </Fragment>
    )
}

export default EditPost
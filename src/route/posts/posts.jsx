import { getPostSelector } from '../../store/post/post.selector'
import {} from './posts.style'
import { useSelector } from 'react-redux'

const Posts = () => {

    const posts = useSelector(getPostSelector)
    console.log(posts)
    return (
        <div>JE SUIS POSTS</div>
    )
}

export default Posts
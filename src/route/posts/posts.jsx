import { Container, Header } from './posts.style'
import {  useEffect } from 'react'
import PostCard from '../../component/post-card/postCard'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenSelector } from '../../store/user/user.selector'
import { getPostSelector } from '../../store/post/post.selector'
import { fetchPostsAsync } from '../../store/post/post.action'
import Title from '../../component/title/title'

const Posts = () => {

    const token = useSelector(getUserTokenSelector)
    const post = useSelector(getPostSelector)
    const dispatch = useDispatch()
    //console.log(post)

    useEffect(() => {
        if(!post.isFetched){
            //console.log('on dispatch , isflecthed : false')
            dispatch(fetchPostsAsync(token))
        }
    },[])

    return (
        <Container>
            {
                !post.posts.length ? (
                    <Header>
                        <Title text={'ZZzzZz...'}/>
                        <p>Pas de posts à afficher 😢</p>
                    </Header>
                ) : post.posts.map(post => {
                    return (
                        <>
                            <PostCard post={post} key={post._id}/>
                            <hr></hr>
                        </>
                    )
                })
            }
        </Container>
    )
}

export default Posts
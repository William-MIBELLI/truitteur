import {} from './posts.style'
import {  useEffect, useState } from 'react'
import { getPostsFromServe } from '../../utils/server/server'
import PostCard from '../../component/post-card/postCard'
import { useSelector } from 'react-redux'
import { getUserTokenSelector } from '../../store/user/user.selector'

const Posts = () => {

    console.log('POSTS RENDER')
    const [ posts, setPosts ] = useState([])
    const token = useSelector(getUserTokenSelector)


    useEffect(() => {
        const getData = async () => {
            const data = await getPostsFromServe(token)
            console.log('data : ', data)
            if(data){
                setPosts(data)
            }
        }
        getData()
    },[])


    return (
        <div>
            {
                !posts.length ? (
                    <p>Pas de posts à afficher 😢</p>
                ) : posts.map(post => {
                    return (
                        <PostCard post={post} key={post._id}/>
                    )
                })
            }
        </div>
    )
}

export default Posts
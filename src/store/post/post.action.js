import { getPostsFromServe } from "../../utils/server/server"
import { POST_ACTION_TYPE } from "./post.type"

export const addPost = (state, message) => {
    console.log(state)
    const newPost = [...state.posts, message]
    const newState = {...state, posts: newPost}

    return {type: POST_ACTION_TYPE.ADD_POST, payload: {...newState}}
}


export const fetchPosts = async (state) => {
    const posts = await getPostsFromServe()
    if(posts){
        const newState = {...state, posts}
        return {type: POST_ACTION_TYPE.POST_FETCH_SUCCESS, payload: newState}
    }
}
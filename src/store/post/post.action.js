import { createNewPostOnServer, deletePostOnServer, getPostsFromServe, updatePostOnServer } from "../../utils/server/post.server"
import { POST_ACTION_TYPE } from "./post.type"
import { createAction } from '../../utils/helper'


export const fetchPostsStart = state => {
    return createAction(POST_ACTION_TYPE.POST_FETCH_START)
}

export const fetchPostsSuccess = (posts) => {
    return createAction(POST_ACTION_TYPE.POST_FETCH_SUCCESS, posts)
}

export const fetchPostsFailed = (error) => {
    return createAction(POST_ACTION_TYPE.POST_FETCH_FAILED, error)
}

export const fetchPostsAsync = (token) => async (dispatch) => {
    dispatch(fetchPostsStart())
    try {
        const data = await getPostsFromServe(token)
        ////console.log(data)
        if(!data || data.status !== 200){
            throw new Error('Can\'t fetch Posts from server')
        }
        dispatch(fetchPostsSuccess(data.posts))
    } catch (error) {
        dispatch(fetchPostsFailed(error.message))
    }
}

export const addPostStart = () => {
    return createAction(POST_ACTION_TYPE.ADD_POST_START)
}

export const addPostSuccess = (state, post) => {
    const newPosts = [...state.posts, post]
    return createAction(POST_ACTION_TYPE.ADD_POST_SUCCESS, newPosts)
}

export const addPostFailed = error => {
    return createAction(POST_ACTION_TYPE.ADD_POST_FAILED, error)
}

export const addPostAsync = (token, post, state) => async (dispatch) => {
    dispatch(addPostStart())
    try {
        const data = await createNewPostOnServer(post, token)
        if(data.status !== 201 || typeof(data) === Error){
            throw new Error(data.message)
        }
        dispatch(addPostSuccess(state, data.post))
    } catch (error) {
        dispatch(addPostFailed(error.message))
    }
}

export const updatePostStart = () => {
    return createAction(POST_ACTION_TYPE.UPDATE_POST_START)
}

export const updatePostSuccess = (state, post) => {
    //console.log('post dans update : ', post)
    const newPosts = state.posts.map(item => {
        return item._id === post._id ? post : item
    })
    return createAction(POST_ACTION_TYPE.UPDATE_POST_SUCCESS, newPosts)
}

export const updatePostFailed = (error) => {
    return createAction(POST_ACTION_TYPE.UPDATE_POST_FAILED, error)
}

export const updatePostAsync = (state, token, post) => async (dispatch) => {
    dispatch(updatePostStart())
    try {
        const data = await updatePostOnServer(post, token)
        if(data.status !== 200 || typeof(data) === Error){
            throw new Error(data.message)
        }
        dispatch(updatePostSuccess(state, data.post))
    } catch (error) {
        dispatch(updatePostFailed(error.message))
    }
}

export const deletePostStart = () => {
    return createAction(POST_ACTION_TYPE.DELETE_POST_START)
}

export const deletePostSuccess = (state, _id) => {
    const newPosts = state.filter(item => {
        return item._id.toString() !== _id.toString()
    })
    return createAction(POST_ACTION_TYPE.DELETE_POST_SUCCESS, newPosts)
}

export const deletePostFailed = (error) => {
    return createAction(POST_ACTION_TYPE.DELETE_POST_FAILED, error)
}

export const deletePostAsync = (token, _id, state) => async (dispatch) => {
    dispatch(deletePostStart())
    try {
        const data = await deletePostOnServer(_id, token)
        if(typeof(data) === Error || data.status !== 200){
            throw new Error(data.message)
        }
        dispatch(deletePostSuccess(state, _id))
    } catch (error) {
        dispatch(deletePostFailed(error.message))
    }
}

export const updateResponseCount = (state, postId) => {
    console.log('on rentre dans updaterespopnsepost')
    console.log(state)
    const newState = state.map(post => {
        return post._id === postId ? {...post, gotResponse : post.gotResponse + 1} : post
    })
    return createAction(POST_ACTION_TYPE.UPDATE_GOTRESPONSE, newState)
}

export const updateLikedPost = (state, postId, newValue, initialValue) => {
    console.log(newValue, initialValue)
    const postToUpdate = state.posts.find(p => p._id.toString() === postId.toString())
    if(postToUpdate){
        postToUpdate.like -= +initialValue
        postToUpdate.like += +newValue
    }
    const newPosts = state.posts.map(p => {
        return p._id === postToUpdate._id ? postToUpdate : p
    })

    return createAction(POST_ACTION_TYPE.UPDATE_LIKEDPOST, newPosts)
}
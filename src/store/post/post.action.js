import { createNewPostOnServer, deletePostOnServer, getPostsFromServe, updatePostOnServer } from "../../utils/server/post.server"
import { POST_ACTION_TYPE } from "./post.type"
import { createAction } from '../../utils/helper'
import { addCommentOnPost } from "../../utils/server/comment.server"


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
        console.log(data)
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
    console.log('post dans update : ', post)
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

export const addCommentStart = () => {
    return createAction(POST_ACTION_TYPE.ADD_COMMENT_START)
}

export const addCommentSuccess = (state, comment) => {
    const postToMap = state.find(post => post._id === comment.postId)
    postToMap.comments.push(comment)
    const newState = state.map(post => {
        return post._id === comment.userId ? postToMap : post
    })
    return createAction(POST_ACTION_TYPE.ADD_COMMENT_SUCCESS, newState)
}

export const addCommentFailed = (error) => {
    return createAction(POST_ACTION_TYPE.ADD_COMMENT_FAILED, error)
}

export const addCommentAsync = (formData, token, state) => async (dispatch) => {
    dispatch(addCommentStart())
    try {
        const data = await addCommentOnPost(formData, token)
        if(data.status !== 201 || typeof(data) === Error){
            throw new Error(data.message)
        }
        dispatch(addCommentSuccess(state, data.comment))
    } catch (error) {
        dispatch(addCommentFailed(error))
    }
}
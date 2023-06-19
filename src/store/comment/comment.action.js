import { createAction } from "../../utils/helper";
import { addCommentOnServer, fetchCommentsFromServer } from "../../utils/server/comment.server";
import { updateResponseCount } from "../post/post.action";
import { COMMENT_ACTION_TYPE } from "./comment.type";

const fetchCommentsStart = () => {
    return createAction(COMMENT_ACTION_TYPE.FETCH_COMMENT_START)
}

const fetchCommentsSuccess = (state, comments) => {
    const newComments = [...state.comments]
    comments.forEach(comm => {
        const existingComment = newComments.find(c => c._id === comm._id)
        if(!existingComment){
            return newComments.push(comm)
        }
    })
    return createAction(COMMENT_ACTION_TYPE.FETCH_COMMENT_SUCCESS, newComments)
}

const fetchCommentsFailed = errorMessage => {
    return createAction(COMMENT_ACTION_TYPE.FETCH_COMMENT_FAILED, errorMessage)
}

export const fetchCommentsAsync = (parentId, token, state) => async (dispatch) => {

    //console.log('on renter dans fetchcommetnasync')
    dispatch(fetchCommentsStart())

    try {
        const data = await fetchCommentsFromServer(parentId, token)
        //console.log('data dans action : ',data.comments)
        if(data.status !== 200 || typeof(data) === Error){
            //console.log('on rentre dans lerreur: ', data)
            throw new Error(data.message)
        }
        dispatch(fetchCommentsSuccess(state, data.comments))
    } catch (error) {
        //console.log('error : ', error)
        dispatch(fetchCommentsFailed(error.messsage))
    }
}

export const addCommentStart = () => {
    return createAction(COMMENT_ACTION_TYPE.ADD_COMMENT_START)
}

export const addCommentSuccess = (comment, state) => {
    const newComments = [...state.comments, comment]
    return createAction(COMMENT_ACTION_TYPE.ADD_COMMENT_SUCCESS, newComments)
}   

export const addCommentFailed = errorMessage => {
    return createAction(COMMENT_ACTION_TYPE.ADD_COMMENT_FAILED, errorMessage)
}

export const addCommentAsync = (commentState, token, formData, postState) => async (dispatch) => {

    dispatch(addCommentStart())

    try {
        const data = await addCommentOnServer(formData, token)
        if(data.status !== 201 || typeof(data) === Error){
            throw new Error(data.message)
        }
        dispatch(addCommentSuccess(data.comment, commentState))
        dispatch(updateResponseCount(postState, data.comment.postRef))
    } catch (error) {
        dispatch(addCommentFailed(error.message))
    }
}

export const udpateCommentLike = (state, commentId, newValue, initialValue) => {
    const commentToUpdate = state.comments.find(c => c._id === commentId)
    commentToUpdate.like -= +initialValue
    commentToUpdate.like += +newValue
    const newComments = state.comments.map(c => {
        return c._id === commentId ? commentToUpdate : c
    })

    return createAction(COMMENT_ACTION_TYPE.UPDATE_COMMENT_LIKE, newComments)
}
import { USER_ACTION_TYPE } from "./user.type";
import { createAction } from "../../utils/helper";
import { logUserOnServer } from "../../utils/server/auth.server";

export const fetchUserSuccess = (user) => {
    return createAction(USER_ACTION_TYPE.FETCH_USER_SUCCESS, user)
}

export const logOutUser = () => {
    return createAction(USER_ACTION_TYPE.LOGOUT_USER)
}

export const fetchUserStart = () => {
    return createAction(USER_ACTION_TYPE.FETCH_USER_START)
}

export const fetchUserFailed = (error) => {
    return createAction(USER_ACTION_TYPE.FETCH_USER_FAILED, error)
}

export const fetchUserAsync = (formData) => async (dispatch) => {

    dispatch(fetchUserStart())

    try {
        const data = await logUserOnServer(formData)
        if(data.status !== 200){
            throw new Error(data.message)
        }
        return dispatch(fetchUserSuccess(data))
    } catch (error) {
        dispatch(fetchUserFailed(error))
    }

}

export const updateUserLikedPostArray = (state, postId, newValue) => {
    console.log(newValue, postId)
    const findPost = state.user.likedPost.find(p => p.postId === postId)
    if(findPost){
        const newLikedPostArray = state.user.likedPost.map(post => {
            return post.postId.toString() === postId.toString() ? {...post, value: newValue} : post
        })
        console.log('le post existe, on le met a jour ', newLikedPostArray)
        return createAction(USER_ACTION_TYPE.UPDATE_USER_LIKEDPOST, newLikedPostArray)
    }
    const newArray = [...state.user.likedPost, {postId, value: newValue}]
    console.log('le post existe pas , on le crée : ', newArray)
    return createAction(USER_ACTION_TYPE.UPDATE_USER_LIKEDPOST, newArray)
}
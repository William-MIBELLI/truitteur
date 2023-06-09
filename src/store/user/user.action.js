import { USER_ACTION_TYPE } from "./user.type";
import { createAction } from "../../utils/helper";
import { logUserOnServer } from "../../utils/server/server";

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
        if(!data){
            throw new Error('failed to load user')
        }
        return dispatch(fetchUserSuccess(data))
    } catch (error) {
        dispatch(fetchUserFailed(error))
    }

}
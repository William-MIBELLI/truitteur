import { USER_ACTION_TYPE } from "./user.type";

const defaultState = {
    user: undefined,
    token: '',
    isLoading: false,
    error: null
}

export const userReducer = (state = defaultState, action) => {

    const { type, payload } = action

    switch(type){
        case USER_ACTION_TYPE.FETCH_USER_START:
            return{
                ...state, isLoading: true
            }
        case USER_ACTION_TYPE.FETCH_USER_SUCCESS:
            return{
                user: payload.user, isLoading: false, error: null, token: payload.token
            }
        case USER_ACTION_TYPE.FETCH_USER_FAILED:
            return{
                ...state, isLoading: false, error: payload
            }
        case USER_ACTION_TYPE.LOGOUT_USER:
            return{
                ...state, token: '', user: undefined
            }
        case USER_ACTION_TYPE.UPDATE_USER_LIKEDPOST:
            return {
                ...state, user: {...state.user, likedPost: payload}
            }
        default:
            return state
    }
}
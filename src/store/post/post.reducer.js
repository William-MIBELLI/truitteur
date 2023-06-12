import { POST_ACTION_TYPE } from "./post.type"

const INITIAL_STATE = {
    error : null,
    isLoading : false,
    isFetched: false,
    posts : ['je suis le contenu du state']
}

export const postReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type){
        case POST_ACTION_TYPE.ADD_POST_START:
        case POST_ACTION_TYPE.UPDATE_POST_START:
        case POST_ACTION_TYPE.DELETE_POST_START:
        case POST_ACTION_TYPE.POST_FETCH_START:
            return {
                ...state, isLoading: true
            }
        case POST_ACTION_TYPE.POST_FETCH_SUCCESS:
            return {
                ...state,
                posts: [...payload],
                isLoading: false,
                isFetched: true,
                error: null
            }
        case POST_ACTION_TYPE.POST_FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
                isFetched: false
            }
        case POST_ACTION_TYPE.ADD_POST_SUCCESS:
        case POST_ACTION_TYPE.UPDATE_POST_SUCCESS:
        case POST_ACTION_TYPE.DELETE_POST_SUCCESS:
            return {
                ...state,
                posts : [...payload],
                isLoading: false
            }
        case POST_ACTION_TYPE.ADD_POST_FAILED:
        case POST_ACTION_TYPE.UPDATE_POST_FAILED:
        case POST_ACTION_TYPE.DELETE_POST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }
}
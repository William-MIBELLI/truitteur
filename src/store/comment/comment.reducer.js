import { COMMENT_ACTION_TYPE } from "./comment.type";

const defaultState = {
    comments : [],
    isLoading: false,
    error: undefined
}

export const commentReducer  = (state = defaultState, action) => {
    const { type, payload } = action

    switch(type){
        case COMMENT_ACTION_TYPE.FETCH_COMMENT_START:
        case COMMENT_ACTION_TYPE.ADD_COMMENT_START:
            return{
                ...state,
                isLoading: true
            }
        case COMMENT_ACTION_TYPE.FETCH_COMMENT_SUCCESS:
        case COMMENT_ACTION_TYPE.ADD_COMMENT_SUCCESS:
            return{
                comments : [...payload],
                isLoading: false,
                error: undefined
            }
        case COMMENT_ACTION_TYPE.FETCH_COMMENT_FAILED:
        case COMMENT_ACTION_TYPE.ADD_COMMENT_FAILED:
            return{
                ...state,
                isLoading: false,
                error: payload
            }
        case COMMENT_ACTION_TYPE.UPDATE_COMMENT_LIKE:
            return {
                ...state,
                comments: [...payload]
            }
        default:
            return state
    }
}
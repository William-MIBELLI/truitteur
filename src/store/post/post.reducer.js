import { POST_ACTION_TYPE } from "./post.type"

const INITIAL_STATE = {
    error : undefined,
    isLoading : false,
    posts : ['je suis le contenu du state']
}

export const postReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type){
        case POST_ACTION_TYPE.ADD_POST:
            return {
                ...state,
                posts: [...payload.posts]
            }
        default:
            return state
    }
}
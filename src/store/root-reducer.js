import { combineReducers } from "redux";
import { postReducer } from "./post/post.reducer";

export const rootReducer = combineReducers({
    post: postReducer
})
import { combineReducers } from "redux";
import { postReducer } from "./post/post.reducer";
import { userReducer } from "./user/user.reducer";
import { commentReducer } from "./comment/comment.reducer";

export const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    comment: commentReducer
})
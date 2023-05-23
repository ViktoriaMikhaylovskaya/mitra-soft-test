import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
})
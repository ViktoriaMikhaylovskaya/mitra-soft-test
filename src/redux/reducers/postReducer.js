import { ACTIONS } from "../constants";

const initialState = {
    posts: [],
    userPosts: [],
    isLoading: false,
}


export const postsReducer = (state = initialState, { type, payload}) => { 
    switch(type) { 
        case ACTIONS.SET_POSTS:
            return {
                ...state,
                posts: payload.data,
                isLoading: payload.loading,
            };
        case ACTIONS.SET_USER_POSTS:
            return {
                ...state,
                userPosts: payload.data,
                isLoading: payload.loading,
            };
        default: return state;
    }
}

export default postsReducer;
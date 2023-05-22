import { ACTIONS } from "../constants";

const initialState = {
    posts: [],
    comments: [],
}


export const postsReducer = (state = initialState, { type, payload}) => { 
    switch(type) { 
        case ACTIONS.SET_POSTS:
            return {
                ...state,
                posts: payload,
            };
        case ACTIONS.SET_COMMENTS:
            return {
                ...state,
                comments: payload,
            };
        default: return state;
    }
}

export default postsReducer;
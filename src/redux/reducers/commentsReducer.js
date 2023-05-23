import { ACTIONS } from "../constants";

const initialState = {
    comments: [],
    isLoadingComments: false,
}


export const commentsReducer = (state = initialState, { type, payload}) => { 
    switch(type) { 
        case ACTIONS.SET_COMMENTS:
            return {
                ...state,
                comments: payload.data,
                isLoadingComments: payload.loading,

            };
        default: return state;
    }
}

export default commentsReducer;
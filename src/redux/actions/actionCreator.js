import { ACTIONS } from "../constants"

export const getPosts = () => ({
    type: ACTIONS.GET_POSTS,
})

export const setPosts = (payload) => ({
    type: ACTIONS.SET_POSTS,
    payload
})

// -------------------------------------------------

export const getComments = (id) => ({
    type: ACTIONS.GET_COMMENTS,
    id
})

export const setComments = (payload) => ({
    type: ACTIONS.SET_COMMENTS,
    payload
})
import { ACTIONS } from "../constants"

// actions for get all posts
export const getPosts = () => ({
    type: ACTIONS.GET_POSTS,
})

export const setPosts = (payload) => ({
    type: ACTIONS.SET_POSTS,
    payload
})

// actions for get comments
export const getComments = (id) => ({
    type: ACTIONS.GET_COMMENTS,
    id
})

export const setComments = (payload) => ({
    type: ACTIONS.SET_COMMENTS,
    payload
})

// actions for get all user posts
export const getUserPosts = (id) => ({
    type: ACTIONS.GET_USER_POSTS,
    id
})

export const setUserPosts = (payload) => ({
    type: ACTIONS.SET_USER_POSTS,
    payload
})
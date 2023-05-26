import { ACTIONS } from "../constants"

// actions for get posts
export const getPosts = (queries) => ({
    type: ACTIONS.GET_POSTS,
    queries
})

export const setPosts = (payload) => ({
    type: ACTIONS.SET_POSTS,
    payload
})

export const getPostsCount = (queries) => ({
    type: ACTIONS.GET_COUNT_POSTS,
    queries
})

export const setPostsCount = (payload) => ({
    type: ACTIONS.SET_COUNT_POSTS,
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

// actions for get posts by search value

export const getPostsBySearchValue = (searchValue) => ({
    type: ACTIONS.GET_USER_POSTS,
    searchValue
})

export const setPostsBySearchValue = (payload) => ({
    type: ACTIONS.SET_USER_POSTS,
    payload
})
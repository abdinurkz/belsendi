import * as types from "./post.types";

export const getPosts = payload => ({
    type: types.GET_POSTS,
    payload
});

export const getPost = payload => ({
    type: types.GET_POST,
    payload
});

export const createPost = payload => ({
    type: types.CREATE_POST,
    payload
});

export const updatePost = payload => ({
    type: types.UPDATE_POST,
    payload
});

export const deletePost = payload => ({
    type: types.DELETE_POST,
    payload
});

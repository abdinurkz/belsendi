import axios from 'axios';
import { tokenConfig } from './auth.action'
import { GET_POST, ADD_POST } from './types';

// GET POSTS
export const getPost = () => (dispatch, getState) => {
    axios
        .get('/api/post/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// ADD POST
export const addPost = (post) => (dispatch, getState) => {
    axios
        .post('/api/post/', post, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

import axios from 'axios';

import { GET_DIGEST } from '../types';


export const getDigest = () => dispatch => {
    axios
        .get('/api/digest/')
        .then(res => {
            dispatch({
                type: GET_DIGEST,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

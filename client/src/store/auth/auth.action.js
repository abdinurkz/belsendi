import axios from 'axios'
import {
    REGISTER,
    LOGIN,
    LOGOUT_SUCCESS,
    USER_LOAD
} from './auth.types'


export const current = () => ({
    type: USER_LOAD,
})

export const login = payload => ({
    type: LOGIN,
    payload
})

export const register = payload => ({
    type: REGISTER,
    payload
});

export const logout = () => (dispatch, getState) => {

    axios.post('/api/auth/logout', null, tokenConfig(getState)).then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }).catch(err => {
        console.log(err);
    });
};

export const tokenConfig = getState => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}

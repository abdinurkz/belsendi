import { combineReducers } from 'redux';
import post from './post'
import digest from './digest'
import auth from './auth'

export default combineReducers({
    post,
    digest,
    auth,
});

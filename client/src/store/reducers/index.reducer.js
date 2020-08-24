import { combineReducers } from 'redux';
import post from './post.reducer'
import digest from './digest.reducer'
import auth from './auth.reducer'

export default combineReducers({
    post,
    digest,
    auth,
});

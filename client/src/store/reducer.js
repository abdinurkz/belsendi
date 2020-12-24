import { combineReducers } from 'redux';
import { postReducer } from './post'
import { digestReducer } from "./digest"
import { userReducer } from './auth'

export default combineReducers({
    post: postReducer,
    digest: digestReducer,
    user: userReducer
});

import { combineReducers } from 'redux';
import { postReducer } from './post'
import { digestReducer } from "./digest"

export default combineReducers({
    post: postReducer,
    digest: digestReducer
});

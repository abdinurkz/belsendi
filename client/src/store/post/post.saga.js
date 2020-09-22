import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "./post.types";
import postApi from "../../api/post.api";

function* getPosts(action) {
    try {
        const response = yield call(postApi.getPosts, action.payload);
        return yield put ({
            type: types.GET_POSTS_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        return yield put ({
            type: types.GET_POSTS_FAILURE,
            payload: e.response
        })
    }
}

function* getPost(action) {
    try {
        const response = yield call(postApi.get, action.payload);
        return yield put({
            type: types.GET_POST_SUCCESS,
            payload: response.data,
        })
    } catch (error) {
        return yield put({
            type: types.GET_POST_FAILURE,
            payload: error.response,
        })
    }
}



export default function* postSaga() {
    yield takeEvery(types.GET_POSTS, getPosts);
    yield takeEvery(types.GET_POST, getPost)
}

import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "./auth.types";
import authApi from "../../api/auth.api";

function* register(action) {
    try {
        const response = yield call(authApi.register, action.payload);
        return yield put ({
            type: types.REGISTER_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        return yield put ({
            type: types.REGISTER_FAIL,
            payload: e.response
        })
    }
}

function* login(action) {
    try {
        const response = yield call(authApi.login, action.payload);
        return yield put ({
            type: types.LOGIN_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        return yield put ({
            type: types.LOGIN_FAIL,
            payload: e.response
        })
    }
}

function* current() {
    try {
        const response = yield call(authApi.current);
        return yield put ({
            type: types.USER_LOADED,
            payload: response.data
        })
    } catch (e) {
        return yield put ({
            type: types.AUTH_ERROR,
            payload: e.response
        })
    }
}


export default function* authSaga() {
    yield takeLatest(types.REGISTER, register);
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.USER_LOAD, current);
}

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


export default function* authSaga() {
    yield takeLatest(types.REGISTER, register);
}

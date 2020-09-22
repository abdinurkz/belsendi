import { takeEvery, put, call } from "redux-saga/effects";
import * as types from "./digest.types";
import digestApi from "../../api/digest.api";


function* getDigests(action) {
    try {
        const response = yield call(digestApi.getDigests, action.payload);
        return yield put ({
            type: types.GET_DIGESTS_SUCCESS,
            payload: response.data
        })
    } catch (e) {
        return yield put ({
            type: types.GET_DIGESTS_FAILURE,
            payload: e.response
        })
    }
}

function* getDigest(action) {
    try {
        const response = yield call(digestApi.get, action.payload);
        return yield put({
            type: types.GET_DIGEST_SUCCESS,
            payload: response.data,
        })
    } catch (error) {
        return yield put({
            type: types.GET_DIGEST_FAILURE,
            payload: error.response,
        })
    }
}

export default function* digestSaga() {
    yield takeEvery(types.GET_DIGESTS, getDigests);
    yield takeEvery(types.GET_DIGEST, getDigest)
}

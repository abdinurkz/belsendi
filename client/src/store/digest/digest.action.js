import * as types from "./digest.types";

export const getDigests = payload => ({
    type: types.GET_DIGESTS,
    payload
});

export const getDigest = payload => ({
    type: types.GET_DIGEST,
    payload
});

import * as types from "./digest.types";

const initialState = {
    digests: [],
    digest: {}
};


export default function(state = initialState, action) {
    const { payload } = action;
    switch(action.type) {
        case types.GET_DIGESTS_SUCCESS:
            return {
                ...state,
                digests: payload
            };
        case types.GET_DIGESTS_FAILURE:
            return { ...state, error: payload.status };
        default:
            return state;
    }
}

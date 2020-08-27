import * as types from "./post.types";

const initialState = {
    posts: [],
    post: {},
};

export default function (state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: payload
            };
        case types.GET_POSTS_FAILURE:
            return { ...state, error: payload.status };
        default:
            return { ...state }
    }
}

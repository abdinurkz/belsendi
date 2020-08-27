import { GET_DIGEST } from '../types'

const initialState = {
    digest: []
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DIGEST:
            return {
                ...state,
                digest: action.payload
            };
        default:
            return state;
    }
}

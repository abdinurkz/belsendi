import { GET_POST, ADD_POST} from '../actions/types.js'

const initialState = {
    post: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POST:
            return {
                ...state,
                post: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, action.payload]
            };
        default:
            return state;
    }
}

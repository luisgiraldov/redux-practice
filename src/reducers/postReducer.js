import * as actions from '../actions/postActions';

export const initialState = {
    loading: true,
    hasErrors: false,
    post: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_POST: 
            return { 
                ...state, 
                loading: true 
            }
        case actions.GET_POST_SUCCESS:
            return { 
                ...state,
                post: action.payload, 
                loading: false, 
                hasErrors: false 
            }
        case actions.GET_POST_FAILURE:
            return {
                ...state, 
                loading: false, 
                hasErrors: true
            }
        default:
            return state
    }
};

export default postReducer;
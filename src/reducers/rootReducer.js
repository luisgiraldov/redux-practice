import {combineReducers} from 'redux';

import potsReducer from './postsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer;
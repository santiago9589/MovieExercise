import { combineReducers } from 'redux';
import movieReducer from "./sliceMovie";
import protagonistReducer from "./sliceProtagonist"

const appReducer = combineReducers({
    movies : movieReducer,
    protagonist : protagonistReducer
})


export default appReducer
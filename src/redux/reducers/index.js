import { combineReducers } from "redux";
import {iconReducer, scoreTableReducer, someOtherReducers} from "./reducers"

const rootReducers = combineReducers({
    iconReducer,
    scoreTableReducer,
    someOtherReducers
})

export default rootReducers;


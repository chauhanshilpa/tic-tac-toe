import { combineReducers } from "redux";
import {
  iconReducer,
  scoreTableReducer,
  isGameStartedReducer,
} from "./reducers";

const rootReducers = combineReducers({
  iconReducer,
  scoreTableReducer,
  isGameStartedReducer,
});

export default rootReducers;


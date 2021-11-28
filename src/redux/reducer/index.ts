import { combineReducers } from "redux";
import { stepReducer } from './stepReducer';

export const reducers = combineReducers({
    step: stepReducer
})
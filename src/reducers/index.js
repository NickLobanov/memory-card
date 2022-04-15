import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { userReducer } from "./userAuth";

export const rootReducer = combineReducers({
    cardReducer,
    userReducer
})
import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { userReducer } from "./userAuth";
import { gameStateReducer } from "./gameStateReducer";

export const rootReducer = combineReducers({
    cardReducer,
    userReducer,
    gameStateReducer
})
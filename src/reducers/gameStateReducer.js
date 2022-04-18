import { GAME_START, GAME_STOP } from "../actions/gameState";

const initialState = {
    gameStatus: false,
}

export const gameStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return {...state, gameStatus: true}
        }
        case GAME_STOP: {
            return {...state, gameStatus: false}
        }
        default: {
            return state
        }
    }
}
import { 
    GAME_START,     
    GAME_STOP,
    INCREASE_SCORE,
    DECREASE_SCORE } from "../actions/gameState";

const initialState = {
    gameStatus: false,
    gameScore: 0
}

export const gameStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_START: {
            return {...state, gameStatus: true}
        }
        case GAME_STOP: {
            return {...state, gameStatus: false}
        }
        case INCREASE_SCORE: {
            return {...state, gameScore: state.gameScore +=50}
        }
        case DECREASE_SCORE: {
            return {...state, gameScore: state.gameScore == '0000' ? state.gameScore : state.gameScore -= 10}
        }
        default: {
            return state
        }
    }
}
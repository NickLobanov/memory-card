import { 
    GAME_START,     
    GAME_STOP,
    INCREASE_SCORE,
    DECREASE_SCORE,
    UPDATE_LEADERBOARD,
    RESET_SCORE } from "../actions/gameState";

const initialState = {
    gameStatus: false,
    gameScore: 0,
    leaderBoard: []
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
            return {...state, gameScore: state.gameScore == 0 ? state.gameScore : state.gameScore -= 10}
        }
        case UPDATE_LEADERBOARD: {
            return {...state, leaderBoard: action.newArr}
        }
        case RESET_SCORE: {
            return {...state, gameScore: 0}
        }
        default: {
            return state
        }
    }
}
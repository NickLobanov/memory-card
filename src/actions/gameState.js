export const GAME_START = 'GAME_START'
export const GAME_STOP = 'GAME_STOP'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const DECREASE_SCORE = 'DECREASE_SCORE'
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'

export function gameStart() {
    return {
        type: GAME_START
    }
}
export function gameStop() {
    return {
        type: GAME_STOP
    }
}
export function increaseScore() {
    return {
        type: INCREASE_SCORE
    }
}
export function decreaseScore() {
    return {
        type: DECREASE_SCORE
    }
}
export function updateLeaderboard(newArr) {
    return {
        type: UPDATE_LEADERBOARD,
        newArr
    }
}
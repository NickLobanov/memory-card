import axios from "axios"

export const GET_CARDS = 'GET_CARDS'
export const CREATE_USER = 'CREATE_USER'
export const PATCH_USER = 'PATCH_USER'
export const DELETE_USER = 'DELETE_USER'
export const GAME_START_STOP = 'GAME_START_STOP'
export const SELECT_CARD = 'SELECT_CARD'
export const ADD_TO_SELECT_LIST = 'ADD_TO_SELECT_LIST'
export const CLEAR_SELECTED_LIST = 'CLEAR_SELECTED_LIST'
export const CARD_MATCH = 'CARD_MATCH'
export const CARD_DIFFERENT = 'CARD_DIFFERENT'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'


export function getCards() {
    return function(dispatch) {
        axios.get('../image.json')
            .then(res => {
                dispatch({
                    type: GET_CARDS,
                    cards: res.data
                })
            })
    }
}

export function createUser(userName) {
    return {
        type: CREATE_USER,
        name: userName
    }
}

export function putchUser(newUser) {
    return {
        type: PATCH_USER,
        newName: newUser
    }
}
export function deleteUser() {
    return {
        type: DELETE_USER
    }
}
export function gameStartStop() {
    return {
        type: GAME_START_STOP
    }
}
export function selectCard(card) {
    return {
        type: SELECT_CARD,
        selectedCard: card
    }
}
export function addToSelectList(card) {
    return {
        type: ADD_TO_SELECT_LIST,
        addCard: card
    }
}
export function cardMatch(cardName) {
    return {
        type: CARD_MATCH,
        cardName
    }
}

export function cardDifferent() {
    return {
        type: CARD_DIFFERENT
    }
}

export function shuffleCards(arr) {
    return {
        type: SHUFFLE_CARDS,
        shuffledCards: arr
    }
}
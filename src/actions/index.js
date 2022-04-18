import axios from "axios"

export const GET_CARDS = 'GET_CARDS'
export const SELECT_CARD = 'SELECT_CARD'
export const ADD_TO_SELECT_LIST = 'ADD_TO_SELECT_LIST'
export const CLEAR_SELECTED_LIST = 'CLEAR_SELECTED_LIST'
export const CARD_MATCH = 'CARD_MATCH'
export const CARD_CLOSE = 'CARD_CLOSE'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const CARD_RESET = 'CARD_RESET'


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

export function cardClose() {
    return {
        type: CARD_CLOSE
    }
}

export function shuffleCards(arr) {
    return {
        type: SHUFFLE_CARDS,
        shuffledCards: arr
    }
}
export function clearSelectedList() {
    return {
        type: CLEAR_SELECTED_LIST
    }
}

export function cardReset() {
    return {
        type: CARD_RESET
    }
}
import axios from "axios"

export const GET_CARDS = 'GET_CARDS'
export const GET_BG_IMAGES = 'GET_BG_IMAGES'
export const SELECT_CARD = 'SELECT_CARD'
export const ADD_TO_SELECT_LIST = 'ADD_TO_SELECT_LIST'
export const CLEAR_SELECTED_LIST = 'CLEAR_SELECTED_LIST'
export const CARD_MATCH = 'CARD_MATCH'
export const CARD_CLOSE = 'CARD_CLOSE'
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS'
export const CARD_RESET = 'CARD_RESET'
export const PATCH_CARD_THEME = 'PATCH_CARD_THEME'


export function getCards(cardLength) {
    return function(dispatch) {
        axios.get('../image.json')
            .then(res => {
                res.data.length = cardLength
                dispatch({
                    type: GET_CARDS,
                    cards: res.data
                })
            })
    }
}
export function getBgImages() {
    return function(dispatch) {
        axios.get('../bgImage.json')
            .then(res => {
                dispatch({
                    type: GET_BG_IMAGES,
                    bgImages: res.data
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
export function patchCardTheme(newTheme) {
    return {
        type: PATCH_CARD_THEME,
        newTheme
    }
}
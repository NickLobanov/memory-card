import firstImage from '../images/one.jpg'
import secondImage from '../images/two.jpg'
import thirdImage from '../images/three.jpg'
import fourthImage from '../images/four.jpg'
import fifthImage from '../images/five.jpg'
import sixthImage from '../images/six.jpg'
import seventhImage from '../images/seven.jpg'
import eighthImage from '../images/eight.jpg'
import BgOne from '../images/background-one.jpg'
import BgTwo from '../images/background-two.jpg'
import BgThree from '../images/background-three.jpg'

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

const images = [
    {
        "id": "1",
        "name": "first-image",
        "src": firstImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "9",
        "name": "first-image",
        "src": firstImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "2",
        "name": "second-image",
        "src": secondImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "10",
        "name": "second-image",
        "src": secondImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "3",
        "name": "third-image",
        "src": thirdImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "11",
        "name": "third-image",
        "src": thirdImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "4",
        "name": "fourth-image",
        "src": fourthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "12",
        "name": "fourth-image",
        "src": fourthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "5",
        "name": "fifth-image",
        "src": fifthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "13",
        "name": "fifth-image",
        "src": fifthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "6",
        "name": "sixth-image",
        "src": sixthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "14",
        "name": "sixth-image",
        "src": sixthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "7",
        "name": "seventh-image",
        "src": seventhImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "15",
        "name": "seventh-image",
        "src": seventhImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "8",
        "name": "eighth-image",
        "src": eighthImage,
        "selected": false,
        "isMatched": false
    },
    {
        "id": "16",
        "name": "eighth-image",
        "src": eighthImage,
        "selected": false,
        "isMatched": false
    }
]

const bgImages = [
    {
        "name": "background-one",
        "url": BgOne
    },
    {
        "name": "background-two",
        "url": BgTwo
    },
    {
        "name": "background-three",
        "url": BgThree
    }
]

export function getCards(cardLength) {
    return function(dispatch) {
        
        let getImages = images.slice()
        getImages.length = cardLength
        dispatch({
            type: GET_CARDS,
            cards: getImages
        })
           
    }
}
export function getBgImages() {
    return function(dispatch) {
        
        dispatch({
            type: GET_BG_IMAGES,
            bgImages: bgImages
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
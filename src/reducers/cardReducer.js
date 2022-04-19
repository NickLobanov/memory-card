import { 
    GET_CARDS, 
    SELECT_CARD,  
    CARD_MATCH, 
    CARD_CLOSE,
    ADD_TO_SELECT_LIST,
    SHUFFLE_CARDS,
    CLEAR_SELECTED_LIST,
    CARD_RESET,
    GET_BG_IMAGES,
    PATCH_CARD_THEME } from "../actions"

const initialState = {
    cardList: [],
    cardTheme: '/images/background-one.jpg',
    selectedCard: null,
    bgImages: []
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {...state, cardList: action.cards}
        }
        case GET_BG_IMAGES: {
            return {...state, bgImages: action.bgImages}
        }
        case SELECT_CARD: {
            return {...state, cardList: [...state.cardList].map(item => {
                if(item.id == action.selectedCard.id) {
                    return {...item, selected: true }
                } else {
                    return item
                }
            })}
        }
        case CARD_MATCH: {
            return {...state, cardList: [...state.cardList].map(item => {
                if(item.name == action.cardName) {
                    return {...item, isMatched: true}
                } else {
                    return item
                }
            })}
        }
        case CARD_CLOSE: {
            return {...state, cardList: [...state.cardList].map(item => {
                return {...item, selected: false}
            })}
        }
        case ADD_TO_SELECT_LIST: {
            return {...state, selectedCard: action.addCard}
        }
        case SHUFFLE_CARDS: {
            return {...state, cardList: action.shuffledCards}
        }
        case CLEAR_SELECTED_LIST: {
            return {...state, selectedCard: null}
        }
        case CARD_RESET: {
            return {...state, selectedCard: null, cardList: [...state.cardList].map(item => {
                return {...item, isMatched: false, selected: false}
            })}
        }
        case PATCH_CARD_THEME: {
            return {...state, cardTheme: action.newTheme}
        }
        default: {
            return state
        }
    }
}
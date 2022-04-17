import { 
    GET_CARDS,
    GAME_START_STOP, 
    SELECT_CARD,  
    CARD_MATCH, 
    CARD_DIFFERENT,
    ADD_TO_SELECT_LIST,
    SHUFFLE_CARDS } from "../actions"

const initialState = {
    cardList: [],
    cardTheme: '',
    gameStatus: false,
    selectedCard: null,
    cardMatched: []
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {...state, cardList: action.cards}
        }
        case GAME_START_STOP: {
            return {...state, gameStatus: !state.gameStatus}
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
            return {...state, cardMatched: action.cardName}
        }
        case CARD_DIFFERENT: {
            return {...state, selectedCard: null, cardList: [...state.cardList].map(item => {
                return {...item, selected: false}
            })}
        }
        case ADD_TO_SELECT_LIST: {
            return {...state, selectedCard: action.addCard}
        }
        case SHUFFLE_CARDS: {
            return {...state, cardList: action.shuffledCards}
        }
        default: {
            return state
        }
    }
}
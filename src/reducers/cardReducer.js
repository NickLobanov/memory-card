import { GET_CARDS } from "../actions"

const initialState = {
    cardList: [],
    cardTheme: ''
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS: {
            return {...state, cardList: action.cards}
        }
        default: {
            return state
        }
    }
}
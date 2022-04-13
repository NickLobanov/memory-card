import axios from "axios"

export const GET_CARDS = 'GET_CARDS'

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
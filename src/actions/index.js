import axios from "axios"

export const GET_CARDS = 'GET_CARDS'
export const CREATE_USER = 'CREATE_USER'
export const PATCH_USER = 'PATCH_USER'
export const DELETE_USER = 'DELETE_USER'

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
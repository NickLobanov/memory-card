import { CREATE_USER, PATCH_USER } from "../actions";

const initialState = {
    userName: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER: {
            return {...state, userName: action.name}
        }
        case PATCH_USER: {
            return {...state, userName: action.newName}
        }
        default: {
            return state
        }
    }
}
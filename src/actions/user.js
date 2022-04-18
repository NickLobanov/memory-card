export const CREATE_USER = 'CREATE_USER'
export const PATCH_USER = 'PATCH_USER'
export const DELETE_USER = 'DELETE_USER'

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
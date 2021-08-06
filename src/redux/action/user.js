import * as actionType from './actionTypes'

export const tokenHandler = (token) => {
    return {
        type: actionType.TOKEN,
        token
    }
}

export const saveChildHandler = (child) => {
    return {
        type: actionType.SAVE_CHILD,
        child
    }
}
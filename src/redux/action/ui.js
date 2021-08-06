import * as actionType from './actionTypes'

export const userMessageHandler = (message, message1) => {
    return {
        type: actionType.SIGNUP_AND_FORGOT_MESSAGE,
        message1,
        message
    }
}

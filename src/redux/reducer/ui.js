const initialState = {
    message1: '',
    message: '',
    userId: '',
    child: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_AND_FORGOT_MESSAGE':
            return {
                ...state,
                message1: action.message1,
                message: action.message
            }
        case 'USER_ID':
            return {
                ...state,
                userId: action.id
            }
        case 'SAVE_CHILD':
            return {
                ...state,
                child: action.child
            }
        default:
            return state
    }
}

export default reducer
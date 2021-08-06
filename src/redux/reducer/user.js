const initialState = {
    token: '',
    child: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOKEN':
            return {
                ...state,
                token: action.token
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
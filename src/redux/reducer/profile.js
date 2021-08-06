const initialState = {
    child: {
        photo: '',
        name: '',
        age: '',
        language: '',
        interest: []
    },
    loading: false,
    error: null,
    redirectLink: '',
    isSubmitted: false,
    check: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USER_INPUT_HANDLER':
            return {
                ...state,
                child: {...state.child, [action.name]: action.value}
        }
        case 'ISREDIRECT':
            return {
                ...state,
                redirectLink: action.link
            }
        case 'ISSUBMITTED':
            return {
                ...state,
                isSubmitted: true
            }
        case 'CHECK':
            return {
                ...state,
                check: true
            }
        case 'START_FETCHING_CHILD': 
            return {
                ...state,
                loading: true
            }
        case 'FAIL_TO_FETCH_CHILD':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case 'SUCCESS_TO_FETCH_CHILD':
            return {
                ...state,
                child: {
                        ...state.child, 
                        name: action.user.name, 
                        age: action.user.age,
                        language: action.user.language,
                        photo: action.user.photo,
                        _id: action.user._id,
                        interest: action.user.interest
                    },
                loading: false
                
            }
        default:
            return state
    }
}

export default reducer
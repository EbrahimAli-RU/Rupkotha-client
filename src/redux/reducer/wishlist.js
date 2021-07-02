const initialState = {
    loading: false,
    error: null,
    wishlist: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START_FETCHING_WISHLIST':
            return {
                ...state,
                loading: true
            }
        case 'SUCCESS_FETCHING':
            return {
                ...state,
                wishlist: action.wishlist,
                loading: false
            }
        case 'FAIL_TO_FETCH_WISHLIST':
            return {
                ...state,
               error: action.error,
               wishlist: [],
               loading: false
            }
        default:
            return state
    }
}

export default reducer
const initialState = {
    loading: false,
    error: null,
    wishlist: [],
    success: false
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
                loading: false,
                success: true
            }
        case 'FAIL_TO_FETCH_WISHLIST':
            return {
                ...state,
               error: action.error,
               wishlist: [],
               loading: false,
               success: false
            }
        default:
            return state
    }
}

export default reducer
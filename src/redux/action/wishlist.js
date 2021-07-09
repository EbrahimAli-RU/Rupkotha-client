import * as actionType from './actionTypes'
import axios from '../../utils/axios/axios'

export const startFetching = () => {
    return {
        type: actionType.START_FETCHING_WISHLIST,
    }
}

export const successFetching = (wishlist) => {
    return {
        type: actionType.SUCCESS_FETCHING,
        wishlist
    }
}

export const failFetching = (error) => {
    return {
        type: actionType.FAIL_TO_FETCH_WISHLIST,
        error
    }
}

export const fetchWishlist = (id) => {
    return dispatch => {
        dispatch(startFetching());
        axios.get(`/wishlist/${id}`).then(res => {
            dispatch(successFetching(res.data.data.wishList))
        }).catch(err => {
            failFetching(err.response)
            console.log(err.response)
        })
    }
}
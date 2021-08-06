import * as actionType from './actionTypes'
import axios from '../../utils/axios/axios'

export const redirectLinkHandler = (link) => {
    return {
        type: actionType.ISREDIRECT,
        link
    }
}

export const isSubmittedHandler = () => {
    return {
        type: actionType.ISSUBMITTED,
    }
}
export const checkHandler = () => {
    return {
        type: actionType.CHECK,
    }
}

export const userInputHandler = (name, value) => {
    return {
        type: actionType.USER_INPUT_HANDLER,
        name,
        value
    }
}


export const successFetching = (user) => {
    return {
        type: actionType.SUCCESS_TO_FETCH_CHILD,
        user
    }
}
export const startFetching = () => {
    return {
        type: actionType.START_FETCHING_CHILD,
    }
}

export const failToFetch = (error) => {
    return {
        type: actionType.START_FETCHING_CHILD,
        error
    }
}

export const fetchChildProfile = (id) => {
    return dispatch => {
        dispatch(startFetching())
        axios.get(`/child/${id}`).then(res => {
            dispatch(successFetching(res.data.data.child))
        }).catch(err => {
            dispatch(failToFetch(err.response.data))
            console.log(err.response)
        })
    }
}
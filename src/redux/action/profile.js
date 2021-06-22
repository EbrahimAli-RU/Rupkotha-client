import * as actionType from './actionTypes'

export const photoHandler = (photo) => {
    return {
        type: actionType.PHOTO,
        photo
    }
}

export const nameHandler = (name) => {
    return {
        type: actionType.NAME,
        name
    }
}

export const ageHandler = (age) => {
    return {
        type: actionType.AGE,
        age
    }
}

export const languageHandler = (language) => {
    return {
        type: actionType.LANGUAGE,
        language
    }
}

export const interestHandler = (interest) => {
    return {
        type: actionType.INTEREST,
        interest
    }
}

// export const currentProfileHandler = () => {
//     const currentProfile = JSON.parse(localStorage.getItem('currentProfile'))
//     return {
//         type: actionType.CURRENT_USER,
//     }
// }
const initialState = {
    photo: '',
    name: '',
    age: '',
    language: '',
    interest: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PHOTO':
            return {
                ...state,
                photo: action.photo
            }
        case 'NAME':
            return {
                ...state,
                name: action.name
            }
        case 'AGE':
            return {
                ...state,
                age: action.age
            }
        case 'LANGUAGE':
            return {
                ...state,
                language: action.language
        }
        case 'INTEREST':
            return {
                ...state,
                interest: action.interest
        }
        default:
            return state
    }
}

export default reducer
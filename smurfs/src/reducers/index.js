export const initialState = {
    isPosting: false,
    isGetting: false,
    isEditing: false,
    isDeleting: false,
    characterChanged: null,
    characters: [],
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'POSTING_SMURF':
            return {
                ...state,
                isPosting: true,
                characterChanged: action.payload,
                characters: [...state.characters, action.payload]
            }
        case 'POSTING_SMURF_SUCCESS':
            return {
                ...state,
                isPosting: false,
                characterChanged: null
            }
        case 'GETTING_SMURFS': 
            return {
                ...state,
                isGetting: true
            }
        case 'GETTING_SMURFS_SUCCESS':
            return {
                ...state,
                isGetting: false,
                characters: action.payload
            }
        case 'EDITING_SMURF':
            return {
                ...state,
                isEditing: true,
                characterChanged: action.payload,
                characters:[...state.characters.filter(c => 
                    c.id !== action.payload.id
                ), action.payload]
            }
        case 'EDITING_SMURF_SUCCESS':
            return {
                ...state,
                isEditing: false
            }
        case 'DELETING_SMURF': 
            return {
                ...state,
                isDeleting: true,
                characterChanged: action.payload,
                characters: state.characters.filter(c => c.id !== action.payload.id)
            }
        case 'DELETING_SMURF_SUCCESS':
            return {
                ...state,
                isDeleting: false
            }
        default:
            return state;
    }
}
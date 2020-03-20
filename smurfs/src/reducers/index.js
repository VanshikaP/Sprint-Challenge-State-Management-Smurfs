export const initialState = {
    isPosting: false,
    isGetting: false,
    isEditing: false,
    characterChanged: null,
    characters: null,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'POSTING_SMURF':
            return {
                ...state,
                isPosting: true,
                isEditing: false,
                characterChanged: action.payload
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
                isEditing: true
            }
        default:
            return state;
    }
}
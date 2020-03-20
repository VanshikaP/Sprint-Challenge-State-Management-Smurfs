import axios from 'axios'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'GETTING_SMURFS'})
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: 'GETTING_SMURFS_SUCCESS', payload: response })
        })
        .catch(err => console.log(err));
    }
}

export const addSmurf = smurf => {
    return dispatch => {
        dispatch({ type: 'POSTING_SMURF', payload: smurf })
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            console.log(response)
            dispatch({ type: 'POSTING_SMURF_SUCCESS' })
        })
        .catch(err => console.log(err))
    }
}
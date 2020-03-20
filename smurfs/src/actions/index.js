import axios from 'axios'

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: 'GETTING_SMURFS'})
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({ type: 'GETTING_SMURFS_SUCCESS', payload: response.data })
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

export const editSmurf = smurf => {
    return dispatch => {
        dispatch ({ type: 'EDITING_SMURF', payload: smurf})
        axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(response => {
            console.log(response)
            dispatch({type: 'EDITING_SMURF_SUCCESS' })
        })
        .catch(err => console.log(err))
    }
}

export const deleteSmurf = smurf => {
    return dispatch => {
        dispatch({ type: 'DELETING_SMURF', payload: smurf })
        axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(response => {
            console.log(response)
            dispatch({ type: 'DELETING_SMURF_SUCCESS'})
        })
        .catch(err => console.log(err))
    }
}
import React from 'react'

import { connect } from 'react-redux'

const Smurf = ({smurf, props}) => {
    return (
        <div className='smurf-card'>
            <h3 className='smurf-name'> {smurf.name} </h3>
            <p className='smurf-age'> {smurf.age} years old </p>
            <p className='smurf-height'>Height: {smurf.height} </p>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        isEditing: state.isEditing,
        characterChanged: state.characterChanged
    }
}

export default connect(mapStateToProps)(Smurf)
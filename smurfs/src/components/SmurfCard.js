import React from 'react'
import { Link } from 'react-router-dom'


import { connect } from 'react-redux'

const SmurfCard = ({smurf, props}) => {
    return (
        <div className='smurf-card'>
            <Link className='smurf-name' to={`/smurfs/${smurf.id}`}> {smurf.name} </Link>
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

export default connect(mapStateToProps)(SmurfCard)
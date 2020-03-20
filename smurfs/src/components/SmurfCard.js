import React from 'react'
import { Link } from 'react-router-dom'


const SmurfCard = ({smurf}) => {
    return (
        <div className='smurf-card'>
            <Link className='smurf-name' to={`/smurfs/${smurf.id}`}> {smurf.name} </Link>
            <p className='smurf-age'> {smurf.age} years old <br />
            <span className='smurf-height'>Height: {smurf.height} </span></p>
        </div>
    )
}

export default SmurfCard
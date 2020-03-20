import React, {useState, useEffect} from 'react'
import Smurf from './Smurf'
import { connect } from 'react-redux'

import {getSmurfs} from '../actions'

const Smurfs = props => {
    useEffect(() => {
        props.getSmurfs()
    })
    return (
        <div className='smurfs-grid'>
            {/* {props.characters.map(smurf => {
                return (
                    <Smurf key={smurf.id} smurf={smurf} />
                )
            })} */}
            <h2> Smurfs here </h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isGetting: state.isGetting,
        characters: state.characters
    }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs)
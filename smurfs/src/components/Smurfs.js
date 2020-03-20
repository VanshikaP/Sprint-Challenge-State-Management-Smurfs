import React, {useState, useEffect} from 'react'
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux'

import {getSmurfs} from '../actions'

const Smurfs = props => {
    useEffect(() => {
        props.getSmurfs()
    }, [])
    console.log('Smurfs: ', props.characters);
    return (
        <div className='smurfs-grid'>
            {props.isGetting && !props.characters && (
                <h2 className='loading-text'>...Loading</h2>
            )}
            {!props.isGetting && props.characters && 
                props.characters.map(smurf => 
                    (<SmurfCard key={smurf.id} smurf={smurf} />)
                )
            }
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
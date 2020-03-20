import React, {useState} from 'react'
import { connect } from 'react-redux'

import {addSmurf} from '../actions'

const AddSmurfForm =  props => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('')
    const [age, setAge] = useState()

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleHeightChange = e => {
        setHeight(e.target.value)
    }

    const handleSubmit = e => {
        console.log(name, age, height);
        e.preventDefault();
        props.addSmurf({
            name: name,
            height: height,
            age: age
        })
    }
    return (
        <form className='add-smurf-form'>
            <label className='add-label' htmlFor='name'>Name: </label>
            <input type='text' className='add-input' name='name' value={name} onChange={handleNameChange} />

            <label className='add-label' htmlFor='age'>Age: </label>
            <input type='text' className='add-input' name='age' value={age} onChange={handleAgeChange} />

            <label className='add-label' htmlFor='name'>Height: </label>
            <input type='text' className='add-input' name='height' value={height} onChange={handleHeightChange} />

            <button className='add-submit btn' onClick={handleSubmit}>Add Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting
    }
}
export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)
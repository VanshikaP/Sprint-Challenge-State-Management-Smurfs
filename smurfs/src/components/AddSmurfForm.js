import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {addSmurf} from '../actions'

const AddSmurfForm =  props => {
    const [added, setAdded] = useState(false);
    const [name, setName] = useState('');
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')

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
        e.preventDefault();
        props.addSmurf({
            name: name,
            height: height,
            age: age
        })
        setAdded(true)
    }
    
    return (
        <div className='form-page-container'>
            {!added && (
                <form className='add-smurf-form'>
                    <h2 className='form-title'>Add a Smurf</h2>
                    <div className='form-input'>
                    <label className='add-label' htmlFor='name'>Name: </label>
                    <input type='text' className='add-input' name='name' value={name} onChange={handleNameChange} />
                    <br />
                    </div>
                    <div className='form-input'>
                    <label className='add-label' htmlFor='age'>Age: </label>
                    <input type='text' className='add-input' name='age' value={age} onChange={handleAgeChange} />
                    <br />
                    </div>
                    <div className='form-input'>
                    <label className='add-label' htmlFor='name'>Height: </label>
                    <input type='text' className='add-input' name='height' value={height} onChange={handleHeightChange} />
                    <br />
                    </div>
                    <div className='form-btn-container'>
                    <button className='add-submit btn' onClick={handleSubmit}>Add Smurf</button>
                    </div>
                </form>
            )}
            {added && (
                <div className='success'>
                    <h2>{name} Smurf added successfully</h2>
                    <div className='nav-link-container'>
                        <Link className='nav-link' to='/addSmurf'>Add another Smurf</Link>
                        <Link className='nav-link' to='/'>Go Back</Link>
                    </div>
                </div>
            )}
        </div>
        )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting
    }
}
export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)

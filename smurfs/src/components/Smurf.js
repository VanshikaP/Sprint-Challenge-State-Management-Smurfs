import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'

import { getSmurfs, addSmurf, deleteSmurf } from '../actions'

const Smurf = props => {
    const { smurfId } = useParams();

    useEffect(() => {
        // const smurfId = id;
        if(!props.characters) {
            props.getSmurfs();
        } else {
            const smurf = props.characters.filter(c => c.id === smurfId)
            setCharacter(smurf)
        }   
    }, [props.characters])

    const [editing, setEditing] = useState(false)
    const [character, setCharacter] = useState({})
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

    const handleEdit = e => {
        e.preventDefault();
        setEditing(true);
    }
    const handleSubmit = e => {
        console.log(name, age, height);
        e.preventDefault();
        setEditing(false)
        props.addSmurf({
            name: name,
            height: height,
            age: age
        })
    }

    const handleDelete = e => {
        e.preventDefault();
        props.deleteSmurf(character)
    }
    return (
        <div className='smurf-container'>
            {props.isPosting || props.isDeleting && (
                <h2 className='loading-text'>...Loading</h2>
            )}
            {!editing && !props.isPosting && !props.isDeleting &&(
                <div className='smurf'>
                    <div className='smurf-info'>
                        <h3 className='smurf-name'> {character.name} </h3>
                        <p className='smurf-age'> {character.age} years old </p>
                        <p className='smurf-height'>Height: {character.height} </p>
                    </div>
                    <div className='btn-container'>
                        <button className='edit btn' onClick={handleEdit}>Edit</button>
                        <button className='delete btn' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
            {editing && !props.isPosting && !props.isDeleting && (
                <form className='add-smurf-form'>
                    <label className='add-label' htmlFor='name'>Name: </label>
                    <input type='text' className='add-input' name='name' value={name} onChange={handleNameChange} />
        
                    <label className='add-label' htmlFor='age'>Age: </label>
                    <input type='text' className='add-input' name='age' value={age} onChange={handleAgeChange} />
        
                    <label className='add-label' htmlFor='name'>Height: </label>
                    <input type='text' className='add-input' name='height' value={height} onChange={handleHeightChange} />
        
                    <button className='add-submit btn' onClick={handleSubmit}>Add Smurf</button>
                </form>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isPosting: state.isPosting,
        isDeleting: state.isDeleting,
        characterChanged: state.characterChanged,
        characters: state.characters
    }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf, deleteSmurf})(Smurf)
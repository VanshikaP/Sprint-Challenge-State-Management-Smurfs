import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'

import { editSmurf, getSmurfs, deleteSmurf } from '../actions'

const Smurf = props => {
    const { smurfId } = useParams();
    const [character, setCharacter] = useState({})

    console.log('SMURF ID IS ', smurfId)

    useEffect(() => {
        // const smurfId = id;
        console.log('HELLO', props.characters.length === 0, props.characters)
        if(props.characters.length === 0) {
            props.getSmurfs();
        } else {
            const smurf = props.characters.filter(c => c.id == smurfId)
            console.log('****', props.characters, smurf)
            smurf !== [] && setCharacter(smurf[0])
        }   
    }, [props.characters, smurfId])

    console.log('&&&', character);

    const [editing, setEditing] = useState(false)
    const [deleted, setDeleted] = useState(false)
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
        // e.preventDefault();
        setEditing(true);
        setName(character.name)
        setAge(character.age)
        setHeight(character.height)
    }
    const handleSubmit = e => {
        console.log(name, age, height);
        e.preventDefault();
        setEditing(false)
        props.editSmurf({
            name: name,
            height: height,
            age: age,
            id: character.id
        })
    }

    const handleDelete = e => {
        e.preventDefault();
        setDeleted(true);
        props.deleteSmurf(character);
    }
    return (
        <div className='smurf-container'>
            {props.isPosting || props.isDeleting && (
                <h2 className='loading-text'>...Loading</h2>
            )}
            {!editing && !props.isPosting && !deleted && character && !props.isDeleting &&(
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
            {editing && !props.isPosting && !deleted && !props.isDeleting && (
                <form className='add-smurf-form'>
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
                    <button className='add-submit btn' onClick={handleSubmit}>Edit Smurf</button>
                </form>
            )}
            {deleted && (
                <div className='success'>
                    <h2> Smurf deleted successfully </h2>
                    <div className='nav-link-container'>
                        <Link className='nav-link' to='/'>Go Back</Link>
                    </div>
                </div>
            )}
            {!deleted && !character && (
                <div className='success'>
                <h2> Smurf not found </h2>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/'>Go Back</Link>
                </div>
            </div>
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

export default connect(mapStateToProps, {getSmurfs, editSmurf, deleteSmurf})(Smurf)
import React, { useState } from 'react';
import { Link } from '@reach/router';

const PetForm = ({
    initName, initType, initDesc,
    initSkillOne, initSkillTwo, initSkillThree,
    onSubmitProp, errors, buttonName }) => {

    const style = {
        card: {
            borderRadius: '10px',
            margin: '15px',
            padding: '15px',
            textAlign: 'left'
        },
        label: {
            fontWeight: 'bold'
        },
        invalid: {
            display: 'inline-block',
            fontSize: '14px',
            color: 'red',
            margin: '0px',
            padding: '0px'
        }
    }
    const [name, setName] = useState(initName);
    const [type, setType] = useState(initType);
    const [description, setDescription] = useState(initDesc);
    const [skillOne, setSkillOne] = useState(initSkillOne);
    const [skillTwo, setSkillTwo] = useState(initSkillTwo);
    const [skillThree, setSkillThree] = useState(initSkillThree);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, type, description, skillOne, skillTwo, skillThree });
    }

    return (
        <div className="row justify-content-center">
            <div className="card col-4" style={style.card}>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label style={style.label}>Pet Name:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setName(e.target.value) }}
                            value={name} />
                        <div style={style.invalid}>{errors.name ? errors.name.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Pet Type:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setType(e.target.value) }}
                            value={type} />
                        <div style={style.invalid}>{errors.type ? errors.type.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Pet Description:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setDescription(e.target.value) }}
                            value={description} />
                        <div style={style.invalid}>{errors.description ? errors.description.message : null}</div>
                    </div>
                    <br></br>
                    <h2>Skills (optional):</h2>
                    <div className="form-group">
                        <label style={style.label}>Skill 1:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setSkillOne(e.target.value) }}
                            value={skillOne} />
                        <div style={style.invalid}>{errors.skillOne ? errors.skillOne.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Skill 2:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setSkillTwo(e.target.value) }}
                            value={skillTwo} />
                        <div style={style.invalid}>{errors.skillTwo ? errors.skillTwo.message : null}</div>
                    </div>
                    <div className="form-group">
                        <label style={style.label}>Skill 3:</label>
                        <input className="form-control"
                            type="text"
                            onChange={e => { setSkillThree(e.target.value) }}
                            value={skillThree} />
                        <div style={style.invalid}>{errors.skillThree ? errors.skillThree.message : null}</div>
                    </div>
                    <input className="btn btn-primary" type="submit" value={buttonName} />
                    <span>&nbsp;</span>
                    <Link className="btn btn-dark" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default PetForm;
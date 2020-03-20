import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';
import Axios from 'axios';

const Edit = ({ id }) => {
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                setPet(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    const editPet = pet => {
        Axios.put(`http://localhost:8000/api/pet/${id}`, pet)
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className="container">
            <h2>Edit {pet.name}</h2>
            <Link to="/">Back to main page</Link>
            {
                loaded && <PetForm initName={pet.name}
                    initType={pet.type}
                    initDesc={pet.description}
                    initSkillOne={pet.skillOne}
                    initSkillTwo={pet.skillTwo}
                    initSkillThree={pet.skllThree}
                    buttonName="Update Pet"
                    onSubmitProp={editPet}
                    errors={errors} />
            }
        </div>
    )
}

export default Edit;
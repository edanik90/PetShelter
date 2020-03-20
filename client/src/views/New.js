import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import PetForm from '../components/PetForm';
import Axios from 'axios';

const New = () => {
    const [errors, setErrors] = useState({});

    const addPet = pet => {
        Axios.post("http://localhost:8000/api/pet/new", pet)
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return(
        <div className="container">
            <h2>Know a pet needing a home?</h2>
            <Link to="/">Back to main page</Link>
            <PetForm initName=""
                initType=""
                initDesc=""
                initSkillOne=""
                initSkillTwo=""
                initSkillThree=""
                buttonName="Add Pet"
                onSubmitProp={addPet}
                errors={errors} />
        </div>
    )
}

export default New;
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Link, navigate } from '@reach/router';

const Info = ({id, style}) => {
    const [pet, setPet] = useState({});
    const [isLiked, SetIsLiked] = useState(false);
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    }, [isLiked]);
    const adoptPet = e => {
        Axios.delete(`http://localhost:8000/api/pet/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }
    const likePet = e => {
        setPet({
            name: pet.name,
            type: pet.type,
            description: pet.description,
            skillOne: pet.skillOne,
            skillTwo: pet.skillTwo,
            skillThree: pet.skillThree,
            likes: pet.likes++
        });
        Axios.put(`http://localhost:8000/api/pet/${id}`, pet)
            .then(res => {
                setPet(res.data);
                SetIsLiked(true)
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="container">
            <h2>Details about: {pet.name}</h2>
            <Link to="/">Back to main page</Link>
            <br></br>
            <h3><span style={style.span}>Pet type:</span> {pet.type}</h3>
            <h3><span style={style.span}>Description:</span> {pet.description}</h3>
            <h3><span style={style.span}>Skills:</span></h3>
            <h3>{pet.skillOne}</h3>
            <h3>{pet.skillTwo}</h3>
            <h3>{pet.skillThree}</h3>
            <button className="btn btn-danger" onClick={adoptPet}>Adopt {pet.name}</button>
            <br></br>
            <br></br>
            <button className="btn btn-success" onClick={likePet} disabled={isLiked}>Like {pet.name}</button>
            <br></br>
            <span>   {pet.likes} like(s)</span>
        </div>
    )
}

export default Info;
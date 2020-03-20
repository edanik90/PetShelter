import React, {useState, useEffect} from 'react';
import PetsList from '../components/PetsList';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                setPets(res.data.sort((pet1, pet2) => pet1.type > pet2.type ? 1: -1));
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
            <h3>These pets are looking for a good home</h3>
            <Link to="/pet/new">Add a pet to the shelter</Link>
            {
                isLoaded && <PetsList pets={pets} />
            }
        </div>
    )
}

export default Main;
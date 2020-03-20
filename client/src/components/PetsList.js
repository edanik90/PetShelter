import React from 'react';
import {Link} from '@reach/router';

const PetsList = ({pets}) => {
    return(
        <div className="row justify-content-center">
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pets.map((pet, idx) => {
                        return(
                            <tr key={idx}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={`/pet/${pet._id}`} className="btn btn-primary">View pet's info</Link>
                                    <span>&nbsp;</span>
                                    <Link to={`/pet/${pet._id}/edit`} className="btn btn-dark">Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default PetsList;
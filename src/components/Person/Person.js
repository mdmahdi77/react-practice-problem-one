import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const {image, id, fname, lname, salary, email, phone, country} = props.user;
    // console.log(props.user)
    return (
        <div className="person">
            <img src={image} alt=""/>
            <div className="person-info">
                <h2 className="personName">{id}- {fname} {lname}</h2>
                <h4 className="personSalary">Monthly Salary: <span>${salary}</span></h4>
                <h2 className="personContact">Contact Information</h2>
                <h5 className="personEmailPhone">Email: <span>{email}</span></h5>
                <h5 className="personEmailPhone">Phone: <span>{phone}</span></h5>
                <h4 className="personCountry">Country: {country}</h4>
                <button onClick={ ()=> props.handleAddPerson(props.user)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Person;
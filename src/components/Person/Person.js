import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const {image, id, fname, lname, salary, email, phone, country} = props.user;
    const [number, setNumber] = useState("");
    // console.log(props.user)
    const showNumber = () => setNumber(phone)
    return (
        <div className="person">
            <img src={image} alt=""/>
            <div className="person-info">
                <h2 className="personName">{fname} {lname}</h2>
                <h4 className="personSalary">Monthly Salary: <span>${salary}</span></h4>
                <h2 className="personContact">Contact Information</h2>
                <h5 className="personContact">Email: <span>{email}</span></h5>
                <h5 className="personContact">Phone: <span>{number}</span></h5>
                <h4 className="personContact">Country: <span>{country}</span></h4>
                <button className="btn" onClick={ ()=> props.handleAddPerson(props.user)}><FontAwesomeIcon icon={faPlus} /></button>
                <button className="btn" onClick={showNumber}>Show Number</button>
            </div>
        </div>
    );
};

export default Person;
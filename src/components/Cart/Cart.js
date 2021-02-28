import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce(  (total, use) => total * use.salary, 12 )
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i];
        total = total + (salary.salary * 12)
        
    }
    return (
        <div className="cart">
            <h1>Person Income</h1>
            <h3><FontAwesomeIcon icon={faUser} /> <span>{cart.length}</span></h3>
            <h4>Yearly salary: <span>${total}</span></h4>
        </div>
    );
};

export default Cart;
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce(  (total, use) => total * use.salary, 12 )
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const salary = cart[i];
        total = total + (salary.salary * 12)
        
    }
    return (
        <div>
            <h1>Person</h1>
            <h3>Add Person: {cart.length}</h3>
            <h4>Yearly salary: {total}</h4>
        </div>
    );
};

export default Cart;
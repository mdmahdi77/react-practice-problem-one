import React, { useState } from 'react';
import './User.css';
import userData from '../../../data/MOCK_DATA.json'
import Person from '../../Person/Person';
import Cart from '../../Cart/Cart';




const User = () => {
    const first15 = userData.slice(0, 15)
    // console.log(first15)
    const [users, setUsers] = useState(first15)
    // useEffect(()=>{
    //     setUser(userData)
    //     // console.log(userData)
    // }, [])

    const [cart, setCart] = useState([])

    const handleAddPerson = (user) =>{
        const newCart = [...cart, user]
        setCart(newCart)
    }
    return (
        <div className="user-container">
            <div className="person-container">
                    {
                        users.map(user => <Person key={user.id} handleAddPerson={handleAddPerson} user={user}></Person>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default User;
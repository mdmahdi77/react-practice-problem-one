import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/user">User</a>
                <a href="/details">Details</a>
                <a href="/contact">Contact</a>
                <a href="/Services">Services</a>
                <a href="/team">Team</a>
            </nav>
        </div>
    );
};

export default Header;
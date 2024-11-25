import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
   
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                {/* You can add a logo here if you want */}
            </div>
            <ul className='navbar-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/doctorlist">Doctors</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Create Account</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

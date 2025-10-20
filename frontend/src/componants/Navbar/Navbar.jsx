import React from 'react';

import Logo from "../../images/logo.png"
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="header-nav">
        <div className="header-nav__left">
            <img className="header-nav__logo" src={Logo} alt="Logo Image" />
            <span className="header-nav__title">Student Hub</span>
        </div>
        
        <div className="header-nav__right">
            <button className="header-nav__button header-nav__button--logout">
            Logout
            </button>
        </div>
        </nav>
    )
}

export default Navbar;
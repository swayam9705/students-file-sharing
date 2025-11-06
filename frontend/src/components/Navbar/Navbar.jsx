import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-logo">
                    <span>Logo</span>
                </div>
                <button className="Navbar-logout">Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { auth } from '../../config/firebase.config'
import useUserContext from "../../contexts/UserContext"

import './Navbar.css'
import Logo from "../../images/logo.svg"

const Navbar = () => {

    const { userContextDetails, setUserContextDetails } = useUserContext()

    const handleLogout = async () => {
        if (userContextDetails != null) {
            try {
                await auth.signOut()
                setUserContextDetails(null)
                navigate("/auth")
                console.log("User logged out successfully")
            }
            catch (error) {
                console.log("Error occured at logout", error)
            }
        }
        else {
            navigate("/auth")
        }
    }

    return (
        <nav className="Navbar">
            <div className="Navbar-container">
                <div className="Navbar-logo">
                    <img src={Logo} />
                </div>
                <button
                    onClick={handleLogout}
                    className="Navbar-logout"
                >
                    {
                        userContextDetails ? `${userContextDetails.email} Logout` : "Login"
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar
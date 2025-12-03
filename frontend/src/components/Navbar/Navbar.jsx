import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { auth } from '../../config/firebase.config'
import useUserContext from "../../contexts/UserContext"

import './Navbar.css'
import Logo from "../../images/logo.svg"

const Navbar = () => {

    const { userContextDetails, setUserContextDetails } = useUserContext()

    const navigate = useNavigate()

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
            <div className="Navbar-left">
                <div className="Navbar-logo">
                    <img src={Logo} />
                </div>
            </div>
            <div className="Navbar-right">
                <span className="Navbar-usrname">
                    { userContextDetails && `${userContextDetails.email}` }
                </span>
                <button
                    onClick={handleLogout}
                    className="Navbar-logout"
                >
                    {
                        userContextDetails ?  "Logout" : "Login"
                    }
                </button>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
import React, { useEffect } from 'react'
import SubNavbar from '../../components/SubNavbar/SubNavbar'
import Dashboard from '../../components/Dashboard/Dashboard'
import { Link, useNavigate } from 'react-router'
import useUserContext from '../../contexts/UserContext'
import { FaPlus } from "react-icons/fa"

import "./Home.css"

const Home = () => {

    const navigate = useNavigate()
    const { userContextDetails, setUserContextDetails } = useUserContext()

    useEffect(() => {
        if (userContextDetails == null) {
            navigate("/auth")
        }
    }, [userContextDetails])

    return (
        <div className="Home">
            {/* subjects bar */}
            <SubNavbar
                links={[
                    {title: "Microprocessor", link: "#"},
                    {title: "Operating System", link: "#"},
                    {title: "Database Management System", link: "#"},
                    {title: "Computer Graphics", link: "#"},
                    {title: "Data Structures", link: "#"},
                    {title: "Statistics", link: "#"},
                ]}
            />

            {/* file type bar */}
            <SubNavbar
                links={[
                    {title: "Modules", link: "#"},
                    {title: "Experiments", link: "#"},
                    {title: "Upload Files", link: "#"},
                    {title: "Assignments", link: "#"},
                ]}
            />
            <div className="Home-link-container">
                <Link to="/upload">Upload File <FaPlus /></Link>
            </div>
            <Dashboard />
        </div>
    )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SubNavbar from '../components/SubNavbar/SubNavbar'
import Dashboard from '../components/Dashboard/Dashboard'

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            
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

            <Dashboard />
        </div>
    )
}

export default Home
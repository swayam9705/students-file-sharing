import { Link } from "react-router"

import FileCard from "../FileCard/FileCard"

import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <FileCard
                title="Module 1: Introduction" 
                link="#"
            />
            <FileCard
                title="Module 2: Dynamic Programming" 
                link="#"
            />
            <FileCard
                title="Module 4: Divide and Conquer"
                link="#"
            />
            <FileCard
                title="Module 1: Introduction" 
                link="#"
            />
        </div>
    )
}

export default Dashboard
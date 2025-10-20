import { Link } from "react-router"

import "./Sidebar.css"

const Sidebar = () => {

    const subjects = [
        "DBMS",
        "Operating System",
        "Computer Network",
        "Statistics"
    ]

    return (
        <div className="Sidebar">
            <div className="Sidebar__title">Subjects</div>
            <div className="Sidebar__list">
                {
                    subjects.map(sub => (
                        <Link to={"#"} className="Sidebar__list-subject">{ sub }</Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
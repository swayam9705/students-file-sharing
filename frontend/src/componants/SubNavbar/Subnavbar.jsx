import { Link } from "react-router"

import "./SubNavbar.css"

const SubNavbar = () => {

    const types = [
        "Modules",
        "Assignments",
        "Experiments",
        "Upload Files"
    ]

    return (
        <div className="SubNavbar">
            {
                types.map(type => (
                    <Link className="SubNavbar__link" to={"#"}>{ type }</Link>
                ))
            }
        </div>
    )
}

export default SubNavbar
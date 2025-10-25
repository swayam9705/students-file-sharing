import { Link } from "react-router"

import "./FileBox.css"

const FileBox = ({ title, lastUpdated }) => {
    return (
        <div className="FileBox">
            <div className="FileBox__top">
                { title }
            </div>
            <div className="FileBox__bottom">
                <span className="FileBox__bottom-lastupdated">
                    { lastUpdated }
                </span>
                <Link to={"#"}>View Details</Link>
            </div>
        </div>
    )
}

export default FileBox
import { Link } from "react-router"

import "./FileCard.css"

const FileCard = ({ title, link }) => {
    return (
        <div className="FileCard">
            <div className="FileCard-top">
                { title }
            </div>
            <div className="FileCard-bottom">
                <Link to={link}>Open</Link>
                <Link to={link}>Download</Link>
            </div>
        </div>
    )
}

export default FileCard
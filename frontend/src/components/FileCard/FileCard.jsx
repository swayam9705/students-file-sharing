import { Link } from "react-router"

import { FaRegFileAlt } from "react-icons/fa"
import { GoDownload } from "react-icons/go"

import "./FileCard.css"

const FileCard = ({ title, link }) => {
    return (
        <div className="FileCard">
            <div className="FileCard-top">
                { title }
            </div>
            <div className="FileCard-bottom">
                <Link to={link}><FaRegFileAlt /></Link>
                <Link to={link}><GoDownload /></Link>
            </div>
        </div>
    )
}

export default FileCard
import { Link } from "react-router"


import "./SubNavbar.css"

const SubNavbar = ({ links }) => {
    return (
        <div className="SubNavbar">
            {/* <span className="SubNavbar-arrow">&lt;</span> */}
            <div className="SubNavbar-container">
                {
                    links.map(link => (
                        <Link
                            key={link.title}
                            className="SubNavbar-link"
                            to={link.link}
                        >{ link.title }</Link>
                    )) 
                }
            </div>
            {/* <span className="SubNavbar-arrow">&gt;</span> */}
        </div>
    )
}

export default SubNavbar
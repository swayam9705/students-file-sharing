import { Link } from 'react-router'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__message">Oops! Page not found</p>
                <p className="not-found__description">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link to="/login" className="not-found__button">
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
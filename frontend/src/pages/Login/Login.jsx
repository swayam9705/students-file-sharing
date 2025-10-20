import { useState } from 'react'
import PosterImage from "../../images/poster.svg"

import "./Login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleLogin = () => {
        console.log('Login attempt:', credentials)
        // Add your login logic here
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login">
            <div className="login__panel">
                <div className="login__panel-content">
                    <h1 className="login__panel-title">Login</h1>
                    <p className="login__panel-subtitle">Enter your account details</p>

                    <div className="login-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="username" 
                                name="username"
                                value={credentials.username}
                                onChange={handleInputChange}
                                className="form-group__input" 
                                placeholder="Username"
                            />
                        </div>

                        <div className="form-group">
                            <div className="form-group__password-wrapper">
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    className="form-group__input" 
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <a href="#" className="login-form__forgot-password">Forgot Password?</a>

                        <button 
                            onClick={handleLogin}
                            className="login-form__button login-form__button--primary"
                        >
                            Login
                        </button>
                    </div>

                    <div className="login-footer">
                        <p className="login-footer__text">Don't have an account?</p>
                        <a href="#" className="login-footer__signup-button">Sign up</a>
                    </div>
                </div>
            </div>

            <div className="welcome-panel">
                <div className="welcome-panel__content">
                    <h2 className="welcome-panel__title">
                        Welcome to <span className="welcome-panel__title-highlight">student portal</span>
                    </h2>
                    <p className="welcome-panel__subtitle">Login to access your account</p>
                    
                    <div className="welcome-panel__illustration">
                        <img src={PosterImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
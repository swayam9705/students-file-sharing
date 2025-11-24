import { useState, useEffect } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config/firebase.config"
import { useNavigate } from "react-router"


// contexts
import useUserContext from "../../contexts/UserContext"

import Logo from "../../images/logo.svg"
import "./Auth.css"

const Auth = () => {

    const { userContextDetails, setUserContextDetails } = useUserContext()
    const [ formErrMsg, setFormErrMsg ] = useState("")

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, user.email, user.password)
            console.log("User logged in successfully")
            setFormErrMsg("")
        }
        catch (error) {
            setFormErrMsg("Enter proper credentials")
            console.log("Error occured at Auth", error)
        }

    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user != null) {
                setUserContextDetails(user)
                navigate("/")
            }
            else {
                setUserContextDetails(null)
            }
        })
    }, [])

    return (
        <div className="Auth">
            <div className="Auth-container">
                <div className="Auth-logo-container">
                    <img className="Auth-logo" src={Logo} alt="" />
                </div>
                <h2 className="Auth-title">Login to get started</h2>
                
                <div className="Auth-input">
                    <label htmlFor="email">Email</label>
                    <input
                        value={user.email}
                        onChange={e => {
                            setUser({...user, email: e.target.value})
                        }}
                        name="email"
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="Auth-input">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={e => {
                            setUser({...user, password: e.target.value})
                        }}
                        type="password"
                        name="password"
                        placeholder="moodle_id@DOB"
                    />
                </div>

                <button
                    className="Auth-submit"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Login
                </button>
                {
                    formErrMsg !== "" && (
                        <span className="Auth-error">Note: { formErrMsg }</span>
                    ) 
                }
            </div>
        </div>
    )
}

export default Auth
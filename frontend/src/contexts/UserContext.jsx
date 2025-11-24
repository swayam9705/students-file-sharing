import { useState, createContext, useContext } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const [ userContextDetails, setUserContextDetails ] = useState(null)

    return (
        <UserContext.Provider value={{ userContextDetails, setUserContextDetails }}>
            { children }
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext)

export default useUserContext
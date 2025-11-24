import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router"

import Navbar from "./components/Navbar/Navbar"

import useUserContext, { UserContextProvider } from "./contexts/UserContext"

import "./App.css"
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"

function App() {
	const location = useLocation()

	return (
		<UserContextProvider>

		<div className="App">
			{ location.pathname !== '/auth' && <Navbar /> }
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/auth" Component={Auth} />
			</Routes>
		</div>

		</UserContextProvider>
	)
}

export default App

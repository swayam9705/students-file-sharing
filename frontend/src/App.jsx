import { Route, Routes, useLocation } from "react-router"

import Navbar from "./components/Navbar/Navbar"

import { UserContextProvider } from "./contexts/UserContext"

import "./App.css"

// pages
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import Upload from "./pages/Upload/Upload"
import { useEffect } from "react"

function App() {
	const location = useLocation()

	return (
		<UserContextProvider>

		<div className="App">
			{ location.pathname !== '/auth' && <Navbar /> }
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/auth" Component={Auth} />
				<Route path="/upload" Component={Upload} />

			</Routes>
		</div>

		</UserContextProvider>
	)
}

export default App

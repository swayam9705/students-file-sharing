import { Route, Routes } from "react-router"

import Login from "./pages/Login/Login.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"

import './App.css'
import './index.css'
import Home from "./pages/Home/Home.jsx"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="*" Component={NotFound} />
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
			</Routes>
		</div>
	)
}

export default App

import React from "react"
import "./App.css"
import LoadingScreen from "./components/LoadingScreen"
import Navigation from "./components/Navigation"
import { useEffect, useState } from "react"
import { Routes, Route, HashRouter } from "react-router-dom"

import Offers from "./pages/Offers"
import Projects from "./pages/Projects"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

const router = createHashRouter([
	{
		path: "/*",
		element: <App />,
	},
])
const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<HashRouter>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<div className='app-page flex flex-col'>
					<Navigation />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/offers' element={<Offers />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/team' element={<Team />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			)}
		</HashRouter>
	)
}

export default App

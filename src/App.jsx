import "./App.css"
import LoadingScreen from "./components/LoadingScreen"
import Navigation from "./components/Navigation"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Offers from "./pages/Offers"
import Projects from "./pages/Projects"
import Team from "./pages/Team"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])

	return (
		<Router>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<div className='w-full h-92 flex flex-col '>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/offers' element={<Offers />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/team' element={<Team />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			)}
		</Router>
	)
}

export default App

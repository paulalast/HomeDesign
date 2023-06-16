import React from "react"
import {
	motion,
	useViewportScroll,
	useTransform,
	useScroll,
} from "framer-motion"
import "./App.css"
import LoadingScreen from "./components/LoadingScreen"
import Navigation from "./components/Navigation"
import { useEffect, useState, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Offers from "./pages/Offers"
import Projects from "./pages/Projects"
import Team from "./pages/Team"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import { useFollowPointer } from "./components/use-follow-pointer"

const App = () => {
	const [isLoading, setIsLoading] = useState(true)
	const boxRef = useRef(null)
	const { point } = useFollowPointer(boxRef)
	const { scrollYProgress } = useScroll()
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 3000)
	}, [])

	return (
		<Router>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<div className='app-page flex flex-col'>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/offers' element={<Offers />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/team' element={<Team />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<motion.div
						ref={boxRef}
						className='box'
						animate={{ x: point.x, y: point.y, scale, opacity }}
						transition={{
							type: "spring",
							damping: 3,
							stiffness: 50,
							restDelta: 0.001,
						}}
					/>
				</div>
			)}
		</Router>
	)
}

export default App

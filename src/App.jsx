import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import LoadingScreen from "./components/LoadingScreen"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"

import Projects from "./pages/Projects"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2500)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	const appVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0,
				duration: 3,
			},
		},
	}

	return (
		<main className=' max-w-[1440px] mx-auto'>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<motion.div
					className='app-page flex flex-col max-lg:w-screen'
					initial='hidden'
					animate='visible'
					variants={appVariants}
				>
					<Navigation />
					<ScrollToTop />
					<Routes>
						<Route exact path='/' element={<Home />} />

						<Route path='/projects' element={<Projects />} />
						<Route path='/team' element={<Team />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<Footer />
				</motion.div>
			)}
		</main>
	)
}

export default App

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const LoadingScreen = () => {
	const string = "Home Design ..."
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 100)

		return () => {
			clearInterval(timer)
		}
	}, [])

	return (
		<div className='loading-root w-full h-screen flex justify-center items-center'>
			<h1
				className='loading-text'
				style={{
					color: "#000000",
					fontSize: "90px",
					backgroundColor: "#ffffff",
					padding: "10px",
				}}
			>
				{string.split("").map((char, idx) => (
					<motion.span
						key={char + "-" + idx}
						initial={{ x: "-100vw", opacity: 0 }}
						animate={idx < counter ? { x: 0, opacity: 1 } : {}}
						transition={{ type: "spring", damping: 16, stiffness: 200 }}
					>
						{char}
					</motion.span>
				))}
			</h1>
		</div>
	)
}

export default LoadingScreen

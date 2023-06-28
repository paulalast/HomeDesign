import React, { useEffect } from "react"
import gsap from "gsap"

const Offers = () => {
	useEffect(() => {
		gsap.fromTo(".boxy", { x: -2000 }, { x: 0, duration: 1.5 })

		gsap.fromTo(".texty", { y: -2000 }, { y: 0, duration: 1.5, delay: 1 })
		gsap.fromTo(".texty2", { y: -2000 }, { y: 0, duration: 1.5, delay: 1.5 })
	}, [])

	return (
		<div className='flex relative w-full justify-center my-12 hover:scale-105 duration-500 max-md:scale-80 max-md:h-screen p-4 '>
			<img
				src='./interior2.jpg'
				className='boxy green block  w-8/12 object-cover rounded-[30px] shadow-md'
			/>
			<h1 className='texty absolute p-2 top-[40%] bg-white/90 w-full text-6xl max-md:text-2xl'>
				Offers
			</h1>
			<h3 className='texty2 absolute p-4 top-[60%] bg-white/90 rounded-[20px] text-4xl max-md:text-lg max-md:p-1'>Comming soon...</h3>
		</div>
	)
}

export default Offers

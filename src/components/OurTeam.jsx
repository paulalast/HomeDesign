import React from "react"
import Button from "./Button"
import { motion } from "framer-motion"

const OurTeam = () => {
	const variants = {
		hidden: { opacity: 0, x: "90vw" },
		visible: { opacity: 1, x: 0 },
	}
	return (
		<section
			className='flex max-md:flex-col justify-between align-self-center mx-1 my-2  p-6 
        '
		>
			<div className='flex flex-col items-start m-2 '>
				<h3 className='text-left'>
					Our <span className='bg-orange-700 px-2'>Team</span>
				</h3>
				<p className='w-10/12 px-4 max-lg:w-full max-lg:px-0 '>
					Our team is composed of passionate and dedicated design professionals
					who strive to transform spaces into functional, beautiful homes.
				</p>
				<p className='w-10/12 px-4 max-lg:w-full max-lg:px-0'>
					With a diverse set of skills and an innovative approach, we work
					closely with our clients to bring their vision to life. Our goal is to
					create a space that not only meets but exceeds expectations, providing
					comfort and joy for years to come.
				</p>

				<Button to='/team' text='Meet Us' />
			</div>
			<div className='w-full rounded-md overflow-hidden m-0.5 p-0 shadow-md'>
				<img
					src='./team.jpg'
					className='duration-300 ease-in-out hover:scale-105 object-cover w-full h-full max-md:hidden rounded-sm'
					alt='team at the office'
				/>
			</div>
			<motion.img
				src='./team.jpg'
				alt='team'
				className='hidden max-md:block m-0 p-0 rounded-md w-full h-full object-cover'
				variants={variants}
				initial='hidden'
				animate='visible'
				transition={{ type: "spring", stiffness: 60 }}
			/>
		</section>
	)
}

export default OurTeam

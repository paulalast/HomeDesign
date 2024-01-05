import React, { useCallback } from "react"
import { motion } from "framer-motion"

const arrowVariant = {
	initial: { rotate: 0 },
	animate: {
		rotate: 40,
		transition: { duration: 0.3, ease: "easeInOut" },
	},
	exit: {
		rotate: 0,
		transition: { duration: 0.3, ease: "easeInOut" },
	},
}
function TeamMember({
	memberName,
	memberPosition,
	memberImg,
	memberAlt,
	memberAbout,
	memberContact,
	index,
}) {
	const handleClick = useCallback(
		e => {
			e.preventDefault()
			window.location.href = `mailto:${memberContact}`
		},
		[memberContact]
	)

	return (
		<div
			className={`teambox team-member flex-grow flex m-6 max-2xl:flex-col max-2xl:items-center my-40 max-lg:my-10 ${
				index % 2 === 0
					? "flex-row lg:flex-row-reverse"
					: "flex-row-reverse lg:flex-row"
			}`}
		>
			<div className='w-96 h-96 max-lg:w-64 max-lg:h-64 m-auto md:m-0 flex-none overflow-hidden'>
				<div className='image-container transform transition-transform duration-[1500ms] hover:scale-125'>
					<img
						className='w-full h-full object-cover object-top'
						src={memberImg}
						alt={memberAlt}
					/>
				</div>
			</div>
			<div className='team-member flex-grow flex-col m-4 py-2 px-10 max-lg:p-1'>
				<h2>{memberName}</h2>
				<h4>{memberPosition}</h4>
				<p>{memberAbout}</p>
				<motion.a
					href={`mailto:${memberContact}`}
					onClick={handleClick}
					className=' flex flex-row  items-center justify-center py-2 text-sm'
					initial='initial'
					whileHover='animate'
				>
					<motion.img
						className='arrow-icon w-8 p-1 mr-2 object-fit '
						src='send.png'
						alt='send icon'
						variants={arrowVariant}
					/>
					{memberContact}
				</motion.a>
				<hr className='hidden max-lg:block border-orange-700/30 mt-4' />
			</div>
		</div>
	)
}

export default TeamMember

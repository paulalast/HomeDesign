import React, { useCallback } from "react"

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
				<div className='image-container transform transition-transform duration-300 hover:scale-125'>
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
			
					<a href={`mailto:${memberContact}`} onClick={handleClick}>
						{memberContact}
					</a>
				
			</div>
		</div>
	)
}

export default TeamMember

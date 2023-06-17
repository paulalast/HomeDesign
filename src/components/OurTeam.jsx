import React from "react"
import { Link } from "react-router-dom"
const OurTeam = () => {
	return (
		<section
			className='flex max-md:flex-col justify-between align-self-center mx-1 my-2  p-6 my-12
        '
		>
			<div className='flex flex-col items-start m-2 '>
				<h3 className='text-left'>
					Our <span className='bg-orange-700 px-2'>Team</span>
				</h3>
				<p className='w-11/12 px-2 '>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt.
					Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
				</p>
				<button className='mt-20 ml-2 py-2 px-4 duration-300 hover:bg-slate-300 w-1/3 align-self-center underline'>
					<Link to='/team'>Meet Our Team →</Link>
				</button>
			</div>
			<div>
				<img
					src='/team.jpg'
					className='duration-300 ease-in-out hover:scale-105 '
					width={500}
					height={500}
					alt='team at the office'
				/>
			</div>
		</section>
	)
}

export default OurTeam

import React from "react"

import { Link } from "react-router-dom"

function Navigation() {
	return (
		<nav className='flex items-center justify-between px-4 py-2'>
			<div className='p-2 px-4'>
				<img
					src='/logo.png'
					width={50}
					alt='logo'
					className='bg-white rounded-full'
				/>
			</div>
			<ul className='flex flex-row justify-end space-x-2'>
				<li className='p-2'>
					<Link to='/'>Home</Link>
				</li>
				<li className='p-2'>
					<Link to='/offers'>Offers</Link>
				</li>
				<li className='p-2'>
					<Link to='/projects'>Projects</Link>
				</li>
				<li className='p-2'>
					<Link to='/team'>Team</Link>
				</li>
				<li className='p-2'>
					<Link to='/services'>Services</Link>
				</li>
				<li className='p-2'>
					<Link to='/contact'>Contact</Link>
				</li>
				<li className='p-2'>
					<img src='/facebook.png' width={24} alt='fb' />
				</li>
				<li className='p-2'>
					<img src='/instagram.png' width={24} alt='ig' />
				</li>
			</ul>
		</nav>
	)
}

export default Navigation

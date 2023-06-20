import React from "react"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import MobileNavigation from "./MobileNavigation"

const Navigation = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 760px)" })

	return (
		<nav className='flex items-center justify-between px-4 py-2'>
			<div className='p-2 px-4'>
				<img
					src='./logo.png'
					width={50}
					alt='logo'
					className='bg-white rounded-full'
				/>
			</div>
			{isMobile ? (
				<MobileNavigation />
			) : (
				<ul className='flex flex-row  justify-end space-x-4 '>
					<li >
						<Link to='/'>Home</Link>
					</li>
					<li >
						<Link to='/offers'>Offers</Link>
					</li>
					<li >
						<Link to='/projects'>Projects</Link>
					</li>
					<li >
						<Link to='/team'>Team</Link>
					</li>
					<li >
						<Link to='/contact'>Contact</Link>
					</li>
					<li className='p-1 rounded-full max-lg:hidden'>
						<a href=''>
							<img src='./facebook.png' width={24} alt='fb' />
						</a>
					</li>
					<li className='p-1 rounded-full max-lg:hidden'>
						<a href=''>
							<img src='./instagram.png' width={24} alt='ig' />
						</a>
					</li>
				</ul>
			)}
		</nav>
	)
}

export default Navigation

import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./MobileNavigation.css"

const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<button onClick={toggleMenu} className='menu-button'>
				<img src='./menu.png' width={24} alt='menu icon' />
			</button>
			{isOpen && (
				<div className='mobile-nav open'>
					<ul className='mobile-menu'>
						<li>
							<Link to='/' onClick={toggleMenu}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/offers' onClick={toggleMenu}>
								Offers
							</Link>
						</li>
						<li>
							<Link to='/projects' onClick={toggleMenu}>
								Projects
							</Link>
						</li>
						<li>
							<Link to='/team' onClick={toggleMenu}>
								Team
							</Link>
						</li>
						<li>
							<Link to='/contact' onClick={toggleMenu}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	)
}

export default MobileNavigation

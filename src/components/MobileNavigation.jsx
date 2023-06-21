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
			<div className='nav-panel'>
				<button className='logo-button'>
					<Link to='/'>
						<img  className='nav-logo' src='./logo.png' alt='logo' />
					</Link>
				</button>
				
				<button onClick={toggleMenu} className='menu-button'>
					<img className='menu-icon'  src='./menu.png' alt='menu icon' />
				</button>
			</div>
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

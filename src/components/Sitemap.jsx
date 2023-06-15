import React from "react"
import { Link } from "react-router-dom"
const Sitemap = () => {
   
	return (
		<div className='flex flex-row justify-evenly items-center py-8 px-2 mt-12'>
			<h4 className='w-fit h-fit m-2'>Home Design</h4>
			<hr className="w-2 h-20 bg-orange-800 border-none"/>
			<div className=' w-7/12 grid grid-rows-2 text-left grid-cols-3 gap-0 text-base'>
				<Link className=' p-2' to='/team'>
					Team
				</Link>
				<Link className='p-2' to='/offers'>
					Offers
				</Link>
				<Link className='p-2 ' to='/projects'>
					Projects
				</Link>
				<Link className='p-2' to='/services'>
					Services
				</Link>
				<Link className='p-2' to='/contact'>
					Contact
				</Link>
			</div>
		</div>
	)
}

export default Sitemap

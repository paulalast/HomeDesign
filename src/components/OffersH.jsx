import React from "react"
import "../index.css"
import { Link } from "react-router-dom"

const OffersH = () => {
	return (
		<section className='flex flex-col relative justify-center'>
			<h3>Offers</h3>
			<div className='flex flex-row justify-center'>
				<button className='w-30 rounded-none  border border-slate-500 transition ease-in-out duration-300 hover:bg-green-800 px-8 py-2 m-4'>
					<Link to='/offers'>Offers</Link>
				</button>
				<button className='w-30 rounded-none border  border-slate-500 transition ease-in-out duration-300 hover:bg-green-800  px-8 py-2 m-4'>
					<Link to='/projects'>Projects</Link>
				</button>
			</div>
			<div className='gallery-container'>
				<div className='image-container div1'>
					<img src='./interior3.jpg' alt='s' className='gallery-image ' />
				</div>
				<div className='image-container div2'>
					<img src='./interior5.jpg' alt='s' className='gallery-image ' />
				</div>
				<div className='image-container div3'>
					<img src='./interior4.jpg' alt='s' className='gallery-image ' />
				</div>
				<div className='image-container div4'>
					<img src='./interior6.jpg' alt='s' className='gallery-image ' />
				</div>
			</div>
		</section>
	)
}

export default OffersH

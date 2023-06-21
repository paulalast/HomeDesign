import React from "react"

function Header() {
	return (
		<header className=' flex relative justify-end'>
			<img
				src='./header.jpeg'
				className='w-9/12 max-lg:w-full p-4 max-lg:p-0 max-lg:mt-10'
				alt='modern living room'
			/>
			<div className=' darkMode absolute left-24 top-56 p-4 bg-white/80 max-lg:left-50 max-lg:top-50 max-lg:left-1/2 max-lg:top-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2'>
				<h1 className='px-8'>HomeDesign</h1>
				<h2 className='p-2'>
					Unleash Your Creativity
					<span className='block'>and Redefine Your Living Space</span>
				</h2>
			</div>
		</header>
	)
}

export default Header

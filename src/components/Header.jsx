import React from "react"

function Header() {
	return (
		<div className='flex relative justify-end'>
			<img
				src='/header.jpeg'
				className='w-9/12 max-lg:w-full p-4 '
				alt='modern living room'
			/>
			<div className='absolute left-24 top-56 p-4 bg-white/80 max-lg:left-50 max-lg:top-50 max-lg:left-1/2 max-lg:top-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:-translate-y-1/2'>
				<h1 className='px-8'>Home Design</h1>
				<h2 className='p-2'>
					Unleash Your Creativity
					<span className='block'>and Redefine Your Living Space</span>
				</h2>
			</div>
		</div>
	)
}

export default Header

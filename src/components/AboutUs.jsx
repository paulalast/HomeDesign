import React from "react"
import "./../index.css"

const AboutUs = () => {
	return (
		<div className='image-with-border flex flex-col relative  my-20 w-full md:w-3/4 mb-32'>
			<div className="image-with-border p-10 relative -z-10 min-lg:w-11/12 w-full max-md:hidden ">
				<img
					src='interior2.jpg'
					alt='interior orange'
					className='w-full '
				/>
			</div>
			<div className='absolute bg-orange-700 text-white p-8 w-fit h-fit xl:w-6/12  lg:w-7/12 md:w-72  bottom-0 right-0 md:bottom-[-5%]  md:right-[-25%] max-md:bg-orange-700/70 max-md:hidden '>
				<h3 className='text-4xl'>Lorem ipsum dolor sit.</h3>
				<p className='max-md:hidden 2xl:text-lg'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, velit?
					Lorem ipsum dolor sit amet consectetur.
				</p>
				<p className='2xl:text-lg max-md:hidden'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, velit?
					Lorem ipsum dolor sit amet consectetur.
				</p>
			</div>
		</div>
	)
}

export default AboutUs

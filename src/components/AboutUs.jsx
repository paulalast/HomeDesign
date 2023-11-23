import React from "react"
import "./../index.css"
import AboutUsText from "./AboutUsText"

const AboutUs = () => {
	return (
		<section className=''>
			<div className=' image-with-border max-lg:hidden flex flex-col relative  my-20 w-full md:w-3/4 mb-32 hover:scale-105 ease-in-out duration-1000'>
				<div className='image-with-border p-10 relative -z-10 min-lg:w-11/12 w-full '>
					<img
						src='./interior2.jpg'
						alt='interior orange'
						className='w-full '
					/>
				</div>
				<div className='absolute bg-orange-700 text-black p-8 h-fit w-6/12 xl:w-6/12  lg:w-8/12  bottom-0 right-0 md:bottom-[-5%]  md:right-[-28%] max-md:bg-orange-700/70 max-md:hidden mx-auto '>
					<h3 className='text-4xl'>About Us</h3>
					<p
						className='max-md:hidden 2xl:text-lg max-w-prose 
					'
					>
						Welcome to HomeDesign, your destination for exceptional home design.
						Our talented team specializes in creating captivating interiors that
						reflect your unique style. From concept to execution, we pay
						meticulous attention to detail, ensuring visually stunning and
						highly functional spaces. With a commitment to quality and customer
						satisfaction, we strive to exceed your expectations.
					</p>
					<p className='2xl:text-lg max-md:hidden max-w-prose'>
						Trust HomeDesign to elevate your space with exquisite design.
					</p>
				</div>
			</div>
			<AboutUsText />
		</section>
	)
}

export default AboutUs

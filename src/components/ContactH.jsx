import React from "react"

import Form from "./Form"

const ContactH = () => {
	return (
		<section className='flex flex-col  mt-10 w-9/12  justify-center items-center mx-auto max-md:w-11/12'>
			<h3 className='mb-6'>
				<span className=' px-2  bg-orange-700	'>Contact</span> Us
			</h3>
			<div className='flex flex-row relative justify-center items-center w-full'>
				<img
					src='./contact.jpeg'
					className='h-full w-1/3 opacity-80 max-md:hidden hover:scale-105 hover:opacity-100  duration-1000'
					alt='beige interior minimal'
				/>
				<Form />
			</div>
		</section>
	)
}

export default ContactH

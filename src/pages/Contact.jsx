import React from "react"
import Form from "../components/Form"

const Contact = () => {
	return (
		<div className='flex flex-col mt-10 w-9/12 justify-center items-center mx-auto max-md:w-11/12'>
			<h3 className='mb-6'>
				<span className='px-2 bg-orange-700'>Contact</span> Us
			</h3>
			<p className='p-8 m-2 w-1/2 max-md:w-full'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit est
				deleniti repellendus, veritatis sint, molestias mollitia sunt aperiam,
				vel quas nemo soluta odit praesentium ipsum!
			</p>
			<div className='flex flex-row relative justify-center items-center w-full'>
				<img
					src='./contact.jpeg'
					className='h-full w-1/3 max-md:hidden'
					alt='beige interior minimal'
				/>
				<Form />
			</div>
		</div>
	)
}

export default Contact

import React from "react"
import Form from "../components/Form"
import ContactInfo from "./ContactInfo"

const Contact = () => {
	return (
		<div className='flex flex-col mt-10 w-9/12 justify-center items-center mx-auto max-md:w-11/12'>
			<h3 className='mb-6'>
				<span className='px-2 bg-orange-700'>Contact</span> Us
			</h3>
			<p className=' m-2 w-1/2 max-md:w-full'>
				We value your feedback and are eager to hear from you. Whether you have
				a question, a project inquiry, or simply want to say hello, we're here
				to assist you. Our dedicated team is ready to provide you with the
				information you need and help you take the next steps towards your
				interior design goals.
			</p>
			<p className=' m-2 w-1/2 max-md:w-full'>
				Feel free to reach out to us using the contact details provided below.
				We strive to respond promptly and look forward to the opportunity to
				connect with you. Let's start creating your dream space together!
			</p>
			<p className=' m-2 w-1/2 max-md:w-full'>
				Let's start creating your dream space together!
			</p>

			<div className='flex my-24 p-2 flex-row h-fit w-full relative justify-center items-start w-full max-lg:flex-col  max-lg:my-12 '>
				<ContactInfo />
				<Form />
			</div>
		</div>
	)
}

export default Contact

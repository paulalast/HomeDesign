import React from "react"

const ContactInfo = () => {
	function ContactBox({ text, url, alt }) {
		return (
			<div
				className='flex w-full  content-start items-center self-start
            h-16 '
			>
				<img
					className='mx-2 w-1/5 h-full object-contain p-5 max-md:w-1/7'
					src={url}
					alt={alt}
				/>
				<p className='w-full'>{text}</p>
			</div>
		)
	}
	return (
		<div className='flex flex-col w-full h-full justify-center mt-5 max-md:flex-wrap '>
			<ContactBox
				url='./location.png'
				alt='location icon'
				text='New York Office'
			/>
			<ContactBox url='./phone.png' alt='phone icon' text='+(78) 2536746' />

			<ContactBox
				url='./email.png'
				alt='mail icon'
				text='office@homedesign.com'
			/>
			<div className='flex h-1/3 w-11/12 place-self-center m-4 overflow-hidden shadow-xl max-md:hidden'>
				<img
					src='./contact.jpg'
					alt=''
					className='object-cover w-full h-full opacity-80 hover:scale-125 duration-1000 '
				/>
			</div>
		</div>
	)
}

export default ContactInfo

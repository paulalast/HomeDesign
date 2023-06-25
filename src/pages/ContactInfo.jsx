import React from "react"

const ContactInfo = () => {
	return (
		<div className='flex w-3/5 m-5 relative justify-evenly'>
			<div className='flex'>
				<img classNam='mx-2 object-fill' src='./phone.png' alt='phone' />
				<p>+(78)2637747</p>
			</div>
			<div className='flex'>
				<img className='mx-2' src='./location.png' alt='location' />
				<p>New York</p>
				<p>Lane Street 45</p>
			</div>
			<div className='flex'>
				<img className='mx-2' src='./email.png' alt='email' />
				<p>office@homedesign.com</p>
			</div>
		</div>
	)
}

export default ContactInfo

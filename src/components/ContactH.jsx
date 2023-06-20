import React from "react"

const ContactH = () => {
	return (
		<section className='flex flex-col  mt-10 w-9/12  justify-center items-center mx-auto max-md:w-11/12'>
			<h3 className='mb-6'>
				<span className=' px-2  bg-orange-700	'>Contact</span> Us
			</h3>
			<div className='flex flex-row relative justify-center items-center w-full'>
				<img
					src='./contact.jpeg'
					className='h-full w-1/3 max-md:hidden'
					alt='beige interior minimal'
				/>
				<form
					className='flex flex-col w-1/2 items-center ml-14 max-md:ml-0 max-md:w-full'
					action=''
				>
					<label htmlFor='email'></label>
					<input
						type='text'
						name='name'
						placeholder='Name:'
						className='border shadow border-slate-400 w-full p-4 my-4'
					/>
					<input
						type='email'
						placeholder='Email:'
						className='border shadow border-slate-400 w-full p-4'
					/>
					<label htmlFor='msg'></label>
					<textarea
						type='text'
						placeholder='Message:'
						className='h-60 w-full shadow border my-4 p-4 border-slate-400'
					/>
				<div className='main-button-container'>
						<button className='btn main-button'>
							<span className='btn-span'> Send</span>
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactH

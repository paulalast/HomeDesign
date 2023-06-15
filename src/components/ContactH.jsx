import React from "react"

const ContactH = () => {
	return (
		<div className='mt-10'>
			<h3 className="mb-6">
				<span className=' px-2  bg-orange-700	'>Contact</span> Us
			</h3>
			<div className='flex flex-col justify-center items-center'>
				<form className='flex flex-col w-1/3 items-center' action=''>
					<label htmlFor='email'></label>
					<input placeholder='Email:' className='border border-slate-400 w-full p-2' type='email' />
					<label htmlFor='msg'></label>
					<textarea
						placeholder='Message:'
						className='h-40 w-full border my-2 p-2 border-slate-400'
						type='text'
					/>
					<button className='w-1/3 rounded-none border flex items-center justify-center border-slate-500 transition ease-in-out duration-300 hover:bg-green-800 px-8 py-2 m-4'>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactH

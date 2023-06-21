import React from "react"

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
				<form
					className='flex flex-col w-1/2 items-center ml-14 max-md:ml-0 max-md:w-full'
					action=''
				>
					<label htmlFor='name'></label>
					<input
						type='text'
						name='name'
						placeholder='Name'
						className='border shadow border-slate-400 w-full p-4 my-4'
					/>
					<label htmlFor='email'></label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						className='border shadow border-slate-400 w-full p-4'
					/>
					<label htmlFor='message'></label>
					<textarea
						name='message'
						placeholder='Message'
						className='h-60 w-full shadow border my-4 p-4 border-slate-400'
					></textarea>
					<div className='main-button-container'>
						<button className='btn main-button'>
							<span className='btn-span'> Send</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact

{
	/* <button className="main-button w-1/3 rounded-none border flex items-center justify-center border-slate-500 transition ease-in-out duration-300 hover:bg-green-800 px-8 py-2 m-4 btn-two"> */
}

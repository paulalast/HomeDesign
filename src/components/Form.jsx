import React, { useState } from "react"
import Button from "./Button"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Form = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [errors, setErrors] = useState({})

	function handleSubmit(e) {
		e.preventDefault()
		const validationErrors = {}
		if (!name) {
			validationErrors.name = "Please enter your name"
		}

		if (!email) {
			validationErrors.email = "Please enter your email"
		} else if (!isValidEmail(email)) {
			validationErrors.email = "Please enter a valid email"
		}

		if (!message) {
			validationErrors.message = "Please enter your message"
		} else if (message.length < 5) {
			validationErrors.message = "Message is too short..."
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors)
			return
		}
		function isValidEmail(email) {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(email)
		}

		const formData = {
			username: name,
			email: email,
			message: message,
		}
		console.log(formData)
		setName("")
		setEmail("")
		setMessage("")
		setErrors({})
		toast.success("Message sent successfully!")
	}

	return (
		<form
			className='flex flex-col w-full items-center ml-14 max-md:ml-0 max-md:w-full'
			action=''
			method='post'
			onSubmit={handleSubmit}
		>
			<label htmlFor='name'></label>
			<input
				id='name'
				name='name'
				type='text'
				placeholder='Name:'
				className='border shadow border-slate-400 w-full p-4 my-4'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			{errors.name && <span className='text-orange-700 '>{errors.name}</span>}
			<input
				id='email'
				name='email'
				type='email'
				placeholder='Email:'
				className='border shadow border-slate-400 w-full p-4'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<label htmlFor='message'></label>
			{errors.email && <span className='text-orange-700'>{errors.email}</span>}
			<textarea
				id='message'
				name='message'
				type='text'
				placeholder='Message:'
				className='h-60 w-full shadow border my-4 p-4 border-slate-400'
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			{errors.message && (
				<span className='text-orange-700'>{errors.message}</span>
			)}
			<p className='text-xs py-2 px-0.5 '>
				By submitting the contact form, you acknowledge and consent to the
				processing of your personal information for the purpose of addressing
				your inquiry or request. We assure you that your data will be handled in
				compliance with applicable privacy laws and our stated privacy policy.
			</p>
			<Button onClick={handleSubmit} type='submit' text='SEND' />
			<ToastContainer position='top-right' autoClose={3000} />
		</form>
	)
}

export default Form

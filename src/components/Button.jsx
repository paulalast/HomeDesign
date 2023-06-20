import React from "react"
import { Link } from "react-router-dom"

const Button = ({ text, to, type = "link", className, onClick }) => {
	if (type === "link") {
		return (
			<div className={`main-button-container ${className}`}>
				<Link to={to} className='btn main-button'>
					<span className='btn-span'> {text}</span>
				</Link>
			</div>
		)
	} else if (type === "submit") {
		return (
			<div className={`main-button-container ${className}`}>
				<button className='btn main-button' type='submit' onClick={onClick}>
					<span className='btn-span'> {text}</span>
				</button>
			</div>
		)
	}
}

export default Button

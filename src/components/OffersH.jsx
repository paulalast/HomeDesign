import React from "react"
import "../index.css"

import Button from "./Button"
const ImageContainer = ({ src, alt, num }) => {
	return (
		<div className={`image-container div${num}`}>
			<img src={src} alt={alt} className='gallery-image' />
		</div>
	)
}

const OffersH = () => {
	return (
		<section className='flex flex-col relative justify-center'>
			<h3>Offers</h3>
			<div className='flex flex-row max-md:flex-wrap justify-center'>
				<Button to='/offers' text='Offers' />
				<Button to='/projects' text='Projects' />
			</div>
			<div className='gallery-container'>
				<ImageContainer src={"./interior2.jpg"} alt={"interior"} num={1} />
				<ImageContainer src={"./interior3.jpg"} alt={"interior"} num={2} />
				<ImageContainer src={"./interior4.jpg"} alt={"interior"} num={3} />
				<ImageContainer src={"./interior6.jpg"} alt={"interior"} num={4} />
			</div>
		</section>
	)
}

export default OffersH

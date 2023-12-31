import React from "react"
const Card = ({ title, content }) => (
	<div
		className=' darkMode flex-wrap p-6 bg-white  shadow-lg rounded-lg  w-full my-4 mx-8 max-lg:mx-0 hover:scale-105 duration-300'
	>
		<h4 className='font-bold mb-6'>{title}</h4>
		<p className='text-center text-sm'>{content}</p>
	</div>
)
const AboutUsText = () => {
	return (
		<section className=' flex flex-col m-2 mt-0 '>
			<h3 className='my-2'>
				Why we should be your
				<span className='bg-orange-700'> first choice ?</span>
			</h3>
			<div className='flex my-14  max-lg:flex-wrap mx-0 max-lg:my-2'>
				<Card
					title='Unmatched Experience'
					content='We bring years of industry experience to ensure the best results for your projects. We bring years of industry experience to ensure the best results for your projects.'
				/>
				<Card
					title='Commitment to Excellence'
					content=' We are committed to delivering excellence in everything we do. We are committed to delivering excellence in everything we do.'
				/>
				<Card
					title='Expert Team'
					content='Our team is composed of industry experts with years of experience. Our team is composed of industry experts with years of experience.'
				/>
			</div>
		</section>
	)
}

export default AboutUsText

import React from "react"
function Card({ name, text, img, alt }) {
	return (
		<div className='border-2 m-4 mb-8 p-6 max-lg:mb-6 max-lg:m-0 flex flex-col items-end'>
			<p className='mb-auto'>{text}</p>
			<div className='flex flex-row items-flex-end mt-6 w-7/12 '>
				<div className='flex w-1/2 rounded-full  p-0.5 mx-2'>
					<div className='w-14 h-14 '>
						<img
							className='flex shadow-md rounded-full w-full h-full object-cover object-top hover:scale-125 duration-300'
							src={img}
							alt={alt}
						/>
					</div>
				</div>
				<p className='text-sm font-bold w-1/2'>{name}</p>
			</div>
		</div>
	)
}

function Opinions() {
	return (
		<section className='flex flex-row-reverse max-md:flex-col justify-around mt-32'>
			<div>
				<h3 className=' flex flex-col w-4/5 justify-center items-center whitespace-wrap max-lg:w-full '>
					Words from our
					<span className=' px-5 bg-orange-700/90 whitespace-wrap'>
						valued clients
					</span>
				</h3>
				<p className='w-1/2 my-6 max-lg:w-9/12'>
					<span className='ml-[-8%]'>→</span> Discover the thoughts and opinions
					shared by our valued clients. Their encouraging words mirror our
					dedication and zeal towards every project we undertake. Read on to
					understand why we remain the preferred choice for so many.
				</p>
			</div>
			<div className='flex flex-col w-full max-md:w-full'>
				<Card
					img='./client1.jpg'
					name={`Andrew`}
					text={`My experience with the team was nothing short of amazing. From the initial consultation to the final walkthrough, their expertise in home design was apparent. They captured our vision and executed it perfectly, transforming our living space into something we love. I couldn't recommend them more!`}
				/>
				<Card
					img='./client2.jpg'
					name={`Kate`}
					text={`Their innovative and thoughtful approach to interior design is truly impressive. Not only did they maximize the potential of our space, but they also managed to infuse our personal style into every detail. The end result is a functional, beautiful space that feels uniquely ours. They are real professionals, and their passion for what they do shines through in their work.`}
				/>
			</div>
		</section>
	)
}

export default Opinions

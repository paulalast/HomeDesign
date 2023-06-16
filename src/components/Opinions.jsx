import React from "react"
function Card({ name, text }) {
	return (
		<div className='border-2 m-4 mb-8 p-6 '>
			<p>{text}</p>
			<p className='bold text-right text-500'>{name}</p>
		</div>
	)
}

function Opinions() {
	return (
		<div className='flex flex-row-reverse max-md:flex-col justify-around mt-32'>
			<div>
				<h3 className=' flex flex-col w-3/5 justify-center items-center whitespace-wrap '>
					Words from our
					<span className=' px-5 bg-orange-700/90 whitespace-wrap'> valued clients </span>
				</h3>
				<p className="w-1/2 mt-6">
					<span className="ml-[-8%]">→</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga
					eligendi veniam explicabo dolorem eius eos soluta excepturi, culpa
					perspiciatis?
				</p>
           
			</div>
			<div className='flex flex-col  w-4/5'>
				<Card
					name={`Andrew`}
					text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur totam amet recusandae repudiandae iste pariatur. Aperiam quas neque at.`}
				/>
				<Card
					name={`Kate`}
					text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur totam amet recusandae repudiandae iste pariatur. Aperiam quas neque at.Quia consectetur totam amet recusandae repudiandae iste pariatur. Aperiam quas neque at.`}
				/>
			</div>
		</div>
	)
}

export default Opinions

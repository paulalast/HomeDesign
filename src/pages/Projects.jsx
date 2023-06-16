import React from "react"
import projectsData from './../projectsData'

const GridProjects = ({ interiorCategory, images }) => {
	return (
		<div className='m-4'>
			<h4>{interiorCategory}</h4>
			<div className='flex flex-wrap justify-center gap-4 mt-8'>
				{images.map((image, index) => (
					<div
						key={index}
						className='flex flex-shrink-0 items-center justify-center h-64 overflow-hidden'
						style={{
							flexBasis: image.orientation === "landscape" ? "45%" : "22%",
						}}
					>
						<img
							src={image.src}
							alt={`Project ${index + 1}`}
							className='w-full h-full object-cover transform transition-all duration-500 hover:scale-125'
						/>
					</div>
				))}
			</div>
		</div>
	)
}

const Projects = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='mt-10'>Projects</h1>
			<h2 className='mt-4 text-lg font-semibold text-gray-600'>
				Explore our stunning projects
			</h2>
			<div>
				<GridProjects interiorCategory={"Kitchen"} images={projectsData.kitchen} />
				<GridProjects interiorCategory={"Living Room"} images={projectsData.livingRoom} />
				<GridProjects interiorCategory={"Bathroom"} images={projectsData.bathroom} />
				<GridProjects interiorCategory={"Bedroom"} images={projectsData.bedroom} />
				<GridProjects interiorCategory={"Kids room"} images={projectsData.kidsRoom} />
			</div>
		</div>
	)
}

export default Projects
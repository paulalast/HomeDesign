import React from "react"



const GridProjects = ({ category, images, setSelectedImg }) => {
	return (
		<div className='m-4'>
			<h4>{category}</h4>
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
							className='w-full h-full object-cover transform transition-all duration-500 hover:scale-125 cursor-pointer'
							onClick={() => setSelectedImg(image.src)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default GridProjects

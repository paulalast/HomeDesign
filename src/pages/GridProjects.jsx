import React, { useState } from "react"

const GridProjects = ({ category, images }) => {
	const [selectedImage, setSelectedImage] = useState(null)

	const openImage = imageSrc => {
		setSelectedImage(imageSrc)
		document.body.classList.add("overflow-hidden")
	}

	const closeImage = () => {
		setSelectedImage(null)
		document.body.classList.remove("overflow-hidden")
	}

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
							onClick={() => openImage(image.src)}
						/>
					</div>
				))}
			</div>
			{selectedImage && (
				<div
					className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-80'
					onClick={closeImage}
				>
					<img
						className='max-h-[80vh] max-w-[90vw] object-contain'
						src={selectedImage}
						alt='Full Image'
					/>
				</div>
			)}
		</div>
	)
}

export default GridProjects

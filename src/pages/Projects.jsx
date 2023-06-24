import React, { useState } from "react"
import projectsData from "./../projectsData"

const GridProjects = ({ category, images }) => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })

	const openImage = (imageSrc, position) => {
		setSelectedImage(imageSrc)
		setModalPosition(position)
		document.body.classList.add("modal-open")
		// document.window.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
	}

	const closeImage = () => {
		setSelectedImage(null)
		document.body.classList.remove("modal-open")
	}

	return (
		<div className='m-4 '>
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
							onClick={e =>
								openImage(image.src, {
									top: e.target.offsetTop,
									left: e.target.offsetLeft,
								})
							}
						/>
					</div>
				))}
			</div>
			{selectedImage && (
				<div
					className='full-image absolute z-500 w-full h-full bg-black/80'
					style={{
						top: `${window.innerHeight / 2}px`,
						left: "50%",
						transform: "translate(-50%, -50%)",
						position: "fixed",
						overflowX: "hidden",
					}}
				>
					<span className='close text-2xl cursor-pointer text-white' onClick={closeImage}>
						&times;
					</span>
					<img
						className='full-content '
						src={selectedImage}
						alt='Full Image'
						style={{
							display:"flex",
							position:'absolute',
							alignSelf:"center",
							justifyItems:'center',
						
							background:'blue',
							right:"35%",
						
							maxWidth: "80vw",
							maxHeight: "90vh",
							zIndex: 500,
						}}
					/>
				</div>
			)}
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
				<GridProjects category={"Kitchen"} images={projectsData.kitchen} />
				<GridProjects
					category={"Living Room"}
					images={projectsData.livingRoom}
				/>
				<GridProjects category={"Bathroom"} images={projectsData.bathroom} />
				<GridProjects category={"Bedroom"} images={projectsData.bedroom} />
				<GridProjects category={"Kids Room"} images={projectsData.kidsRoom} />
			</div>
		</div>
	)
}

export default Projects

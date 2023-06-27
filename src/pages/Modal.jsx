import React from "react"

const Modal = ({ selectedImg, setSelectedImg }) => {
	const handleClick = e => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImg(null)
		}
	}

	return (
		<div
			className='backdrop'
			onClick={handleClick}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "rgba(0, 0, 0, 0.8)",
				zIndex: 10,
			}}
		>
			<img
				src={selectedImg}
				alt='enlarged pic'
				style={{
					maxWidth: "90%",
					maxHeight: "90%",
				}}
			/>
		</div>
	)
}
export default Modal

import React from "react"

function LoadingScreen() {
	return (
		<div className='loading-bg'>
			<h1 className="absolute bg-slate-200">HomeDesign</h1>
			<img src='/loading.jpg' className="opacity-50" alt='bg' />
		</div>
	)
}

export default LoadingScreen

import React from "react"

const Footer = () => {
	function getCurrentYear() {
		return new Date().getFullYear()
	}

	const SocialMedia = ({ src, alt }) => {
		return (
			<div className='flex'>
				<img
					className='w-16 p-4 hover:scale-125 duration-300 cursor-pointer'
					src={src}
					alt={alt}
				/>
			</div>
		)
	}

	return (
		<footer className='flex justify-center items-center mt-14 border-none border-top-2 opacity-60 hover:opacity-100 duration-300'>
			<div className='flex w-1/2 p-2 m-2 mb-0 justify-end items-center'>
				<p className='m-4 font-bold'>&copy; {getCurrentYear()} </p>
				<p className='m-4 font-bold'>HomeDesign</p>
			</div>
			<hr className='w-2 h-20 bg-orange-800 border-none' />
			<div className='icon-container flex w-1/2 h-full p-4 pb-0'>
				<SocialMedia src='./instagram.png' alt='instagram' />
				<SocialMedia src='./facebook.png' alt='facebook' />
				<SocialMedia src='./twitter.png' alt='twitter' />
				<SocialMedia src='./pinterest.png' alt='pinterest' />
			</div>
			<style>
				{`
          html, body, #root {
            height: 100%;
          }
          footer {
            flex-shrink: 0;
          }
        `}
			</style>
		</footer>
	)
}

export default Footer

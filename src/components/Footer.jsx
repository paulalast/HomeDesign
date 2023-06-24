import React from "react"

const Footer = () => {
	function getCurrentYear() {
		return new Date().getFullYear()
	}

	const SocialMedia = ({ src, alt }) => {
		return (
			<div className='flex w-full items-center justify-center  max-md:mx-4 max-md:mt-4 '>
				<img
					className=' w-16 p-4 max-lg:w-14  hover:scale-125 duration-300 cursor-pointer max-md:p-2.5 '
					src={src}
					alt={alt}
				/>
			</div>
		)
	}

	return (
		<footer className='flex flex-row justify-center items-center mt-14 border-top-2 opacity-60 hover:opacity-100 duration-300 max-md:flex-col max-md:items-center max-md:mb-8 max-md:flex-col-reverse'>
			<div className='flex  w-1/6 p-2 m-2 mb-0 justify-end items-center max-lg:text-sm'>
				<p className=' m-4 font-bold max-lg:text-sm max-md:m-0'>
					&copy;{getCurrentYear()}
				</p>
				<p className='m-4 max-lg:text-sm font-bold max-md:mx-1'>HomeDesign</p>
			</div>
			<hr className='w-2 h-10 max-md:h-10 bg-orange-800 border-none mx-4 max-md:w-full max-md:h-1 max-md:mx-0' />

			<div className='icon-container flex w-1/6 max-xl:w-1/2 mx-4 h-full  py-2 items-center max-md:w-full'>
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

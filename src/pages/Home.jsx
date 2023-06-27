import React, { useEffect } from "react"
import Header from "../components/Header"
import AboutUs from "./../components/AboutUs"
import OffersH from "./../components/OffersH"
import OurTeam from "./../components/OurTeam"
import Opinions from "./../components/Opinions"
import ContactH from "./../components/ContactH"

import gsap from "gsap"

const Home = () => {
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section")

			sections.forEach(section => {
				const rect = section.getBoundingClientRect()
				const isPartiallyVisible =
					rect.top <= window.innerHeight && rect.bottom >= 0

				if (isPartiallyVisible) {
					gsap.to(section, { opacity: 1, y: 0, duration: 0.5 })
				} else {
					gsap.to(section, { opacity: 0, y: 100, duration: 0.5 })
				}
			})
		}

		handleScroll() 

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<main>
			<Header />
			<section>
				<AboutUs />
			</section>
			<section>
				<OffersH />
			</section>
			<section className='section'>
				<OurTeam />
			</section>
			<section className='section'>
				<Opinions />
			</section>
			<section className='section'>
				<ContactH />
			</section>
		</main>
	)
}

export default Home

import React, { useEffect } from "react"
import Header from "./../components/Header"
import AboutUs from "./../components/AboutUs"
import OffersH from "./../components/OffersH"
import OurTeam from "./../components/OurTeam"
import Opinions from "./../components/Opinions"
import ContactH from "./../components/ContactH"
import Sitemap from "./../components/Sitemap"

const Home = () => {
	useEffect(() => {
		const sections = document.querySelectorAll("section")

		const handleScroll = () => {
			sections.forEach(section => {
				const rect = section.getBoundingClientRect()
				const isPartiallyVisible =
					rect.top <= window.innerHeight && rect.bottom >= 0

				if (isPartiallyVisible) {
					section.classList.add("visible", "fadeIn")
				} else {
					section.classList.remove("visible", "fadeIn")
				}
			})
		}

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
			<section className='section'>
				<Sitemap />
			</section>
		</main>
	)
}

export default Home

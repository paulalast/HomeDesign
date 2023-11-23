import React, { useEffect } from "react"
import TeamMember from "./TeamMember"
import teamMembersData from "./teamMembersData"
import gsap from "gsap"

const Team = () => {
	useEffect(() => {
		gsap.fromTo(".title", { x: -600 }, { x: 0, duration: 1.5, delay: 0 })
		gsap.fromTo(".text", { x: 1400 }, { x: 0, duration: 1.5, delay: 0.5 })
		gsap.fromTo(".teambox", { x: -1600 }, { x: 0, duration: 1.5, delay: 2 })
	}, [])
	return (
		<div className='w-full'>
			<div className='flex max-md:flex-col justify-between align-self-center mx-1 my-2 p-6'>
				<div className='flex flex-col items-start m-2'>
					<h3 className='text-left title'>
						Meet our<span className='bg-o px-2'>Team </span>
					</h3>

					<p className=' text p-4 w-1/2 max-lg:w-full max-lg:p-1'>
						<strong>HomeDesign</strong> is a premier destination for exceptional
						home design solutions. With a team of talented designers and
						architects, we specialize in creating captivating interiors that
						reflect each client's unique style. From concept to execution, we
						pay meticulous attention to detail, ensuring visually stunning and
						highly functional spaces. Our commitment to excellence and customer
						satisfaction sets us apart, and we bring years of industry
						experience and expertise to every project. Trust HomeDesign to
						transform your space into a place of inspiration and comfort with
						exquisite design tailored to your individual needs.
					</p>
				</div>
			</div>
			<div>
				{teamMembersData.map((member, index) => (
					<TeamMember
						key={index}
						index={index}
						memberName={member.memberName}
						memberPosition={member.memberPosition}
						memberImg={member.memberImg}
						memberAlt={member.memberAlt}
						memberAbout={member.memberAbout}
						memberContact={member.memberContact}
					/>
				))}
			</div>
		</div>
	)
}

export default Team

import React from "react"

function TeamMember({
	memberName,
	memberPosition,
	memberImg,
	memberAlt,
	memberAbout,
	memberContact,
	index,
}) {
	return (
		<div
			className={`flex m-6 max-2xl:flex-col max-2xl:items-center my-40 ${
				index % 2 === 0
					? "flex-row lg:flex-row-reverse"
					: "flex-row-reverse lg:flex-row"
			}`}
		>
			<div className='w-96 h-96 max-lg:w-64 max-lg:h-64 m-auto md:m-0 flex-none overflow-hidden'>
				<div className='image-container transform transition-transform duration-300 hover:scale-125'>
					<img
						className='w-full h-full object-cover object-top'
						src={memberImg}
						alt={memberAlt}
					/>
				</div>
			</div>
			<div className='flex flex-col m-4 py-2 px-10 flex-grow'>
				<h2>{memberName}</h2>
				<h4>{memberPosition}</h4>
				<p>{memberAbout}</p>
				<p>{memberContact}</p>
			</div>
		</div>
	)
}

const Team = () => {
	const teamMembers = [
		{
			memberName: "Kate Kat",
			memberPosition: "CEO",
			memberImg: "./member1.jpg",
			memberAlt: "Kate",
			memberAbout:
				"Kate Kat is our Chief Executive Officer (CEO) and one of the lead designers in the Home Design team. With a passion for beauty and interior design, Kate guides our company in achieving design excellence and delivering exceptional experiences for our clients. Her vision and ability to create personalized projects ensure that our designs are not only aesthetically pleasing but also functional and tailored to each client's individual needs. Kate is an inspiration to the entire team and consistently strives to create spaces that are truly breathtaking.",
			memberContact: "kate.kat@design.com",
		},
		{
			memberName: "Damon Salt",
			memberPosition: "Architect",
			memberImg: "./member4.jpg",
			memberAlt: "Damon",
			memberAbout:
				"Damon Salt is a talented architect at Home Design  known for his innovative designs and attention to detail. With a deep understanding of architectural principles, Damon creates captivating and functional spaces. His passion for sustainable architecture shines through in his eco-friendly design approach. Damon consistently exceeds client expectations with his remarkable architectural solutions, bringing their visions to life. His creativity and expertise elevate the standard of architectural design within the industry.",

			memberContact: "damon.salt@design.com",
		},
		{
			memberName: "Anne Han",
			memberPosition: "Architect",
			memberImg: "./member2.jpg",
			memberAlt: "Anne",
			memberAbout:
				"Ann Han is a skilled architect at Home Design, bringing her expertise and creativity to every project she undertakes. With a strong understanding of architectural principles and a passion for design, Ann consistently delivers exceptional results. Her attention to detail and ability to think outside the box allow her to create innovative and functional spaces that inspire. Ann's dedication to sustainable design practices ensures that her projects align with environmental consciousness. As a valued member of our team, Ann collaborates closely with clients to bring their visions to life, adding her own artistic flair along the way. Her contributions continue to shape and elevate the architectural landscape.",
			memberContact: "anne.han@design.com",
		},
		{
			memberName: "Liz Lane",
			memberPosition: "Photographer",
			memberImg: "./member3.jpg",
			memberAlt: "Liz",
			memberAbout:
				"Liz Lane is a talented photographer known for her exceptional skills and artistic eye. With a passion for capturing moments and telling stories through her lens, Liz has a unique ability to create captivating images that evoke emotion and leave a lasting impression. Her dedication to her craft and attention to detail result in stunning photographs that showcase the beauty and essence of her subjects. Whether it's portraits, landscapes, or special events, Liz's expertise and professionalism ensure a memorable photography experience. With her talent and creativity, Liz Lane continues to inspire and amaze with her remarkable work.",
			memberContact: "liz.lane@design.com",
		},
	]

	return (
		<div className="w:9/12"> 
			<div className='flex max-md:flex-col justify-between align-self-center mx-1 my-2 p-6'>
				<div className='flex flex-col items-start m-2'>
					<h3 className='text-left'>
						Meet our<span className='bg-orange-700 px-2'>Team </span>
					</h3>

					<p className='p-4 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam aperiam amet tenetur laborum et. Esse modi molestiae id expedita placeat odio autem dolores natus facilis incidunt atque, suscipit perspiciatis nisi totam porro. Rem officia sunt harum nihil nobis dolorem!</p>
				</div>
			</div>
			<div>
				{teamMembers.map((member, index) => (
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

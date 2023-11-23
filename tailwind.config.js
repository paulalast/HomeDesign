/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".5rem",
				margin: "1rem",
			},
			zIndex: {
				"-10": "-10",
				10: "10",
				20: "20",
				500: "1000000000000",
			},
			backgroundImage: {
				backgroundImage: {
					contactImage: "url('./contact.jpg')",
				},
			},
			backgroundColor: {
				orangeColor: "#c1410b",
				orangeColor: "#B26F66",
				"orange-700": "#CCBDAE",
			},
			colors: {
				black: "#2C2A2B",
			},

			// orangeColor: "#B26F66",
		},
	},
	plugins: [],
}

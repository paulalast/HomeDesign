/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			zIndex: {
				"-10": "-10",
				10: "10",
				20: "20",
				"500":"1000000000000"
			},
		},
	},
	plugins: [],
}

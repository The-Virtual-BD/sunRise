/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFC23B",
				secondary: "#466E94",
				darkBg: "#2B3949",
				lightBg: "#C2C6CB",
				fontclr: "#ffffff",
				paraclr: "#444F5C",
				
				card: "#F3F4F6",
				greenclr: "#1BB55C",
				formclr: "#F1F4F7",
				
				
			},
		},
	},
	plugins: [require("daisyui")],
};

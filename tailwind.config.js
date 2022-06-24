/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			error: {
				500: '#AB2222',
			},
			selection: {
				100: '#4C9AFF',
			},
			neutral: {
				50: '#F4F4F4',
				300: '#BBBBBB',
			},
		},
	},
	plugins: [],
};

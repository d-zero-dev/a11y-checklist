/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,astro,svelte}'],
	theme: {
		extend: {
			fontSize: {
				h1: 'calc(1em * 4 / 2)',
				h2: 'calc(1em * 4 / 3)',
				h3: 'calc(1em * 4 / 4)',
				h4: 'calc(1em * 4 / 5)',
				h5: 'calc(1em * 4 / 6)',
				h6: 'calc(1em * 4 / 7)',
			},
		},
	},
	plugins: [],
};

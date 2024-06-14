import tailwindContainerQueries from '@tailwindcss/container-queries';
import colors from 'tailwindcss/colors';

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
			colors: {
				'level-must': colors.emerald,
				'level-should': colors.sky,
				'level-may': colors.pink,
				'autocheck-yes': colors.emerald,
				'autocheck-no': colors.red,
				'autocheck-mixed': colors.yellow,
			},
		},
	},
	plugins: [tailwindContainerQueries],
};

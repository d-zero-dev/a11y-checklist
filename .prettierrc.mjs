import config from '@d-zero/prettier-config';

/**
 * @type {import('prettier').Options}
 */
export default {
	...config,
	plugins: [...config.plugins, 'prettier-plugin-astro', 'prettier-plugin-svelte'],
	overrides: [
		...config.overrides,
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};

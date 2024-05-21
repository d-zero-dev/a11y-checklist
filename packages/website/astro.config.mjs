import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig, passthroughImageService } from 'astro/config';

/**
 * @type {import('astro/types').Config}
 */
export default defineConfig({
	integrations: [svelte(), tailwind()],
	image: {
		service: passthroughImageService(),
	},
	prefetch: true,
	vite: {
		optimizeDeps: {
			esbuildOptions: {
				// Use top-level await in `pdfjs-dist`
				target: 'esnext',
			},
		},
		resolve: {
			alias: {
				'@/components': '/src/components',
				'@/layouts': '/src/layouts',
				'@/libs': '/src/libs',
				'@/utils': '/src/utils',
				'@/images': '/src/images',
			},
		},
	},
});

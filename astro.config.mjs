import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

function defaultLayoutPlugin() {
	return function (tree, file) {
		file.data.astro.frontmatter.layout = '@layouts/MainLayout.astro'
	}
}


// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	markdown: {
		remarkPlugins: [defaultLayoutPlugin],
		extendDefaultPlugins: true
	},
	site: `http://astro.build`,
});

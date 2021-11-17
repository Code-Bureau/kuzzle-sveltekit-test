import dotEnvExtended from 'dotenv-extended';
dotEnvExtended.load();

import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

const vite = {};

if (process.env.NODE_ENV === 'production') {
	vite['ssr'] = {
		noExternal: ['kuzzle-sdk']
	};
} else {
	vite['prerender'] = {
		enabled: false
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: node({
			out: 'build'
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite
	}
};

export default config;

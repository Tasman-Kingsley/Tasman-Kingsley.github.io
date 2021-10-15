// svelte.config.js
import adapter from '@sveltejs/adapter-static';


export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'docs',
      assets: 'docs',
      fallback: null,
		paths: {
			base: '/tasmankingsley.github.io',
		},
      appDir: 'internal',
    }),
  },
};

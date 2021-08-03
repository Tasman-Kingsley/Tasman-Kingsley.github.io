// svelte.config.js
// eslint-disable-next-line import/no-extraneous-dependencies
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
  },
};

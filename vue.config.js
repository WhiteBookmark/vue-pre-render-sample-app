/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	const PrerenderSPAPlugin = require('prerender-spa-plugin');
	const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

	module.exports = {
		transpileDependencies: ['vuetify'],
		configureWebpack: {
			plugins: [
				// Only prerender for production build
				new PrerenderSPAPlugin({
					// Required - The path to the webpack-outputted app to prerender.
					staticDir: path.join(__dirname, 'dist'),
					// Required - Routes to render.
					routes: ['/'],

					renderer: new Renderer({
						// Optional - Wait to render until the specified event is dispatched on the document.
						// eg, with `document.dispatchEvent(new Event('axios-operation-completed'))`
						renderAfterDocumentEvent: 'axios-operation-completed',
						// Wait further 5 seconds otherwise data won't be rendered
						renderAfterTime: 10000,
						headless: false,
					}),
				}),
			],
		},
	};
} else {
	module.exports = {
		transpileDependencies: ['vuetify'],
	};
}

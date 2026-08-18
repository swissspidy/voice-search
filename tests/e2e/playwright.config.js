/**
 * External dependencies
 */
const { defineConfig, devices } = require( '@playwright/test' );

/**
 * WordPress dependencies
 */
const baseConfig = require( '@wordpress/scripts/config/playwright.config' );

module.exports = defineConfig( {
	...baseConfig,
	reporter: [
		...baseConfig.reporter,
		process.env.COLLECT_COVERAGE === 'true' && [
			'monocart-reporter',
			{
				name: 'Voice Search E2E Tests',
				outputFile: './artifacts/e2e-coverage/report.html',
				coverage: {
					reports: [ [ 'codecov' ], [ 'v8' ], [ 'console-summary' ] ],
					// Only look at the plugin's own bundles, not WordPress core assets.
					entryFilter: ( entry ) =>
						entry.url.includes( 'plugins/voice-search/build/' ),
					// Map the bundles back to the original sources in `src`.
					sourceFilter: ( sourcePath ) =>
						sourcePath.startsWith( 'src/' ) &&
						! sourcePath.includes( 'node_modules/' ) &&
						! sourcePath.includes( 'webpack/' ),
					sourcePath: ( filePath ) =>
						filePath.replace( 'voice-search/', '' ),
				},
			},
		],
	].filter( Boolean ),
	webServer: {
		...baseConfig.webServer,
		// `wp-env` is started with the Playground runtime, which does not need Docker.
		command: 'npm run wp-env:start',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices[ 'Desktop Chrome' ] },
		},
	],
} );

const defaultConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...defaultConfig,
	{
		files: [ 'tests/e2e/**/*.js' ],
		rules: {
			// Playwright fixtures receive a `use` callback, which is not a React hook.
			'react-hooks/rules-of-hooks': 'off',
		},
	},
];

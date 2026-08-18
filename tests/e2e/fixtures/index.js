/**
 * External dependencies
 */
const { existsSync, readFileSync } = require( 'node:fs' );
const { join } = require( 'node:path' );

const { addCoverageReport } = require( 'monocart-reporter' );

/**
 * WordPress dependencies
 */
const {
	test: base,
	expect,
} = require( '@wordpress/e2e-test-utils-playwright' );

/**
 * Internal dependencies
 */
const { SpeechRecognition } = require( './speech-recognition' );

const collectCoverage = process.env.COLLECT_COVERAGE === 'true';

/**
 * Attaches the source map of a coverage entry, if it is missing.
 *
 * The bundles are served by WordPress, so the source maps next to them need to
 * be read from disk instead.
 *
 * See https://github.com/cenfun/monocart-coverage-reports#manually-resolve-the-sourcemap.
 *
 * @param {Object} entry V8 coverage entry.
 * @return {Object} Coverage entry, with a source map where possible.
 */
function withSourceMap( entry ) {
	if ( entry.sourceMap ) {
		return entry;
	}

	const match = /plugins\/voice-search\/(build\/[^?]+)/.exec( entry.url );

	if ( ! match ) {
		return entry;
	}

	const sourceMapPath = join( __dirname, '../../..', `${ match[ 1 ] }.map` );

	if ( ! existsSync( sourceMapPath ) ) {
		return entry;
	}

	entry.sourceMap = JSON.parse( readFileSync( sourceMapPath, 'utf-8' ) );

	return entry;
}

const test = base.extend( {
	page: async ( { page, browserName }, use ) => {
		if ( ! collectCoverage || browserName !== 'chromium' ) {
			await use( page );
			return;
		}

		await Promise.all( [
			page.coverage.startJSCoverage( { resetOnNavigation: false } ),
			page.coverage.startCSSCoverage( { resetOnNavigation: false } ),
		] );

		await use( page );

		const [ jsCoverage, cssCoverage ] = await Promise.all( [
			page.coverage.stopJSCoverage(),
			page.coverage.stopCSSCoverage(),
		] );

		await addCoverageReport(
			[ ...jsCoverage, ...cssCoverage ].map( withSourceMap ),
			test.info()
		);
	},
	speechRecognition: async ( { page }, use ) => {
		await use( new SpeechRecognition( { page } ) );
	},
} );

module.exports = { test, expect };

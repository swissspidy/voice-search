/**
 * Internal dependencies
 */
const { test, expect } = require( '../fixtures' );

const FORM_CLASS = 'voice-search-test-form';
const PLACEHOLDER = 'Search this site';

const POST_CONTENT = `<!-- wp:search {"label":"Search","showLabel":false,"placeholder":"${ PLACEHOLDER }","buttonText":"Search","className":"${ FORM_CLASS }"} /-->`;

test.describe( 'Voice Search', () => {
	let postLink;

	test.beforeAll( async ( { requestUtils } ) => {
		const post = await requestUtils.createPost( {
			title: 'Voice Search',
			content: POST_CONTENT,
			status: 'publish',
		} );

		postLink = post.link;
	} );

	test.afterAll( async ( { requestUtils } ) => {
		await requestUtils.deleteAllPosts();
	} );

	test( 'adds a microphone button to the search form', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.mock();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );

		await expect( form ).toHaveClass( /voice-search-wrapper/ );
		await expect( form.locator( 'input[name="s"]' ) ).toHaveClass(
			/voice-search-input/
		);
		await expect( form.locator( '.voice-search-button' ) ).toBeVisible();
		await expect(
			form.locator( '.voice-search-screen-reader-text' )
		).toHaveText( 'Speech Input' );
	} );

	test( 'does nothing without support for the Web Speech API', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.disable();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );

		await expect( form ).toBeVisible();
		await expect( form ).not.toHaveClass( /voice-search-wrapper/ );
		await expect( page.locator( '.voice-search-button' ) ).toHaveCount( 0 );
	} );

	test( 'starts listening when clicking the microphone button', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.mock();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );
		const input = form.locator( 'input[name="s"]' );

		await expect( input ).toHaveAttribute( 'placeholder', PLACEHOLDER );

		await form.locator( '.voice-search-button' ).click();

		await expect( form.locator( '.voice-search-button' ) ).toHaveClass(
			/listening/
		);
		await expect( input ).toHaveAttribute(
			'placeholder',
			'Start Talking…'
		);
		expect( await speechRecognition.isListening() ).toBe( true );
	} );

	test( 'fills the search field with the capitalized transcript', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.mock();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );
		const input = form.locator( 'input[name="s"]' );

		await form.locator( '.voice-search-button' ).click();
		await speechRecognition.say( 'hello world' );

		await expect( input ).toHaveValue( 'Hello world' );
	} );

	test( 'clears the search field when starting to listen', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.mock();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );
		const input = form.locator( 'input[name="s"]' );

		await input.fill( 'typed query' );
		await form.locator( '.voice-search-button' ).click();

		await expect( input ).toHaveValue( '' );

		await speechRecognition.say( 'good morning' );

		await expect( input ).toHaveValue( 'Good morning' );
	} );

	test( 'submits the search form after the user stops talking', async ( {
		page,
		speechRecognition,
	} ) => {
		await speechRecognition.mock();
		await page.goto( postLink );

		const form = page.locator( `form.${ FORM_CLASS }` );

		await form.locator( '.voice-search-button' ).click();
		await speechRecognition.say( 'hello world' );

		// The plugin gives up listening after a few seconds of silence and
		// then submits the search form automatically.
		await page.waitForURL( /[?&]s=Hello\+world/, { timeout: 30_000 } );
	} );
} );

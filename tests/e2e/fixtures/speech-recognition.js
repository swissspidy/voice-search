/**
 * Helper for driving a fake Web Speech API implementation from tests.
 *
 * Browsers only expose `webkitSpeechRecognition` when they can talk to a real
 * speech recognition service, which is never the case in an automated browser.
 * The plugin only ever talks to the API through a handful of methods and
 * events, so tests replace the constructor with a fake one that can be
 * controlled from the test.
 */
class SpeechRecognition {
	/**
	 * @param {Object}                          options      Options.
	 * @param {import('@playwright/test').Page} options.page Playwright page.
	 */
	constructor( { page } ) {
		this.page = page;
	}

	/**
	 * Installs the fake speech recognition implementation.
	 *
	 * Must be called before navigating to the page under test.
	 *
	 * @return {Promise<void>}
	 */
	async mock() {
		await this.page.addInitScript( () => {
			const instances = [];

			class SpeechRecognitionMock {
				constructor() {
					this.continuous = false;
					this.interimResults = false;
					this.lang = '';
					this.started = false;
					this.onstart = null;
					this.onend = null;
					this.onresult = null;
					this.onerror = null;

					instances.push( this );
				}

				start() {
					if ( this.started ) {
						throw new Error( 'recognition has already started' );
					}

					this.started = true;
					this.onstart?.( { type: 'start' } );
				}

				stop() {
					if ( ! this.started ) {
						return;
					}

					this.started = false;
					this.onend?.( { type: 'end' } );
				}

				abort() {
					this.stop();
				}
			}

			window.webkitSpeechRecognition = SpeechRecognitionMock;

			window.__voiceSearchSpeechRecognition = {
				// The instance that is currently listening, if any.
				get active() {
					return instances.find( ( { started } ) => started );
				},
				isListening() {
					return Boolean( this.active );
				},
				say( transcript ) {
					const recognition = this.active;

					if ( ! recognition ) {
						throw new Error( 'recognition has not been started' );
					}

					const result = [ { transcript, confidence: 1 } ];
					result.isFinal = true;

					recognition.onresult?.( {
						type: 'result',
						resultIndex: 0,
						results: [ result ],
					} );
				},
				stop() {
					const recognition = this.active;

					if ( ! recognition ) {
						throw new Error( 'recognition has not been started' );
					}

					recognition.stop();
				},
			};
		} );
	}

	/**
	 * Simulates a browser without support for the Web Speech API.
	 *
	 * Must be called before navigating to the page under test.
	 *
	 * @return {Promise<void>}
	 */
	async disable() {
		await this.page.addInitScript( () => {
			delete window.webkitSpeechRecognition;
		} );
	}

	/**
	 * Emits a final recognition result.
	 *
	 * @param {string} transcript Recognized text.
	 * @return {Promise<void>}
	 */
	async say( transcript ) {
		await this.page.evaluate(
			( text ) => window.__voiceSearchSpeechRecognition.say( text ),
			transcript
		);
	}

	/**
	 * Ends the current recognition session, like the speech engine does after
	 * a period of silence.
	 *
	 * @return {Promise<void>}
	 */
	async stopListening() {
		await this.page.evaluate( () =>
			window.__voiceSearchSpeechRecognition.stop()
		);
	}

	/**
	 * Whether a recognition session is currently running.
	 *
	 * @return {Promise<boolean>} Whether the fake engine is listening.
	 */
	async isListening() {
		return this.page.evaluate( () =>
			window.__voiceSearchSpeechRecognition.isListening()
		);
	}
}

module.exports = { SpeechRecognition };

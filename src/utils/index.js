import { __ } from '@wordpress/i18n';

// Courtesy of Material icons.
const MICROPOHNE = `
<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30">
	<path d="M0 0h24v24H0z" fill="none"/>
	<path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
</svg>`;

/**
 * Capitalize a string.
 *
 * @param {string} str Input string.
 * @return {string} Capitalized string.
 */
export function capitalize( str ) {
	return str.length ? str[ 0 ].toUpperCase() + str.slice( 1 ) : str;
}

export function getNumber( number ) {
	number = parseInt( number, 10 );
	return isNaN( number ) || number === null || typeof number === 'undefined'
		? 0
		: number;
}

const PATIENCE = 3;

export function initializeVoiceSearch( speechInputWrapper ) {
	// Ensure search form is visible so we can calculate the sizes
	const speechInputWrapperStyle = speechInputWrapper.style.cssText || '';
	speechInputWrapper.style.display = 'block !important';

	// Find the search input
	const inputEl =
		speechInputWrapper.querySelector( 'input[name=s]' ) ||
		speechInputWrapper.querySelector( 'input[name=search]' );
	if ( null === inputEl ) {
		// Reset form style again.
		speechInputWrapper.style.cssText = speechInputWrapperStyle;

		return;
	}

	speechInputWrapper.classList.add( 'voice-search-wrapper' );
	inputEl.classList.add( 'voice-search-input' );

	// Pressing enter should submit the search, not press the voice search button
	speechInputWrapper.addEventListener(
		'keypress',
		( e ) => {
			if ( e.keyCode && e.keyCode === 13 ) {
				speechInputWrapper.submit();
				return false;
			}
		},
		{ capture: true }
	);

	// Add some markup to the search form

	const voiceSearchButton = document.createElement( 'button' );
	voiceSearchButton.setAttribute( 'class', 'voice-search-button' );

	const screenReaderText = document.createElement( 'span' );
	screenReaderText.setAttribute( 'class', 'voice-search-screen-reader-text' );
	screenReaderText.appendChild(
		document.createTextNode( __( 'Speech Input', 'voice-search' ) )
	);
	voiceSearchButton.appendChild( screenReaderText );

	const microphoneIcon = document.createElement( 'span' );
	microphoneIcon.setAttribute( 'class', 'voice-search-mic' );
	microphoneIcon.innerHTML = MICROPOHNE;
	voiceSearchButton.appendChild( microphoneIcon );

	// Size and position the microphone button.
	// TODO: Use IntersectionObserver in case the form is initially hidden
	// Example: Search form in Twenty Twenty.
	const wrapperPosition = speechInputWrapper.getBoundingClientRect();
	const inputPosition = inputEl.getBoundingClientRect();
	const relativePosition = {
		top: inputPosition.top - wrapperPosition.top,
		right: inputPosition.right - wrapperPosition.right,
		bottom: inputPosition.bottom - wrapperPosition.bottom,
		left: inputPosition.left - wrapperPosition.left,
	};

	const inputHeight = getNumber( inputEl.offsetHeight );
	const buttonSize = getNumber( 0.8 * inputHeight );
	const buttonOffsetTop =
		getNumber( 0.1 * inputHeight ) +
		getNumber(
			window
				.getComputedStyle( speechInputWrapper )
				.getPropertyValue( 'padding-top' )
		);

	voiceSearchButton.style.cssText = `
		top: ${ buttonOffsetTop + relativePosition.top }px;
		height: ${ buttonSize }px !important;
		width: ${ buttonSize }px !important;
		right: ${ Math.abs( relativePosition.right ) }px !important;
	`;

	if ( document.documentElement.dir === 'rtl' ) {
		voiceSearchButton.style.right = null;
		voiceSearchButton.style.left = `left: ${ relativePosition.left }px !important;`;
	}

	speechInputWrapper.appendChild( voiceSearchButton );

	// Reset form style again.
	speechInputWrapper.cssText = speechInputWrapperStyle;

	// Setup recognition
	let finalTranscript = '';
	let recognizing = false;
	let timeout;
	let submitTimeout;
	let oldPlaceholder = null;
	const recognition = new window.webkitSpeechRecognition();
	recognition.continuous = true;

	function restartTimer() {
		timeout = setTimeout( () => {
			recognition.stop();
		}, PATIENCE * 1000 );
	}

	recognition.onstart = () => {
		oldPlaceholder = inputEl.placeholder;
		inputEl.placeholder = __( 'Start Talking…', 'voice-search' );
		recognizing = true;
		voiceSearchButton.classList.add( 'listening' );
		restartTimer();
		clearTimeout( submitTimeout );
	};

	recognition.onend = () => {
		recognizing = false;
		clearTimeout( timeout );
		voiceSearchButton.classList.remove( 'listening' );
		if ( oldPlaceholder !== null ) {
			inputEl.placeholder = oldPlaceholder;
		}

		submitTimeout = setTimeout( () => {
			if ( ! recognizing ) {
				if ( typeof inputEl.form.requestSubmit !== 'undefined' ) {
					inputEl.form.requestSubmit();
				} else {
					inputEl.form.submit();
				}
			}
		}, 100 );
	};

	recognition.onresult = ( event ) => {
		clearTimeout( timeout );
		for ( let i = event.resultIndex; i < event.results.length; ++i ) {
			if ( event.results[ i ].isFinal ) {
				finalTranscript += event.results[ i ][ 0 ].transcript;
			}
		}
		finalTranscript = capitalize( finalTranscript );
		inputEl.value = finalTranscript;

		restartTimer();
	};

	voiceSearchButton.addEventListener(
		'click',
		( event ) => {
			event.preventDefault();
			if ( recognizing ) {
				recognition.stop();
				return;
			}
			inputEl.value = finalTranscript = '';
			recognition.start();
		},
		false
	);
}

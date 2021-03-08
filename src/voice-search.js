/**
 * Voice Search
 *
 * Copyright (c) 2015 Pascal Birchler
 * Licensed under the GPLv2+ license.
 *
 * The original script was released by Daniel Hug under the MIT license.
 */

import domReady from '@wordpress/dom-ready';

import { initializeVoiceSearch } from './utils';
import './voice-search.css';

domReady( () => {
	if ( ! ( 'webkitSpeechRecognition' in window ) ) {
		return;
	}

	// Get all search forms
	let speechInputWrappers = document.querySelectorAll( 'form[role=search]' );
	if ( speechInputWrappers.length === 0 ) {
		speechInputWrappers = document.querySelectorAll(
			'form[class=searchform]'
		);
	}
	if ( speechInputWrappers.length === 0 ) {
		speechInputWrappers = document.querySelectorAll(
			'form[id=searchform]'
		);
	}

	[ ...speechInputWrappers ].forEach( ( speechInputWrapper ) => {
		initializeVoiceSearch( speechInputWrapper );
	} );
} );

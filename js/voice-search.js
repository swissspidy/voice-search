/*! Voice Search - v1.2.1
 * https://spinpress.com/wordpress-web-speech-api/
 * Copyright (c) 2015; * Licensed GPLv2+ */
(function () {
	'use strict';

	if (!('webkitSpeechRecognition' in window)) {
		return;
	}

	var patience = 3;

	// Capitalize a string
	function capitalize(str) {
		return str.length ? str[0].toUpperCase() + str.slice(1) : str;
	}

	// Get all search forms
	var speechInputWrappers = document.querySelectorAll('form[role=search]');
	if (speechInputWrappers.length === 0) {
		speechInputWrappers = document.querySelectorAll('form[class=searchform]');
	}
	if (speechInputWrappers.length === 0) {
		speechInputWrappers = document.querySelectorAll('form[id=searchform]');
	}

	[].forEach.call(speechInputWrappers, function (speechInputWrapper) {
		// Try to show the form temporarily so we can calculate the sizes
		var speechInputWrapperStyle = speechInputWrapper.getAttribute('style');
		speechInputWrapper.setAttribute('style', speechInputWrapperStyle + '; display: block !important');

		// Find the search input
		var inputEl = speechInputWrapper.querySelector('input[name=s]');
		if (null === inputEl) {
			inputEl = speechInputWrapper.querySelector('input[name=search]');
		}
		if (null === inputEl) {
			// Reset form style again
			speechInputWrapper.setAttribute('style', speechInputWrapperStyle);

			return;
		}

		speechInputWrapper.classList.add('voice-search-wrapper');

		// Pressing enter should submit the search, not press the voice search button
		speechInputWrapper.addEventListener('keypress', function (e) {
			if (e.keyCode && e.keyCode === 13) {
				speechInputWrapper.submit();
				return false;
			}
		}, false);

		// Add some markup to the search form

		var micBtn = document.createElement('button');
		micBtn.setAttribute('class', 'voice-search-button');
		micBtn.appendChild(document.createTextNode(voice_search.button_message));

		var mic = document.createElement('span');
		mic.setAttribute('class', 'voice-search-mic');
		micBtn.appendChild(mic);

		var holder = document.createElement('span');
		holder.setAttribute('class', 'voice-search-holder');
		micBtn.appendChild(holder);

		function getNumber(number) {
			number = parseInt(number, 10);
			return isNaN(number) || number === null || typeof(number) === 'undefined' ? 0 : number;
		}

		// Size and position them
		var inputHeight = getNumber(inputEl.offsetHeight),
				inputRightBorder = getNumber(getComputedStyle(inputEl).borderRightWidth),
				buttonSize = getNumber(0.8 * inputHeight),
				buttonOffsetTop = getNumber(0.1 * inputHeight) + getNumber(getComputedStyle(speechInputWrapper).getPropertyValue('padding-top'));

		var inlineStyle = 'top: ' + buttonOffsetTop + 'px; ';
		inlineStyle += 'height: ' + buttonSize + 'px !important; ';
		inlineStyle += 'width: ' + buttonSize + 'px !important; ';
		inlineStyle += 'margin-right: ' + getNumber(buttonSize - inputRightBorder) + 'px !important; ';

		micBtn.setAttribute('style', inlineStyle);
		speechInputWrapper.appendChild(micBtn);

		// Reset form style again
		speechInputWrapper.setAttribute('style', speechInputWrapperStyle);

		// Setup recognition
		var finalTranscript = '';
		var recognizing = false;
		var timeout;
		var oldPlaceholder = null;
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;

		function restartTimer() {
			timeout = setTimeout(function () {
				recognition.stop();
			}, patience * 1000);
		}

		recognition.onstart = function () {
			oldPlaceholder = inputEl.placeholder;
			inputEl.placeholder = voice_search.talk_message;
			recognizing = true;
			micBtn.classList.add('listening');
			restartTimer();
		};

		recognition.onend = function () {
			recognizing = false;
			clearTimeout(timeout);
			micBtn.classList.remove('listening');
			if (oldPlaceholder !== null) {
				inputEl.placeholder = oldPlaceholder;
			}
		};

		recognition.onresult = function (event) {
			clearTimeout(timeout);
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					finalTranscript += event.results[i][0].transcript;
				}
			}
			finalTranscript = capitalize(finalTranscript);
			inputEl.value = finalTranscript;
			restartTimer();
		};

		micBtn.addEventListener('click', function (event) {
			event.preventDefault();
			if (recognizing) {
				recognition.stop();
				return;
			}
			inputEl.value = finalTranscript = '';
			recognition.start();
		}, false);
	});
})();

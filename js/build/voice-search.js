/*! 1.0.0 */
/*global webkitSpeechRecognition */

/**
 * The original script was released by Daniel Hug under the MIT license.
 */

(function () {
  'use strict';

  if (!('webkitSpeechRecognition' in window)) return;

  var patience = 6;

  // Capitalize a string
  function capitalize(str) {
    return str.length ? str[0].toUpperCase() + str.slice(1) : str;
  }

  // Get all search forms
  var speechInputWrappers = document.querySelectorAll('form[role=search]');

  [].forEach.call(speechInputWrappers, function (speechInputWrapper) {
    var inputEl = speechInputWrapper.querySelector('input[name=s]');
    speechInputWrapper.classList.add('voice-search-wrapper');

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

    // Size and position them
    var inputHeight = inputEl.offsetHeight;
    var inputRightBorder = parseInt(getComputedStyle(inputEl).borderRightWidth, 10);
    var buttonSize = 0.8 * inputHeight;
    micBtn.style.top = 0.1 * inputHeight + 'px';
    micBtn.style.height = micBtn.style.width = buttonSize + 'px';
    inputEl.style.paddingRight = buttonSize - inputRightBorder + 'px';
    speechInputWrapper.appendChild(micBtn);

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
      if (oldPlaceholder !== null) inputEl.placeholder = oldPlaceholder;
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
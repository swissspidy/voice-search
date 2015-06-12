# Voice Search #
Contributors:      swissspidy  
Donate link:       https://pascalbirchler.com  
Tags:              voice, search, speech, api,  
Requires at least: 2.6  
Tested up to:      4.2  
Stable tag:        1.1.0  
License:           GPLv2 or later  
License URI:       http://www.gnu.org/licenses/gpl-2.0.html  

Allows visitors to search the site using their voice.

## Description ##

Allows visitors to search the site using their voice. Currently only supported by Chrome on both desktop and mobile. See [this technical reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for more details.

See [this blog post](https://spinpress.com/wordpress-web-speech-api/ "Enabling Voice Search in WordPress Using The Web Speech API") for further information about the plugin.

## Installation ##

### Manual Installation ###

1. Upload the entire `/voice-search` directory to the `/wp-content/plugins/` directory.
2. Activate Voice Search through the 'Plugins' menu in WordPress.
3. Visit your website and start searching using your voice.

## Frequently Asked Questions ##

### Why is there no microphone button beneath the search form? ###

There could be many reasons for this:

* You’re not Google Chrome (check out the browser support [here](http://caniuse.com/#feat=web-speech))
* Your theme doesn’t use the `get_search_form()` function properly. The plugin relies on the default search form markup
* Your theme does some CSS things that prevents the microphone button from being displayed.

### Does this plugin still allow users to type or does it entirely replace typing with voice search? ###

No, users are still able to type in the search box whatever they want. Voice search is just a nice addition.

### How does it integrate with other search-enhancing plugins such as Relevanssi? ###

In my tests there weren’t any problems with other plugins like Relevanssi.

## Screenshots ##

1. The microphone button added to the search form by the plugin.

## Changelog ##

### 1.2.1 ###

* Less patience for quicker feedback after speech input
* Pressing enter now submits the form instead of triggering the microphone button

### 1.2.0 ###
* Improve compatibility with themes that initially hide the search forms
* Update browser support info in the readme

### 1.1.0 ###
* Complete rewrite of the plugin
* Improved theme compatibility

### 1.0.1 ###
* Improvement: Better theme compatibility

### 1.0.0 ###
* Initial release

## Upgrade Notice ##

### 1.2.1 ###
Pressing enter now submits the form instead of triggering the microphone button. Also, quicker feedback thanks to less patience. 

### 1.2.0 ###
Some themes have really bad search forms. But don’t worry no more! This plugins supports themes like Divi too!

### 1.1.0 ###
This update brings you even better compatibility with popular themes.

### 1.0.0 ###
Initial release

=== Voice Search ===
Contributors: swissspidy
Tags: voice, search, speech, api,
Requires at least: 2.6
Tested up to: 4.1
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Allows visitors to search the site using their voice.

== Description ==

Allows visitors to search the site using their voice. Currently supported by Safari and Chrome on both desktop and mobile.

See [this blog post](https://spinpress.com/wordpress-web-speech-api/ ‎ "Enabling Voice Search in WordPress Using The Web Speech API") for further information about the plugin.

== Installation ==

1. Upload the `voice-search` folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Visit your website and start searching using your voice.

== Frequently Asked Questions ==

= Why is there no microphone button beneath the search form? =

There could be many reasons for this:

* You're not using Safari or Chrome (check out the browser support [here](http://caniuse.com/#feat=web-speech))
* Your theme doesn't use the `get_search_form()` function properly. The plugin relies on the default search form markup
* Your theme does some CSS things that the microphone button is hidden.

== Screenshots ==

1. The microphone button added to the search form by the plugin.

== Changelog ==

= 1.0 =
* Initial release.
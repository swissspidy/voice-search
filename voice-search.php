<?php
/**
 * Voice Search Plugin.
 *
 * Allows visitors to search the site using their voice.
 *
 * @package   Voice_Search
 * @author    Pascal Birchler <pascal.birchler@spinpress.com>
 * @license   GPL-2.0+
 * @link      https://pascalbirchler.com
 * @copyright 2014 Pascal Birchler
 *
 * @wordpress-plugin
 * Plugin Name:       Voice Search
 * Plugin URI:        https://spinpress.com/wordpress-web-speech-api/
 * Description:       Allows visitors to search the site using their voice. Currently supported by Safari and Chrome on both desktop and mobile.
 * Version:           1.0.1
 * Author:            Pascal Birchler
 * Author URI:        https://pascalbirchler.com
 * Text Domain:       voice-search
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 */

// Don't call this file directly
defined( 'ABSPATH' ) or die;

// Define our constants
( ! defined( 'VOICE_SEARCH_DIR' ) ) && define( 'VOICE_SEARCH_DIR', plugin_dir_path( __FILE__ ) );
( ! defined( 'VOICE_SEARCH_URL' ) ) && define( 'VOICE_SEARCH_URL', plugins_url( '', __FILE__ ) );

function voice_search_enqueue_scripts() {

	// Use minified libraries if SCRIPT_DEBUG is turned off
	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	wp_enqueue_script(
		'voice-search',
		VOICE_SEARCH_URL . '/js/build/voice-search' . $suffix . ' .js',
		array(),
		'1.0.1',
		true
	);

	wp_localize_script( 'voice-search', 'voice_search', array(
		'button_message' => __( 'Speech Input', 'voice-search' ),
		'talk_message'   => __( 'Start Talking…', 'voice-search' ),
	) );

	wp_enqueue_style(
		'voice-search',
		VOICE_SEARCH_URL . '/css/build/voice-search' . $suffix . '.css',
		array(),
		'1.0.1',
		'screen'
	);
}

add_action( 'wp_enqueue_scripts', 'voice_search_enqueue_scripts', 15 );
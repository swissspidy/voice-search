<?php
/**
 * Main plugin functionality.
 *
 * @package VoiceSearch
 */

namespace VoiceSearch;

/**
 * Bootstraps the plugin by hooking into actions and filters.
 *
 * @return void
 */
function bootstrap() {
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
}

/**
 * Enqueues scripts and styles.
 *
 * @return void
 */
function enqueue_scripts() {
	$asset_file = dirname( __DIR__ ) . '/build/voice-search.asset.php';
	$asset      = is_readable( $asset_file ) ? require $asset_file : array();

	$asset['dependencies'] = isset( $asset['dependencies'] ) ? $asset['dependencies'] : array();
	$asset['version']      = isset( $asset['version'] ) ? $asset['version'] : '';

	wp_enqueue_script(
		'voice-search',
		plugins_url( 'build/voice-search.js', __DIR__ ),
		$asset['dependencies'],
		$asset['version'],
		true
	);

	wp_set_script_translations( 'voice-search', 'voice-search' );

	wp_enqueue_style(
		'voice-search',
		plugins_url( 'build/voice-search.css', __DIR__ ),
		array(),
		$asset['version'],
		'screen'
	);

	wp_style_add_data( 'voice-search', 'rtl', 'replace' );
}

<?php

namespace VoiceSearch;

function bootstrap() {
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
}

function enqueue_scripts() {
	$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

	wp_enqueue_script(
		'voice-search',
		plugins_url( 'js/voice-search' . $suffix . '.js', __DIR__ ),
		[],
		'20182023',
		true
	);

	wp_localize_script(
		'voice-search',
		'voice_search',
		[
			'button_message' => __( 'Speech Input', 'voice-search' ),
			'talk_message'   => __( 'Start Talking…', 'voice-search' ),
		]
	);

	wp_enqueue_style(
		'voice-search',
		plugins_url( 'css/voice-search' . $suffix . '.css', __DIR__ ),
		[],
		'20182023',
		'screen'
	);
}

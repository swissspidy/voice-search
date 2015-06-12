<?php
defined( 'WPINC' ) or die;

class Voice_Search_Plugin extends WP_Stack_Plugin2 {

	/**
	 * @var self
	 */
	protected static $instance;

	/**
	 * Plugin version.
	 */
	const VERSION = '1.2.1';

	/**
	 * Constructs the object, hooks in to `plugins_loaded`.
	 */
	protected function __construct() {
		$this->hook( 'plugins_loaded', 'add_hooks' );
	}

	/**
	 * Adds hooks.
	 */
	public function add_hooks() {
		$this->hook( 'init' );

		$this->hook( 'wp_enqueue_scripts', 'enqueue_scripts' );
	}

	/**
	 * Initializes the plugin, registers textdomain, etc.
	 */
	public function init() {
		$this->load_textdomain( 'voice-search', '/languages' );
	}

	public function enqueue_scripts() {
		// Use minified libraries if SCRIPT_DEBUG is turned off
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		wp_enqueue_script(
			'voice-search',
			$this->get_url() . 'js/voice-search' . $suffix . ' .js',
			array(),
			self::VERSION,
			true
		);

		wp_localize_script( 'voice-search', 'voice_search', array(
			'button_message' => __( 'Speech Input', 'voice-search' ),
			'talk_message'   => __( 'Start Talking…', 'voice-search' ),
		) );

		wp_enqueue_style(
			'voice-search',
			$this->get_url() . 'css/voice-search' . $suffix . '.css',
			array(),
			self::VERSION,
			'screen'
		);
	}
}

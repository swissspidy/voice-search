<?php

class VoiceSearch_Test extends WP_UnitTestCase {
	public function test_enqueue_scripts() {
		\VoiceSearch\enqueue_scripts();
		$this->assertTrue( wp_script_is( 'voice-search' ) );
		$this->assertTrue( wp_style_is( 'voice-search' ) );
	}
}

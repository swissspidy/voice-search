<?php
/**
 * Main plugin file.
 *
 * @package VoiceSearch
 *
 * Plugin Name: Voice Search
 * Plugin URI:  https://github.com/swissspidy/voice-search
 * Description: Allows visitors using Google Chrome to search the site using their voice.
 * Version:     1.4.0
 * Author:      Pascal Birchler
 * Author URI:  https://pascalbirchler.com
 * License:     GPLv2+
 * Text Domain: voice-search
 * Requires at least: 5.0
 * Requires PHP: 5.6
 */

/**
 * Copyright (c) 2018 Pascal Birchler (swissspidy@chat.wordpress.org)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

defined( 'WPINC' ) or die;

if ( file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	require dirname( __FILE__ ) . '/vendor/autoload.php';
}

$voice_search_requirements_check = new WP_Requirements_Check(
	array(
		'title' => __( 'Voice Search', 'voice-search' ),
		'php'   => '5.6',
		'wp'    => '5.0',
		'file'  => __FILE__,
		'i18n'  => array(
			/* translators: 1: plugin name. 2: minimum PHP version. */
			'php' => __( '&#8220;%1$s&#8221; requires PHP %2$s or higher. Please upgrade.', 'voice-search' ),
			/* translators: 1: plugin name. 2: minimum WordPress version. */
			'wp'  => __( '&#8220;%1$s&#8221; requires WordPress %2$s or higher. Please upgrade.', 'voice-search' ),
		),
	)
);

if ( $voice_search_requirements_check->passes() ) {
	require_once dirname( __FILE__ ) . '/inc/namespace.php';

	VoiceSearch\bootstrap();
}

unset( $voice_search_requirements_check );

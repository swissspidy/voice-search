<?php
/**
 * Plugin Name: Voice Search
 * Plugin URI:  https://spinpress.com/wordpress-web-speech-api/
 * Description: Allows visitors to search the site using their voice. Currently supported by Safari and Chrome on both desktop and mobile.
 * Version:     1.2.0
 * Author:      Pascal Birchler
 * Author URI:  https://pascalbirchler.com
 * License:     GPLv2+
 * Text Domain: voice-search
 * Domain Path: /languages
 */

/**
 * Copyright (c) 2015 Pascal Birchler (email : support@spinpress.com)
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

include( dirname( __FILE__ ) . '/lib/requirements-check.php' );

$voice_search_requirements_check = new Voice_Search_Requirements_Check( array(
	'title' => 'Voice Search',
	'php'   => '5.3',
	'wp'    => '2.6',
	'file'  => __FILE__,
));

if ( $voice_search_requirements_check->passes() ) {
	// Pull in the plugin classes and initialize
	include( dirname( __FILE__ ) . '/lib/wp-stack-plugin.php' );
	include( dirname( __FILE__ ) . '/classes/plugin.php' );
	Voice_Search_Plugin::start( __FILE__ );
}

unset( $voice_search_requirements_check );

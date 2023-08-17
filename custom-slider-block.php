<?php
/**
 * Plugin Name: Custom Slider Block
 * Description: A custom Gutenberg slider block with image and text.
 * Version: 1.0.0
 * Author: Kali prasad panda
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

function custom_slider_block_enqueue_assets() {
    // wp_enqueue_style('custom-slider-block-style', plugin_dir_url(__FILE__) . 'dist/custom-slider-block.build.css', array(), '1.0.0');
    wp_enqueue_style('custom-slider-block-style', plugin_dir_url(__FILE__) . 'assets/css/custom-slider-block.css', array(), '1.0.0');
    wp_enqueue_script('custom-slider-block-script', plugin_dir_url(__FILE__) . 'dist/custom-slider-block.build.js', array('jquery'), '1.0.0', true);
    // wp_enqueue_script('custom-slider-block-script', plugin_dir_url(__FILE__) . 'assets/js/custom-slider-block.js', array('jquery'), '1.0.0', true);
}
add_action('enqueue_block_assets', 'custom_slider_block_enqueue_assets');


function register_custom_slider_block() {
    // die('Function called');
    register_block_type('custom-slider-block/slider', array(
        'render_callback' => 'render_slider_block',
        'attributes'      => array(
            'images' => array(
                'type' => 'array',
                'default' => array(),
            ),
            'texts' => array(
                'type' => 'array',
                'default' => array(),
            ),
        ),
    ));
}
add_action('init', 'register_custom_slider_block');

<?php
/**
 * Theme Functions for GameCh Custom Theme
 */

// Enqueue Styles and Scripts
function gamechcustomtheme_enqueue_scripts() {
    // Main stylesheet (WordPress theme header)
    wp_enqueue_style('main-style', get_stylesheet_uri());
    
    // Modular CSS files from /assets/css/
    wp_enqueue_style('base-style', get_template_directory_uri() . '/assets/css/base.css', [], time());
    wp_enqueue_style('nav-style', get_template_directory_uri() . '/assets/css/nav.css', [], time());
    wp_enqueue_style('hero-style', get_template_directory_uri() . '/assets/css/hero.css', [], time());
    wp_enqueue_style('about-style', get_template_directory_uri() . '/assets/css/about.css', [], time());
    wp_enqueue_style('our-service-style', get_template_directory_uri() . '/assets/css/our-service.css', [], time());
        wp_enqueue_style('contact-interactive-style', get_template_directory_uri() . '/assets/css/contact-interactive.css', [], time());
      wp_enqueue_style('services-professional-style', get_template_directory_uri() . '/assets/css/services-professional.css', [], time());
    wp_enqueue_style('about-snapshot-style', get_template_directory_uri() . '/assets/css/about-snapshot.css', [], time());
    wp_enqueue_style('global-presence-style', get_template_directory_uri() . '/assets/css/global-presence.css', [], time());
    wp_enqueue_style('footer-style', get_template_directory_uri() . '/assets/css/footer.css', [], time());
    

 
    // JavaScript files
    wp_enqueue_script('script-js', get_template_directory_uri() . '/assets/js/script.js', array(), time(), true);
    wp_enqueue_script('hero-slider-js', get_template_directory_uri() . '/assets/js/hero-slider.js', array(), time(), true);
    wp_enqueue_script('about-snapshot-js', get_template_directory_uri() . '/assets/js/about-snapshot.js', array(), time(), true);
    wp_enqueue_script('about-js', get_template_directory_uri() . '/assets/js/about.js', array(), time(), true);
    wp_enqueue_script('service-overview-js', get_template_directory_uri() . '/assets/js/service-overview.js', array(), time(), true);
    wp_enqueue_script('services-professional-js', get_template_directory_uri() . '/assets/js/services-professional.js', array(), time(), true);
      wp_enqueue_script('contact-interactive-js', get_template_directory_uri() . '/assets/js/contact-interactive.js', array(), time(), true);
    wp_enqueue_script('global-presence-js', get_template_directory_uri() . '/assets/js/global-presence.js', array(), time(), true);
}
add_action('wp_enqueue_scripts', 'gamechcustomtheme_enqueue_scripts');

// Theme Setup
function gamechcustomtheme_setup() {
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for HTML5
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'gamech'),
        'footer'  => __('Footer Menu', 'gamech')
    ));
}
add_action('after_setup_theme', 'gamechcustomtheme_setup');

// Add custom logo support
function gamechcustomtheme_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'gamechcustomtheme_custom_logo_setup');
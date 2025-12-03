<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="container">
        <div class="header-wrapper">
            
            <!-- Logo Section -->
            <div class="site-branding">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo-text">
                        <span class="logo-name"><?php bloginfo('name'); ?></span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Toggle Menu">
                <span class="hamburger"></span>
                <span class="hamburger"></span>
                <span class="hamburger"></span>
            </button>

            <!-- Navigation Menu -->
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'nav-menu',
                    'container'      => false,
                    'fallback_cb'    => 'gamechcustomtheme_fallback_menu'
                ));
                ?>
            </nav>

        </div>
    </div>
</header>

<?php
// Fallback menu if no menu is set in WordPress admin
function gamechcustomtheme_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li class="' . (is_front_page() ? 'current-menu-item' : '') . '"><a href="' . home_url('/') . '">Home</a></li>';
    echo '<li class="' . (is_page('about') ? 'current-menu-item' : '') . '"><a href="' . home_url('/about') . '">About</a></li>';
    echo '<li class="' . (is_page('blog') ? 'current-menu-item' : '') . '"><a href="' . home_url('/blog') . '">Blog</a></li>';
    echo '<li class="' . (is_page('contact') ? 'current-menu-item' : '') . '"><a href="' . home_url('/contact') . '">Contact</a></li>';
    echo '<li class="' . (is_page('services') ? 'current-menu-item' : '') . '"><a href="' . home_url('/services') . '">Services</a></li>';

    echo '</ul>';
}
?>
<?php

/**
 * Theme Functions for GameCh Custom Theme
 */

/* =====================================================
   CONTACT FORM — AJAX HANDLER
   Must live in functions.php so it registers before
   WordPress processes the admin-ajax.php request.
   ===================================================== */
add_action('wp_ajax_gamech_contact_form',        'gamech_handle_contact_form');
add_action('wp_ajax_nopriv_gamech_contact_form', 'gamech_handle_contact_form');

function gamech_handle_contact_form()
{
    // 1. Verify nonce
    if (! isset($_POST['gamech_nonce']) || ! wp_verify_nonce($_POST['gamech_nonce'], 'gamech_contact_nonce')) {
        wp_send_json_error(['message' => 'Security check failed. Please refresh the page and try again.']);
    }

    // 2. Honeypot — bots fill this hidden field; humans leave it blank
    if (! empty($_POST['website_url'])) {
        // Silently "succeed" to fool the bot — nothing is actually sent
        wp_send_json_success(['message' => 'Your message has been sent successfully!']);
    }

    // 3. Rate limiting — one submission per IP per 60 seconds
    $ip            = sanitize_text_field($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $transient_key = 'gamech_contact_' . md5($ip);
    if (get_transient($transient_key)) {
        wp_send_json_error(['message' => 'Please wait a moment before submitting again.']);
    }

    // 4. Sanitise & validate
    $name    = sanitize_text_field($_POST['contact_name']    ?? '');
    $email   = sanitize_email($_POST['contact_email']        ?? '');
    $phone   = sanitize_text_field($_POST['contact_phone']   ?? '');
    $subject = sanitize_text_field($_POST['contact_subject'] ?? '');
    $message = sanitize_textarea_field($_POST['contact_message'] ?? '');
    $service = sanitize_text_field($_POST['contact_service'] ?? '');

    $errors = [];

    if (empty($name) || strlen($name) < 2) {
        $errors[] = 'Please enter your full name.';
    }
    if (empty($email) || ! is_email($email)) {
        $errors[] = 'Please enter a valid email address.';
    }
    if (empty($subject)) {
        $errors[] = 'Please enter a subject.';
    }
    if (empty($message) || strlen($message) < 20) {
        $errors[] = 'Please enter a message of at least 20 characters.';
    }

    if (! empty($errors)) {
        wp_send_json_error(['message' => implode('<br>', $errors)]);
    }

    // 5. Build & send email
    $recipients    = ['info@gamechltd.com', 'webmasterjdd@gmail.com'];
    $email_subject = '[Gamech Contact] ' . $subject;

    $body  = "New contact form submission from the Gamech website.\n\n";
    $body .= "-------------------------------------------\n";
    $body .= "Name:    {$name}\n";
    $body .= "Email:   {$email}\n";
    if (! empty($phone))   $body .= "Phone:   {$phone}\n";
    if (! empty($service)) $body .= "Service: {$service}\n";
    $body .= "Subject: {$subject}\n";
    $body .= "-------------------------------------------\n\n";
    $body .= "Message:\n{$message}\n\n";
    $body .= "-------------------------------------------\n";
    $body .= "Submitted: " . current_time('Y-m-d H:i:s') . "\n";
    $body .= "IP Address: {$ip}\n";

    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        'From: Gamech Website <noreply@gamechltd.com>',
        'Reply-To: ' . $name . ' <' . $email . '>',
    ];

    $sent = wp_mail($recipients, $email_subject, $body, $headers);

    if ($sent) {
        // Rate-limit transient (60 seconds)
        set_transient($transient_key, 1, 60);

        // Auto-reply to sender
        $ar_subject = 'We received your message — Gamech';
        $ar_body    = "Hi {$name},\n\nThank you for reaching out to Gamech! We've received your message and will get back to you within 2 business hours.\n\nYour enquiry:\nSubject: {$subject}\n\nIf this is urgent, please WhatsApp us or use our live chat.\n\nWarm regards,\nThe Gamech Team\ninfo@gamechltd.com\n";
        wp_mail($email, $ar_subject, $ar_body, ['Content-Type: text/plain; charset=UTF-8', 'From: Gamech <info@gamechltd.com>']);

        wp_send_json_success(['message' => "Thank you, {$name}! Your message has been sent. We'll be in touch within 2 hours."]);
    } else {
        wp_send_json_error(['message' => 'There was a problem sending your message. Please email us directly at info@gamechltd.com.']);
    }
}


/* =====================================================
   ENQUEUE ASSETS
   ===================================================== */
add_action('wp_enqueue_scripts', 'gamechcustomtheme_enqueue_scripts');

function gamechcustomtheme_enqueue_scripts()
{
    // Main stylesheet
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Modular CSS files
    wp_enqueue_style('base-style',                  get_template_directory_uri() . '/assets/css/base.css',                   [], time());
    wp_enqueue_style('nav-style',                   get_template_directory_uri() . '/assets/css/nav.css',                    [], time());
    wp_enqueue_style('hero-style',                  get_template_directory_uri() . '/assets/css/hero.css',                   [], time());
    wp_enqueue_style('about-style',                 get_template_directory_uri() . '/assets/css/about.css',                  [], time());
    wp_enqueue_style('blog-style',                  get_template_directory_uri() . '/assets/css/blog.css',                   [], time());
    wp_enqueue_style('single-post-style',           get_template_directory_uri() . '/assets/css/single-post.css',           [], time());
    wp_enqueue_style('our-service-style',           get_template_directory_uri() . '/assets/css/our-service.css',           [], time());
    wp_enqueue_style('contact-interactive-style',   get_template_directory_uri() . '/assets/css/contact-interactive.css',   [], time());
    wp_enqueue_style('services-professional-style', get_template_directory_uri() . '/assets/css/services-professional.css', [], time());
    wp_enqueue_style('about-snapshot-style',        get_template_directory_uri() . '/assets/css/about-snapshot.css',        [], time());
    wp_enqueue_style('global-presence-style',       get_template_directory_uri() . '/assets/css/global-presence.css',       [], time());
    wp_enqueue_style('footer-style',                get_template_directory_uri() . '/assets/css/footer.css',                 [], time());

    // JavaScript files
    wp_enqueue_script('script-js',               get_template_directory_uri() . '/assets/js/script.js',               [], time(), true);
    wp_enqueue_script('hero-slider-js',          get_template_directory_uri() . '/assets/js/hero-slider.js',          [], time(), true);
    wp_enqueue_script('about-snapshot-js',       get_template_directory_uri() . '/assets/js/about-snapshot.js',       [], time(), true);
    wp_enqueue_script('about-js',                get_template_directory_uri() . '/assets/js/about.js',                [], time(), true);
    wp_enqueue_script('blog-js',                 get_template_directory_uri() . '/assets/js/blog.js',                 [], time(), true);
    wp_enqueue_script('single-post-js',          get_template_directory_uri() . '/assets/js/single-post.js',         [], time(), true);
    wp_enqueue_script('service-overview-js',     get_template_directory_uri() . '/assets/js/service-overview.js',    [], time(), true);
    wp_enqueue_script('services-professional-js', get_template_directory_uri() . '/assets/js/services-professional.js', [], time(), true);
    wp_enqueue_script('contact-interactive-js',  get_template_directory_uri() . '/assets/js/contact-interactive.js', [], time(), true);
    wp_enqueue_script('global-presence-js',      get_template_directory_uri() . '/assets/js/global-presence.js',     [], time(), true);

    // Pass ajaxurl to contact JS
    wp_localize_script(
        'contact-interactive-js',
        'gamechAjax',
        ['ajaxurl' => admin_url('admin-ajax.php')]
    );
}


/* =====================================================
   THEME SETUP
   ===================================================== */
add_action('after_setup_theme', 'gamechcustomtheme_setup');

function gamechcustomtheme_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption']);

    register_nav_menus([
        'primary' => __('Primary Menu', 'gamech'),
        'footer'  => __('Footer Menu',  'gamech'),
    ]);
}


/* =====================================================
   CUSTOM LOGO
   ===================================================== */
add_action('after_setup_theme', 'gamechcustomtheme_custom_logo_setup');

function gamechcustomtheme_custom_logo_setup()
{
    add_theme_support('custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
}

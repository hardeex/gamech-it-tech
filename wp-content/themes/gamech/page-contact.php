<?php

/**
 * Template Name: Contact Page - Interactive
 *
 * NOTE: The AJAX handler (gamech_handle_contact_form) and all
 * asset enqueuing live in functions.php — NOT here.
 */

get_header();
?>

<!-- Hero Section -->
<section class="contact-hero">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content" data-aos="fade-up">
            <span class="hero-label">Get In Touch</span>
            <h1>Let's Start a <span class="highlight">Conversation</span></h1>
            <p class="hero-description">We're here to help bring your ideas to life. Reach out through any channel that works best for you—we're ready to listen and collaborate.</p>
        </div>
    </div>
</section>

<!-- Quick Contact Methods -->
<section class="quick-contact">
    <div class="container">
        <div class="quick-contact-grid">

            <a href="mailto:info@gamechltd.com" class="contact-method" data-aos="zoom-in" data-aos-delay="100">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Email Us</h3>
                    <p class="method-value">info@gamechltd.com</p>
                    <span class="method-cta">Send Email →</span>
                </div>
                <div class="method-badge">Most Popular</div>
            </a>

            <a href="tel:+2340123456789" class="contact-method" data-aos="zoom-in" data-aos-delay="200">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Call Us</h3>
                    <p class="method-value">+234 (0) 123 4567</p>
                    <span class="method-cta">Start Call →</span>
                </div>
            </a>

            <a href="https://wa.me/2341234567890" target="_blank" class="contact-method" data-aos="zoom-in" data-aos-delay="300">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                </div>
                <div class="method-content">
                    <h3>WhatsApp</h3>
                    <p class="method-value">Quick Response</p>
                    <span class="method-cta">Chat Now →</span>
                </div>
            </a>

            <a href="#contact-form-section" class="contact-method scroll-to-form" data-aos="zoom-in" data-aos-delay="400">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Send a Message</h3>
                    <p class="method-value">We reply in &lt; 2 hrs</p>
                    <span class="method-cta">Use Form →</span>
                </div>
                <div class="method-status">
                    <span class="status-dot"></span>
                    Available
                </div>
            </a>

        </div>
    </div>
</section>

<!-- =============================================
     CONTACT FORM SECTION
     ============================================= -->
<section class="contact-form-section" id="contact-form-section">
    <div class="container">
        <div class="form-section-inner">

            <!-- Left: Info Panel -->
            <div class="form-info-panel" data-aos="fade-right">
                <span class="section-label">Send a Message</span>
                <h2>Tell Us About<br>Your Project</h2>
                <p>Fill in the form and one of our team members will reach out within 2 business hours. For urgent enquiries, please use WhatsApp or call us directly.</p>

                <div class="form-info-list">
                    <div class="form-info-item">
                        <div class="form-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div>
                            <strong>Response within 2 hours</strong>
                            <span>During business hours</span>
                        </div>
                    </div>
                    <div class="form-info-item">
                        <div class="form-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div>
                            <strong>100% Confidential</strong>
                            <span>Your data stays private</span>
                        </div>
                    </div>
                    <div class="form-info-item">
                        <div class="form-info-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <strong>No obligation</strong>
                            <span>Free initial consultation</span>
                        </div>
                    </div>
                </div>

                <div class="form-direct-email">
                    <p>Prefer to email directly?</p>
                    <a href="mailto:info@gamechltd.com">info@gamechltd.com</a>
                </div>
            </div>

            <!-- Right: The Form -->
            <div class="form-card" data-aos="fade-left">

                <div id="form-success-message" class="form-success-msg" style="display:none;" role="alert" aria-live="polite">
                    <div class="success-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <h3>Message Sent!</h3>
                    <p id="form-success-text"></p>
                </div>

                <div id="form-error-message" class="form-error-msg" style="display:none;" role="alert" aria-live="polite">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span id="form-error-text"></span>
                </div>

                <form id="gamech-contact-form" novalidate>

                    <?php wp_nonce_field('gamech_contact_nonce', 'gamech_nonce'); ?>

                    <!-- Honeypot — off-screen, invisible to real users -->
                    <div aria-hidden="true" style="position:absolute;left:-9999px;height:0;overflow:hidden;" tabindex="-1">
                        <label for="website_url">Leave this field empty</label>
                        <input type="text" id="website_url" name="website_url" tabindex="-1" autocomplete="off" value="">
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact_name">Full Name <span class="required">*</span></label>
                            <input type="text" id="contact_name" name="contact_name"
                                placeholder="John Adeyemi" required
                                autocomplete="name" minlength="2" maxlength="100">
                            <span class="field-error" id="name-error"></span>
                        </div>
                        <div class="form-group">
                            <label for="contact_email">Email Address <span class="required">*</span></label>
                            <input type="email" id="contact_email" name="contact_email"
                                placeholder="john@company.com" required
                                autocomplete="email" maxlength="150">
                            <span class="field-error" id="email-error"></span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact_phone">Phone Number <span class="optional">(optional)</span></label>
                            <input type="tel" id="contact_phone" name="contact_phone"
                                placeholder="+234 800 000 0000"
                                autocomplete="tel" maxlength="30">
                        </div>
                        <div class="form-group">
                            <label for="contact_service">Service of Interest</label>
                            <div class="select-wrapper">
                                <select id="contact_service" name="contact_service">
                                    <option value="">Select a service…</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App Development">Mobile App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="IT Consulting">IT Consulting</option>
                                    <option value="Other">Other</option>
                                </select>
                                <svg class="select-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="contact_subject">Subject <span class="required">*</span></label>
                        <input type="text" id="contact_subject" name="contact_subject"
                            placeholder="How can we help you?" required maxlength="200">
                        <span class="field-error" id="subject-error"></span>
                    </div>

                    <div class="form-group">
                        <label for="contact_message">Your Message <span class="required">*</span></label>
                        <textarea id="contact_message" name="contact_message"
                            rows="6"
                            placeholder="Tell us about your project, goals, or questions…"
                            required minlength="20" maxlength="3000"></textarea>
                        <div class="char-counter"><span id="char-count">0</span> / 3000</div>
                        <span class="field-error" id="message-error"></span>
                    </div>

                    <div class="form-footer">
                        <p class="form-privacy">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            Your information is secure and will never be shared.
                        </p>
                        <button type="submit" id="submit-btn" class="btn-submit">
                            <span class="btn-text">Send Message</span>
                            <span class="btn-loading" style="display:none;">
                                <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="60" />
                                </svg>
                                Sending…
                            </span>
                            <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>

                </form>
            </div>

        </div>
    </div>
</section>

<!-- Office Locations -->
<section class="office-locations">
    <div class="container">
        <div class="locations-grid">

            <div class="location-card" data-aos="fade-up" data-aos-delay="200">
                <div class="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </div>
                <h3>Lagos, Nigeria</h3>
                <p class="location-address">45 Victoria Island<br>Lagos, Nigeria<br>West Africa</p>
                <div class="location-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Mon–Fri: 8AM – 5PM WAT</span>
                    </div>
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span>+234 (0) 123 4567</span>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=45+Victoria+Island+Lagos" target="_blank" class="location-cta">Get Directions →</a>
            </div>

            <div class="location-card" data-aos="fade-up" data-aos-delay="300">
                <div class="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                </div>
                <h3>London, UK</h3>
                <p class="location-address">88 Tech Street<br>London, EC1A 1BB<br>United Kingdom</p>
                <div class="location-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>Mon–Fri: 9AM – 5PM GMT</span>
                    </div>
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span>+44 20 1234 5678</span>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=88+Tech+Street+London" target="_blank" class="location-cta">Get Directions →</a>
            </div>

        </div>
    </div>
</section>

<!-- Availability Section -->
<section class="availability-section">
    <div class="container">
        <div class="availability-content" data-aos="fade-up">
            <div class="availability-stats">
                <div class="stat-item">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                    </div>
                    <div class="stat-content">
                        <h3>&lt; 2 Hours</h3>
                        <p>Average Response Time</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <div class="stat-content">
                        <h3>24/7</h3>
                        <p>Support Available</p>
                    </div>
                </div>
                <div class="stat-item">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <div class="stat-content">
                        <h3>Global</h3>
                        <p>Timezone Coverage</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-section">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">Common Questions</span>
            <h2>Quick Answers</h2>
            <p class="section-subtitle">Find instant answers to frequently asked questions</p>
        </div>
        <div class="faq-grid">
            <div class="faq-item" data-aos="fade-up" data-aos-delay="100">
                <h3>What are your business hours?</h3>
                <p>We operate 24/7 with offices across multiple time zones. Our Lagos office is open Mon–Fri 8AM–5PM WAT and our London office Mon–Fri 9AM–5PM GMT, with extended support available globally.</p>
            </div>
            <div class="faq-item" data-aos="fade-up" data-aos-delay="200">
                <h3>How quickly do you respond?</h3>
                <p>We aim to respond to all inquiries within 2 hours during business hours. For urgent matters, use our WhatsApp or live chat for immediate assistance.</p>
            </div>
            <div class="faq-item" data-aos="fade-up" data-aos-delay="300">
                <h3>Do you offer remote consultations?</h3>
                <p>Yes! We conduct consultations via video call, phone, or our secure online platform. Distance is never a barrier to great service.</p>
            </div>
            <div class="faq-item" data-aos="fade-up" data-aos-delay="400">
                <h3>Which office should I contact?</h3>
                <p>Contact any office—we're all connected! Choose the one closest to your timezone for a faster response, but any office can assist you equally well.</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
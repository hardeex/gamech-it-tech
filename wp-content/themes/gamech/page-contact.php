<?php
/* Template Name: Contact Page - Interactive */
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
            <!-- Email -->
            <a href="mailto:hello@gamech.com" class="contact-method" data-aos="zoom-in" data-aos-delay="100">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Email Us</h3>
                    <p class="method-value">hello@gamech.com</p>
                    <span class="method-cta">Send Email →</span>
                </div>
                <div class="method-badge">Most Popular</div>
            </a>
            
            <!-- Phone -->
            <a href="tel:+1234567890" class="contact-method" data-aos="zoom-in" data-aos-delay="200">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Call Us</h3>
                    <p class="method-value">+1 (234) 567-890</p>
                    <span class="method-cta">Start Call →</span>
                </div>
            </a>
            
            <!-- WhatsApp -->
            <a href="https://wa.me/1234567890" target="_blank" class="contact-method" data-aos="zoom-in" data-aos-delay="300">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                    </svg>
                </div>
                <div class="method-content">
                    <h3>WhatsApp</h3>
                    <p class="method-value">Quick Response</p>
                    <span class="method-cta">Chat Now →</span>
                </div>
            </a>
            
            <!-- Live Chat -->
            <a href="#" class="contact-method" data-aos="zoom-in" data-aos-delay="400" onclick="openLiveChat(); return false;">
                <div class="method-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                </div>
                <div class="method-content">
                    <h3>Live Chat</h3>
                    <p class="method-value">Online Now</p>
                    <span class="method-cta">Start Chat →</span>
                </div>
                <div class="method-status">
                    <span class="status-dot"></span>
                    Available
                </div>
            </a>
        </div>
    </div>
</section>

<!-- Office Locations with Interactive Cards -->
<section class="office-locations">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">Our Offices</span>
            <h2>Global Presence, Local Expertise</h2>
            <p class="section-subtitle">Visit us at any of our offices worldwide or connect with us remotely</p>
        </div>
        
        <div class="locations-grid">
            <!-- Headquarters -->
            <div class="location-card headquarters" data-aos="fade-up" data-aos-delay="100">
                <div class="location-badge">Headquarters</div>
                <div class="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>San Francisco, USA</h3>
                <p class="location-address">
                    123 Tech Boulevard<br>
                    San Francisco, CA 94102<br>
                    United States
                </p>
                <div class="location-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>Mon-Fri: 9AM - 6PM PST</span>
                    </div>
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        <span>+1 (234) 567-8901</span>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=123+Tech+Boulevard+San+Francisco" target="_blank" class="location-cta">
                    Get Directions →
                </a>
            </div>
            
            <!-- Lagos Office -->
            <div class="location-card" data-aos="fade-up" data-aos-delay="200">
                <div class="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>Lagos, Nigeria</h3>
                <p class="location-address">
                    45 Victoria Island<br>
                    Lagos, Nigeria<br>
                    West Africa
                </p>
                <div class="location-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>Mon-Fri: 8AM - 5PM WAT</span>
                    </div>
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        <span>+234 (0) 123 4567</span>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=45+Victoria+Island+Lagos" target="_blank" class="location-cta">
                    Get Directions →
                </a>
            </div>
            
            <!-- London Office -->
            <div class="location-card" data-aos="fade-up" data-aos-delay="300">
                <div class="location-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>London, UK</h3>
                <p class="location-address">
                    88 Tech Street<br>
                    London, EC1A 1BB<br>
                    United Kingdom
                </p>
                <div class="location-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>Mon-Fri: 9AM - 5PM GMT</span>
                    </div>
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        <span>+44 20 1234 5678</span>
                    </div>
                </div>
                <a href="https://maps.google.com/?q=88+Tech+Street+London" target="_blank" class="location-cta">
                    Get Directions →
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Interactive Map Section -->
<section class="map-section">
    <div class="map-container">
        <div id="google-map" class="google-map"></div>
        
        <!-- Map Overlay Controls -->
        <div class="map-controls" data-aos="fade-right">
            <div class="map-control-header">
                <h3>Select Office</h3>
                <p>Click to view on map</p>
            </div>
            <div class="office-selector">
                <button class="office-button active" data-lat="37.7749" data-lng="-122.4194" data-office="San Francisco">
                    <span class="office-dot"></span>
                    <div>
                        <strong>San Francisco</strong>
                        <small>Headquarters</small>
                    </div>
                </button>
                <button class="office-button" data-lat="6.5244" data-lng="3.3792" data-office="Lagos">
                    <span class="office-dot"></span>
                    <div>
                        <strong>Lagos</strong>
                        <small>West Africa Hub</small>
                    </div>
                </button>
                <button class="office-button" data-lat="51.5074" data-lng="-0.1278" data-office="London">
                    <span class="office-dot"></span>
                    <div>
                        <strong>London</strong>
                        <small>Europe Hub</small>
                    </div>
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Social Media & Connect -->
<section class="social-connect">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">Stay Connected</span>
            <h2>Follow Our Journey</h2>
            <p class="section-subtitle">Join our community and stay updated with our latest projects, insights, and innovations</p>
        </div>
        
        <div class="social-grid">
            <a href="https://linkedin.com/company/gamech" target="_blank" class="social-card" data-aos="zoom-in" data-aos-delay="100">
                <div class="social-icon linkedin">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </div>
                <div class="social-content">
                    <h3>LinkedIn</h3>
                    <p>Professional updates & insights</p>
                    <span class="social-followers">5.2K followers</span>
                </div>
            </a>
            
            <a href="https://twitter.com/gamech" target="_blank" class="social-card" data-aos="zoom-in" data-aos-delay="200">
                <div class="social-icon twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                </div>
                <div class="social-content">
                    <h3>Twitter</h3>
                    <p>Latest news & announcements</p>
                    <span class="social-followers">3.8K followers</span>
                </div>
            </a>
            
            <a href="https://github.com/gamech" target="_blank" class="social-card" data-aos="zoom-in" data-aos-delay="300">
                <div class="social-icon github">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                </div>
                <div class="social-content">
                    <h3>GitHub</h3>
                    <p>Open source projects</p>
                    <span class="social-followers">1.2K stars</span>
                </div>
            </a>
            
            <a href="https://instagram.com/gamech" target="_blank" class="social-card" data-aos="zoom-in" data-aos-delay="400">
                <div class="social-icon instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                </div>
                <div class="social-content">
                    <h3>Instagram</h3>
                    <p>Behind the scenes</p>
                    <span class="social-followers">4.5K followers</span>
                </div>
            </a>
        </div>
    </div>
</section>

<!-- Response Time & Availability -->
<section class="availability-section">
    <div class="container">
        <div class="availability-content" data-aos="fade-up">
            <div class="availability-stats">
                <div class="stat-item">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                    <div class="stat-content">
                        <h3>< 2 Hours</h3>
                        <p>Average Response Time</p>
                    </div>
                </div>
                
                <div class="stat-item">
                    <div class="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
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

<!-- FAQ Section (Quick Answers) -->
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
                <p>We operate 24/7 with offices across multiple time zones. Our San Francisco HQ is open Mon-Fri 9AM-6PM PST, with extended support available globally.</p>
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
                <p>Contact any office—we're all connected! Choose the one closest to your timezone for faster response, but any office can assist you equally well.</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>

<script>
// Initialize Google Map
function initMap() {
    // Default center (San Francisco)
    const defaultCenter = { lat: 37.7749, lng: -122.4194 };
    
    const map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 12,
        center: defaultCenter,
        styles: [
            {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f8f9fa' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#c9d6e3' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#e9ecef' }]
            }
        ]
    });
    
    // Office locations
    const offices = [
        { lat: 37.7749, lng: -122.4194, title: 'San Francisco HQ' },
        { lat: 6.5244, lng: 3.3792, title: 'Lagos Office' },
        { lat: 51.5074, lng: -0.1278, title: 'London Office' }
    ];
    
    // Add markers
    offices.forEach(office => {
        new google.maps.Marker({
            position: { lat: office.lat, lng: office.lng },
            map: map,
            title: office.title,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: '#922F16',
                fillOpacity: 1,
                strokeColor: '#ffffff',
                strokeWeight: 3
            }
        });
    });
    
    // Office selector buttons
    document.querySelectorAll('.office-button').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.office-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const lat = parseFloat(this.getAttribute('data-lat'));
            const lng = parseFloat(this.getAttribute('data-lng'));
            
            map.setCenter({ lat, lng });
            map.setZoom(14);
        });
    });
}

// Live chat function (integrate with your chat service)
function openLiveChat() {
    // Replace with your actual live chat integration
    console.log('Opening live chat...');
    alert('Live chat will be integrated with your preferred service (Intercom, Drift, etc.)');
}
</script>

<!-- Load Google Maps API -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
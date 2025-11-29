<?php
/* Template Name: Homepage */
get_header();
?>

<!-- HERO SECTION - Interactive with Image Slider -->
<section class="hero-section">
    <!-- Background Image Slider -->
    <div class="hero-background-slider">
        <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80');"></div>
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80');"></div>
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80');"></div>
        <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80');"></div>
        
        <!-- Dark Overlay -->
        <div class="hero-overlay"></div>
        
        <!-- Animated Shapes -->
        <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
        </div>
    </div>
    
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <span class="hero-label">Global IT Solutions Provider</span>
                <h1 class="hero-title">
                    Transforming Businesses Through 
                    <span class="text-rotate-wrapper">
                        <span class="text-rotate" data-words='["Innovation", "Technology", "Digital Solutions", "Excellence"]'>Innovation</span>
                    </span>
                </h1>
                <p class="hero-description">
                    We deliver cutting-edge technology services and products to clients across 
                    multiple countries. Accelerate your growth, improve efficiency, and navigate 
                    the digital world with confidence.
                </p>
                <div class="hero-buttons">
                    <a href="<?php echo home_url('/services'); ?>" class="btn btn-primary">
                        Explore Services
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                    </a>
                    <a href="<?php echo home_url('/contact'); ?>" class="btn btn-secondary">
                        Get In Touch
                    </a>
                </div>
                
                <!-- Stats Counter -->
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number" data-target="150">0</span>
                        <span class="stat-label">Global Clients</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" data-target="25">0</span>
                        <span class="stat-label">Countries</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" data-target="500">0</span>
                        <span class="stat-label">Projects Delivered</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" data-target="98">0</span>
                        <span class="stat-label">Client Satisfaction</span>
                    </div>
                </div>
            </div>
            
            <div class="hero-visual">
                <div class="hero-card hero-card-1">
                    <div class="card-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3>Secure</h3>
                    <p>Enterprise-grade security</p>
                </div>
                
                <div class="hero-card hero-card-2">
                    <div class="card-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3>Fast</h3>
                    <p>Lightning-speed delivery</p>
                </div>
                
                <div class="hero-card hero-card-3">
                    <div class="card-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3>Global</h3>
                    <p>Worldwide presence</p>
                </div>
                
                <!-- Floating Particles -->
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
                <div class="particle particle-5"></div>
            </div>
        </div>
    </div>
    
    <!-- Slider Controls -->
    <div class="slider-controls">
        <button class="slider-btn prev-btn" aria-label="Previous slide">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
        </button>
        <button class="slider-btn next-btn" aria-label="Next slide">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
        </button>
    </div>
    
    <!-- Slider Indicators -->
    <div class="slider-indicators">
        <span class="indicator active" data-slide="0"></span>
        <span class="indicator" data-slide="1"></span>
        <span class="indicator" data-slide="2"></span>
        <span class="indicator" data-slide="3"></span>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
        <span>Scroll to explore</span>
        <div class="scroll-arrow">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
        </div>
    </div>
</section>


<!-- ============================================
     ABOUT US SNAPSHOT SECTION 
     ============================================ -->
<?php get_template_part('about-snapshot-section'); ?>


<!-- ============================================
     OUR SERVICE SNAPSHOT SECTION 
     ============================================ -->

<?php get_template_part('our-service-snapshot'); ?>


<!-- ============================================
     GLOBAL PRESENCE SNAPSHOT SECTION 
     ============================================ -->

<?php get_template_part('global-presence-section'); ?>






<?php get_footer(); ?>
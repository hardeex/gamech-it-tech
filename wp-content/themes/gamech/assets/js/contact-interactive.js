/**
 * Interactive Contact Page Features
 * No form - focus on direct contact methods and interactivity
 */

(function() {
    'use strict';

    // Initialize all features when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initAOS();
        initContactMethods();
        initLocationCards();
        initScrollEffects();
        initSocialCards();
        initFAQInteractions();
    });

    /**
     * Initialize AOS (Animate On Scroll) Library
     */
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 900,
                easing: 'ease-out-cubic',
                once: true,
                offset: 120,
                delay: 50,
                anchorPlacement: 'top-bottom'
            });
        } else {
            // Dynamically load AOS if not present
            loadAOS();
        }
    }

    /**
     * Load AOS library dynamically
     */
    function loadAOS() {
        const aosCSS = document.createElement('link');
        aosCSS.rel = 'stylesheet';
        aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
        document.head.appendChild(aosCSS);
        
        const aosJS = document.createElement('script');
        aosJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
        aosJS.onload = function() {
            AOS.init({
                duration: 900,
                easing: 'ease-out-cubic',
                once: true,
                offset: 120,
                delay: 50
            });
        };
        document.body.appendChild(aosJS);
    }

    /**
     * Enhanced Contact Method Interactions
     */
    function initContactMethods() {
        const contactMethods = document.querySelectorAll('.contact-method');
        
        contactMethods.forEach(method => {
            // Add click tracking/analytics
            method.addEventListener('click', function(e) {
                const methodType = this.querySelector('h3').textContent;
                console.log('Contact method clicked:', methodType);
                
                // Optional: Track with analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'contact_method_click', {
                        'method_type': methodType
                    });
                }
            });
            
            // Enhanced hover effect
            method.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }

    /**
     * Location Cards Interactions
     */
    function initLocationCards() {
        const locationCards = document.querySelectorAll('.location-card');
        
        locationCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            // Track get directions clicks
            const directionsBtn = card.querySelector('.location-cta');
            if (directionsBtn) {
                directionsBtn.addEventListener('click', function(e) {
                    const office = card.querySelector('h3').textContent;
                    console.log('Directions requested for:', office);
                    
                    // Optional: Track with analytics
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'directions_click', {
                            'office_location': office
                        });
                    }
                });
            }
        });
    }

    /**
     * Social Media Cards Interactions
     */
    function initSocialCards() {
        const socialCards = document.querySelectorAll('.social-card');
        
        socialCards.forEach(card => {
            card.addEventListener('click', function(e) {
                const platform = this.querySelector('h3').textContent;
                console.log('Social platform clicked:', platform);
                
                // Optional: Track with analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'social_click', {
                        'platform': platform
                    });
                }
            });
            
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }

    /**
     * FAQ Interactions (Optional: Expandable)
     */
    function initFAQInteractions() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }

    /**
     * Scroll Effects
     */
    function initScrollEffects() {
        // Add progress indicator
        createProgressBar();
        
        // Parallax effect for hero background
        const heroBackground = document.querySelector('.contact-hero .hero-background');
        
        if (heroBackground) {
            window.addEventListener('scroll', throttle(function() {
                const scrolled = window.pageYOffset;
                const heroHeight = document.querySelector('.contact-hero').offsetHeight;
                
                if (scrolled < heroHeight) {
                    const parallaxSpeed = 0.5;
                    heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
                }
            }, 10), { passive: true });
        }
    }

    /**
     * Create scroll progress bar
     */
    function createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--brick), var(--light-brick));
            z-index: 9999;
            transition: width 0.1s ease-out;
            box-shadow: 0 2px 10px rgba(146, 47, 22, 0.3);
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', throttle(function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        }, 10), { passive: true });
    }

    /**
     * Copy to Clipboard Functionality (Optional Enhancement)
     */
    function initCopyToClipboard() {
        const emailElement = document.querySelector('.method-value');
        
        if (emailElement) {
            emailElement.addEventListener('click', function(e) {
                e.preventDefault();
                const text = this.textContent;
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        showNotification('Email copied to clipboard!');
                    });
                }
            });
        }
    }

    /**
     * Show notification toast
     */
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, var(--brick) 0%, #b8402a 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(146, 47, 22, 0.3);
            z-index: 10000;
            animation: slideInUp 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutDown 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    /**
     * Office Time Display (Show current time in each office)
     */
    function initOfficeTimeDisplay() {
        const offices = [
            { name: 'San Francisco', timezone: 'America/Los_Angeles' },
            { name: 'Lagos', timezone: 'Africa/Lagos' },
            { name: 'London', timezone: 'Europe/London' }
        ];
        
        function updateTimes() {
            offices.forEach(office => {
                const time = new Date().toLocaleTimeString('en-US', {
                    timeZone: office.timezone,
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                // Find the location card and update time display
                const locationCards = document.querySelectorAll('.location-card h3');
                locationCards.forEach(card => {
                    if (card.textContent.includes(office.name)) {
                        const parent = card.closest('.location-card');
                        let timeDisplay = parent.querySelector('.office-time');
                        
                        if (!timeDisplay) {
                            timeDisplay = document.createElement('div');
                            timeDisplay.className = 'office-time';
                            timeDisplay.style.cssText = `
                                margin-top: 10px;
                                padding: 8px 14px;
                                background: rgba(146, 47, 22, 0.1);
                                border-radius: 8px;
                                font-size: 13px;
                                color: var(--brick);
                                font-weight: 600;
                            `;
                            parent.querySelector('.location-details').appendChild(timeDisplay);
                        }
                        
                        timeDisplay.textContent = `Local Time: ${time}`;
                    }
                });
            });
        }
        
        updateTimes();
        setInterval(updateTimes, 60000); // Update every minute
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Performance Optimization: Throttle Function
     */
    function throttle(func, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall < delay) return;
            lastCall = now;
            return func.apply(this, args);
        };
    }

    /**
     * Performance Optimization: Debounce Function
     */
    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    /**
     * Initialize Map Interactions (Enhanced)
     */
    function enhanceMapInteractions() {
        const officeButtons = document.querySelectorAll('.office-button');
        
        officeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const office = this.getAttribute('data-office');
                console.log('Office selected on map:', office);
                
                // Optional: Track with analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'map_office_select', {
                        'office_name': office
                    });
                }
            });
        });
    }

    /**
     * Add CSS animations
     */
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInUp {
                from {
                    transform: translateY(100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutDown {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(100px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Handle window resize events
     */
    window.addEventListener('resize', debounce(function() {
        // Refresh AOS on resize
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250));

    /**
     * Initialize additional features on window load
     */
    window.addEventListener('load', function() {
        initSmoothScroll();
        initCopyToClipboard();
        initOfficeTimeDisplay();
        enhanceMapInteractions();
        addAnimationStyles();
    });

    /**
     * Prevent layout shift
     */
    function preventLayoutShift() {
        const heroSection = document.querySelector('.contact-hero');
        if (heroSection) {
            heroSection.style.minHeight = '70vh';
        }
    }

    preventLayoutShift();

})();
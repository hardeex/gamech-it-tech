/**
 * Professional About Page Interactive Features -
 * Enhanced animations with readable content on load
 */

(function() {
    'use strict';

    // Initialize all features when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initAOS();
        initCounters();
        initParallax();
        initScrollEffects();
        initIntersectionObservers();
        initSmoothScroll();
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
     * Animated Counter for Statistics
     */
    function initCounters() {
        const counters = document.querySelectorAll('.metric-value');
        
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;
            const increment = target / steps;
            
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, stepDuration);
        };
        
        // Use Intersection Observer for counter animation trigger
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Parallax Scrolling Effect for Hero Section
     */
    function initParallax() {
        const heroBackground = document.querySelector('.hero-background');
        
        if (!heroBackground) return;
        
        const handleParallax = throttle(function() {
            const scrolled = window.pageYOffset;
            const heroHeight = document.querySelector('.about-hero-pro').offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, 10);
        
        window.addEventListener('scroll', handleParallax, { passive: true });
    }

    /**
     * Advanced Scroll Effects
     */
    function initScrollEffects() {
        // Fade effect for scroll prompt
        const scrollPrompt = document.querySelector('.scroll-prompt');
        
        if (scrollPrompt) {
            window.addEventListener('scroll', throttle(function() {
                const scrolled = window.pageYOffset;
                const fadeStart = 100;
                const fadeEnd = 400;
                
                if (scrolled <= fadeStart) {
                    scrollPrompt.style.opacity = '1';
                } else if (scrolled >= fadeEnd) {
                    scrollPrompt.style.opacity = '0';
                } else {
                    const opacity = 1 - ((scrolled - fadeStart) / (fadeEnd - fadeStart));
                    scrollPrompt.style.opacity = opacity;
                }
            }, 10), { passive: true });
        }
        
        // Add progress indicator
        createProgressBar();
    }

    /**
     * Create and manage scroll progress bar
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
     * Intersection Observers for Enhanced Animations
     * IMPROVED: Value cards are visible by default, only add subtle enhancements on scroll
     */
    function initIntersectionObservers() {
        // Service cards hover effect enhancement
        const serviceCards = document.querySelectorAll('.service-item');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
        
        // Mission/Vision cards interaction
        const mvCards = document.querySelectorAll('.mv-block');
        mvCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
        
        // Timeline items sequential reveal
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 100);
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            item.style.transition = 'all 0.6s ease-out';
            timelineObserver.observe(item);
        });
        
        // Value cards 
        const valueCards = document.querySelectorAll('.value-card');
        const valueObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && !entry.target.classList.contains('value-animated')) {
                    entry.target.classList.add('value-animated');
                    // Subtle pulse effect on first view
                    setTimeout(() => {
                        entry.target.style.transform = 'scale(1.03)';
                        setTimeout(() => {
                            entry.target.style.transform = 'scale(1)';
                        }, 200);
                    }, index * 80);
                    valueObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px'
        });
        
        valueCards.forEach(card => {
            // Cards are visible by default (no initial hiding)
            card.style.transition = 'all 0.3s ease-out';
            valueObserver.observe(card);
        });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        // Scroll to content when clicking scroll prompt
        const scrollPrompt = document.querySelector('.scroll-prompt');
        if (scrollPrompt) {
            scrollPrompt.addEventListener('click', function() {
                const targetSection = document.querySelector('.mission-vision-pro');
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
        
        // Handle all anchor links
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
     * Add subtle mouse parallax effect to hero content
     */
    function initMouseParallax() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        document.addEventListener('mousemove', throttle(function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            heroContent.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        }, 50));
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
     * Lazy Load Images 
     */
    function initLazyLoad() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }

    /**
     * Add active state to navigation on scroll
     */
    function initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', throttle(function() {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(link => {
                        link.classList.add('active');
                    });
                } else {
                    document.querySelectorAll(`.nav-link[href*="${sectionId}"]`).forEach(link => {
                        link.classList.remove('active');
                    });
                }
            });
        }, 100), { passive: true });
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
        initLazyLoad();
        initMouseParallax();
        initScrollSpy();
    });

    /**
     * Prevent layout shift by setting min-heights
     */
    function preventLayoutShift() {
        const heroSection = document.querySelector('.about-hero-pro');
        if (heroSection) {
            heroSection.style.minHeight = '100vh';
        }
    }

    preventLayoutShift();

})();
// ===================================
// CORE SERVICES OVERVIEW - JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120,
            delay: 100
        });
    }
    
    // ===================================
    // SERVICE CARDS INTERACTIVE EFFECTS
    // ===================================
    
    const serviceCards = document.querySelectorAll('.service-card:not(.featured-cta-card)');
    
    serviceCards.forEach(card => {
        const cardInner = card.querySelector('.service-card-inner');
        const hoverEffect = card.querySelector('.service-hover-effect');
        
        // 3D Tilt Effect on Mouse Move
        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;
                
                cardInner.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateY(-10px)
                `;
                
                // Move hover effect with mouse
                if (hoverEffect) {
                    hoverEffect.style.background = `
                        radial-gradient(
                            circle at ${x}px ${y}px,
                            rgba(146, 47, 22, 0.08),
                            rgba(10, 14, 41, 0.02)
                        )
                    `;
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            cardInner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        // Ripple Effect on Click
        card.addEventListener('click', function(e) {
            if (e.target.closest('.service-link')) return;
            
            const ripple = document.createElement('div');
            ripple.className = 'card-ripple';
            
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(146, 47, 22, 0.1);
                top: ${y}px;
                left: ${x}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 10;
            `;
            
            card.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===================================
    // FEATURE BADGES STAGGER ANIMATION
    // ===================================
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const badges = entry.target.querySelectorAll('.feature-badge');
                badges.forEach((badge, index) => {
                    setTimeout(() => {
                        badge.style.opacity = '0';
                        badge.style.transform = 'translateY(10px) scale(0.8)';
                        badge.style.transition = 'all 0.4s ease';
                        
                        setTimeout(() => {
                            badge.style.opacity = '1';
                            badge.style.transform = 'translateY(0) scale(1)';
                        }, 50);
                    }, index * 100);
                });
                badgeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(card => {
        const featuresContainer = card.querySelector('.service-features');
        if (featuresContainer) {
            badgeObserver.observe(featuresContainer);
        }
    });
    
    // ===================================
    // ICON ANIMATION ON SCROLL
    // ===================================
    
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icon = entry.target.querySelector('.service-icon');
                if (icon) {
                    icon.style.transform = 'rotate(0deg) scale(0)';
                    setTimeout(() => {
                        icon.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        icon.style.transform = 'rotate(360deg) scale(1)';
                    }, 100);
                }
                iconObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(card => {
        const iconWrapper = card.querySelector('.service-icon-wrapper');
        if (iconWrapper) {
            iconObserver.observe(iconWrapper);
        }
    });
    
    // ===================================
    // PARALLAX EFFECT ON SCROLL
    // ===================================
    
    const servicesSection = document.querySelector('.services-overview');
    const bgShapes = document.querySelectorAll('.bg-shape');
    
    if (servicesSection && bgShapes.length > 0 && window.innerWidth > 768) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const sectionTop = servicesSection.offsetTop;
                    const sectionHeight = servicesSection.offsetHeight;
                    
                    if (scrolled > sectionTop - window.innerHeight && 
                        scrolled < sectionTop + sectionHeight) {
                        
                        const relativeScroll = scrolled - sectionTop;
                        
                        bgShapes.forEach((shape, index) => {
                            const speed = 0.1 * (index + 1);
                            const yPos = relativeScroll * speed;
                            shape.style.transform = `translateY(${yPos}px)`;
                        });
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // ===================================
    // MAGNETIC BUTTON EFFECT
    // ===================================
    
    const buttons = document.querySelectorAll('.services-overview .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            if (window.innerWidth > 768) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-2px)`;
            }
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = '';
        });
    });
    
    // ===================================
    // FEATURED CARD SPECIAL EFFECTS
    // ===================================
    
    const featuredCard = document.querySelector('.featured-cta-card');
    
    if (featuredCard) {
        // Gradient animation on hover
        featuredCard.addEventListener('mousemove', function(e) {
            const rect = featuredCard.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            featuredCard.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    #a83a20,
                    var(--brick)
                )
            `;
        });
        
        featuredCard.addEventListener('mouseleave', function() {
            featuredCard.style.background = 'linear-gradient(135deg, var(--brick), #a83a20)';
        });
        
        // Floating animation for featured icon
        const featuredIcon = featuredCard.querySelector('.featured-icon');
        if (featuredIcon) {
            let floatY = 0;
            let floatDirection = 1;
            
            setInterval(() => {
                floatY += 0.3 * floatDirection;
                if (floatY > 5 || floatY < -5) {
                    floatDirection *= -1;
                }
                featuredIcon.style.transform = `translateY(${floatY}px)`;
            }, 50);
        }
    }
    
    // ===================================
    // SERVICE LINK ANIMATION
    // ===================================
    
    const serviceLinks = document.querySelectorAll('.service-link');
    
    serviceLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const span = this.querySelector('span');
            if (span && window.innerWidth > 768) {
                span.style.transition = 'transform 0.3s ease';
                span.style.transform = 'translateX(-5px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            const span = this.querySelector('span');
            if (span) {
                span.style.transform = 'translateX(0)';
            }
        });
    });
    
    // ===================================
    // INTERSECTION OBSERVER FOR CARDS
    // ===================================
    
    const cardAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                cardAnimationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardAnimationObserver.observe(card);
    });
    
    // ===================================
    // PERFORMANCE: DEBOUNCE FUNCTION
    // ===================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ===================================
    // RESPONSIVE ADJUSTMENTS
    // ===================================
    
    const handleResize = debounce(() => {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Disable complex animations on mobile
            serviceCards.forEach(card => {
                const cardInner = card.querySelector('.service-card-inner');
                if (cardInner) {
                    cardInner.style.transform = '';
                }
            });
            
            // Disable parallax on mobile
            bgShapes.forEach(shape => {
                shape.style.transform = '';
            });
        }
    }, 250);
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // ===================================
    // SECTION HEADER ANIMATION
    // ===================================
    
    const sectionHeader = document.querySelector('.services-overview .section-header');
    
    if (sectionHeader) {
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const label = entry.target.querySelector('.section-label');
                    const title = entry.target.querySelector('.section-title');
                    const description = entry.target.querySelector('.section-description');
                    
                    if (label) {
                        label.style.opacity = '0';
                        label.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            label.style.transition = 'all 0.6s ease';
                            label.style.opacity = '1';
                            label.style.transform = 'translateY(0)';
                        }, 100);
                    }
                    
                    if (title) {
                        title.style.opacity = '0';
                        title.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            title.style.transition = 'all 0.6s ease';
                            title.style.opacity = '1';
                            title.style.transform = 'translateY(0)';
                        }, 200);
                    }
                    
                    if (description) {
                        description.style.opacity = '0';
                        description.style.transform = 'translateY(-20px)';
                        setTimeout(() => {
                            description.style.transition = 'all 0.6s ease';
                            description.style.opacity = '1';
                            description.style.transform = 'translateY(0)';
                        }, 300);
                    }
                    
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        headerObserver.observe(sectionHeader);
    }
    
    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Keyboard navigation for cards
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const link = this.querySelector('.service-link');
                if (link) {
                    link.click();
                }
            }
        });
        
        // Focus indicators
        card.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--brick)';
            this.style.outlineOffset = '5px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // ===================================
    // SMOOTH SCROLL FOR SERVICE LINKS
    // ===================================
    
    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // ===================================
    // CARD COUNTER ANIMATION
    // ===================================
    
    const servicesGridEl = document.querySelector('.services-grid');
    
    if (servicesGridEl) {
        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    
                    cards.forEach((card, index) => {
                        // Add sequential number labels (optional visual enhancement)
                        const numberLabel = document.createElement('div');
                        numberLabel.className = 'card-number';
                        numberLabel.textContent = `0${index + 1}`;
                        numberLabel.style.cssText = `
                            position: absolute;
                            top: 20px;
                            right: 20px;
                            font-size: 48px;
                            font-weight: 900;
                            color: rgba(10, 14, 41, 0.03);
                            font-family: var(--font-heading);
                            pointer-events: none;
                            z-index: 0;
                        `;
                        
                        const cardFront = card.querySelector('.service-front');
                        if (cardFront && !card.classList.contains('featured-cta-card')) {
                            cardFront.appendChild(numberLabel);
                        }
                    });
                    
                    gridObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        gridObserver.observe(servicesGridEl);
    }
    
});

// ===================================
// PRELOAD OPTIMIZATION
// ===================================

window.addEventListener('load', function() {
    // Add loaded class for any CSS transitions
    const servicesSection = document.querySelector('.services-overview');
    if (servicesSection) {
        servicesSection.classList.add('loaded');
    }
});
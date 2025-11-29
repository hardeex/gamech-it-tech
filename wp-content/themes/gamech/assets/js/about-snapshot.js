// ===================================
// ABOUT US SNAPSHOT - JAVASCRIPT
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }


  
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe visual cards
    const visualCards = document.querySelectorAll('.visual-card');
    visualCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // ===================================
    // FLOATING BADGE PARALLAX EFFECT
    // ===================================
    
    const floatingBadge = document.querySelector('.floating-badge');
    
    if (floatingBadge && window.innerWidth > 768) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const aboutSection = document.querySelector('.about-snapshot');
                    
                    if (aboutSection) {
                        const sectionTop = aboutSection.offsetTop;
                        const sectionHeight = aboutSection.offsetHeight;
                        const sectionBottom = sectionTop + sectionHeight;
                        
                        if (scrolled > sectionTop && scrolled < sectionBottom) {
                            const relativeScroll = scrolled - sectionTop;
                            const movement = relativeScroll * 0.05;
                            floatingBadge.style.transform = `translateY(calc(-50% + ${movement}px))`;
                        }
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // ===================================
    // TECH ICONS HOVER EFFECT
    // ===================================
    
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
    
    // ===================================
    // HIGHLIGHT ITEMS STAGGER ANIMATION
    // ===================================
    
    const staggerHighlights = () => {
        const highlights = document.querySelectorAll('.highlight-item');
        
        highlights.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-30px)';
                item.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 50);
            }, index * 150);
        });
    };
    
    // Observer for stagger animation
    const aboutSection = document.querySelector('.about-snapshot');
    if (aboutSection) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerHighlights();
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        sectionObserver.observe(aboutSection);
    }
    
    // ===================================
    // VISUAL CARDS MOUSE TRACKING
    // ===================================
    
    visualCards.forEach(card => {
        if (window.innerWidth > 768) {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        }
    });
    
    // ===================================
    // STAT CARDS NUMBER ANIMATION
    // ===================================
    
    const animateStatNumbers = () => {
        const statValues = document.querySelectorAll('.stat-value');
        
        statValues.forEach(stat => {
            const target = stat.textContent.replace('+', '');
            const isPercentage = stat.textContent.includes('%');
            const hasPlus = stat.textContent.includes('+');
            let current = 0;
            const increment = Math.ceil(target / 50);
            const duration = 2000;
            const stepTime = duration / (target / increment);
            
            const updateNumber = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = current + (hasPlus ? '+' : '');
                    setTimeout(updateNumber, stepTime);
                } else {
                    stat.textContent = target + (hasPlus ? '+' : '');
                }
            };
            
            updateNumber();
        });
    };
    
    // Trigger number animation on scroll
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStatNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statCards.forEach(card => statsObserver.observe(card));
    }
    
    // ===================================
    // DECORATIVE SHAPES ANIMATION
    // ===================================
    
    const decorations = document.querySelectorAll('.visual-decoration');
    
    decorations.forEach((decoration, index) => {
        let angle = 0;
        const radius = 10;
        const speed = 0.02 * (index + 1);
        
        const animate = () => {
            angle += speed;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            decoration.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
        };
        
        if (window.innerWidth > 768) {
            animate();
        }
    });
    
    // ===================================
    // SMOOTH SCROLL FOR CTA BUTTON
    // ===================================
    
    const ctaButton = document.querySelector('.about-cta .btn-primary');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // ===================================
    // BACKGROUND SHAPES PARALLAX
    // ===================================
    
    const aboutShapes = document.querySelectorAll('.about-shape');
    
    if (aboutShapes.length > 0 && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            aboutShapes.forEach((shape, index) => {
                const speed = 0.1 * (index + 1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // ===================================
    // RESPONSIVE ADJUSTMENTS
    // ===================================
    
    const handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Remove complex animations on mobile for performance
            visualCards.forEach(card => {
                card.style.transform = '';
            });
            
            if (floatingBadge) {
                floatingBadge.style.transform = '';
            }
        }
    };
    
    window.addEventListener('resize', debounce(handleResize, 250));
    handleResize(); // Initial call
    
    // ===================================
    // UTILITY: DEBOUNCE FUNCTION
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
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Add keyboard navigation for tech icons
    techIcons.forEach(icon => {
        icon.setAttribute('tabindex', '0');
        
        icon.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Ensure all interactive elements have proper focus styles
    const interactiveElements = document.querySelectorAll('.about-snapshot a, .about-snapshot button');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--brick)';
            this.style.outlineOffset = '3px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
});

// ===================================
// PRELOAD IMAGES FOR BETTER PERFORMANCE
// ===================================

window.addEventListener('load', function() {
    const images = document.querySelectorAll('.about-snapshot img');
    images.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        } else {
            img.classList.add('loaded');
        }
    });
});
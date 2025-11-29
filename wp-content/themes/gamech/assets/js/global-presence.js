// ===================================
// GLOBAL PRESENCE & VALUE PROPOSITION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120
        });
    }
    
    // ===================================
    // OFFICE LOCATION DATA
    // ===================================
    
    const officeData = {
        usa: {
            name: 'United States',
            city: 'New York',
            address: '350 Fifth Avenue, New York, NY 10118',
            status: 'Active',
            type: 'Regional Office'
        },
        uk: {
            name: 'United Kingdom',
            city: 'London',
            address: '1 Canada Square, Canary Wharf, London E14 5AB',
            status: 'Active',
            type: 'Regional Office'
        },
        germany: {
            name: 'Germany',
            city: 'Berlin',
            address: 'Potsdamer Platz 1, 10785 Berlin',
            status: 'Active',
            type: 'Regional Office'
        },
        india: {
            name: 'India',
            city: 'Bangalore',
            address: 'MG Road, Bangalore, Karnataka 560001',
            status: 'Active',
            type: 'Development Center'
        },
        singapore: {
            name: 'Singapore',
            city: 'Singapore',
            address: '1 Marina Boulevard, Singapore 018989',
            status: 'Active',
            type: 'Regional Office'
        },
        japan: {
            name: 'Japan',
            city: 'Tokyo',
            address: 'Shibuya, Tokyo 150-0002',
            status: 'Active',
            type: 'Partner Location'
        },
        australia: {
            name: 'Australia',
            city: 'Sydney',
            address: '200 George St, Sydney NSW 2000',
            status: 'Active',
            type: 'Regional Office'
        },
        nigeria: {
            name: 'Nigeria',
            city: 'Lagos',
            address: 'Victoria Island, Lagos',
            status: 'Active',
            type: 'Headquarters'
        }
    };
    
    // ===================================
    // INTERACTIVE MAP FUNCTIONALITY
    // ===================================
    
    const officeMarkers = document.querySelectorAll('.office-marker');
    const officeTooltip = document.getElementById('officeTooltip');
    
    officeMarkers.forEach(marker => {
        // Hover effect
        marker.addEventListener('mouseenter', function() {
            const officeId = this.getAttribute('data-office');
            showOfficeTooltip(officeId, this);
        });
        
        marker.addEventListener('mouseleave', function() {
            hideOfficeTooltip();
        });
        
        // Click effect
        marker.addEventListener('click', function() {
            const officeId = this.getAttribute('data-office');
            highlightOffice(officeId, this);
        });
        
        // Keyboard accessibility
        marker.setAttribute('tabindex', '0');
        marker.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const officeId = this.getAttribute('data-office');
                highlightOffice(officeId, this);
            }
        });
    });
    
    function showOfficeTooltip(officeId, element) {
        if (!officeData[officeId] || !officeTooltip) return;
        
        const data = officeData[officeId];
        const rect = element.getBoundingClientRect();
        const mapWrapper = document.querySelector('.map-wrapper');
        const mapRect = mapWrapper.getBoundingClientRect();
        
        // Update tooltip content
        officeTooltip.querySelector('.tooltip-title').textContent = `${data.city}, ${data.name}`;
        officeTooltip.querySelector('.tooltip-address').textContent = data.type;
        
        // Position tooltip
        const tooltipX = rect.left - mapRect.left + rect.width / 2;
        const tooltipY = rect.top - mapRect.top - 20;
        
        officeTooltip.style.left = `${tooltipX}px`;
        officeTooltip.style.top = `${tooltipY}px`;
        officeTooltip.classList.add('active');
    }
    
    function hideOfficeTooltip() {
        if (officeTooltip) {
            officeTooltip.classList.remove('active');
        }
    }
    
    function highlightOffice(officeId, element) {
        // Remove active class from all markers
        officeMarkers.forEach(m => m.classList.remove('active'));
        
        // Add active class to clicked marker
        element.classList.add('active');
        
        // Show detailed info (could expand to show modal)
        console.log('Office Details:', officeData[officeId]);
        
        // Optional: Trigger animation
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = '';
        }, 10);
    }
    
    // ===================================
    // CONTINENT HOVER EFFECTS
    // ===================================
    
    const continents = document.querySelectorAll('.continent');
    
    continents.forEach(continent => {
        continent.addEventListener('mouseenter', function() {
            const continentName = this.getAttribute('data-continent');
            
            // Highlight related office markers
            officeMarkers.forEach(marker => {
                const markerId = marker.getAttribute('data-office');
                if (isInContinent(markerId, continentName)) {
                    marker.style.transform = 'scale(1.3)';
                }
            });
        });
        
        continent.addEventListener('mouseleave', function() {
            officeMarkers.forEach(marker => {
                marker.style.transform = '';
            });
        });
    });
    
    function isInContinent(officeId, continent) {
        const continentMapping = {
            'north-america': ['usa'],
            'europe': ['uk', 'germany'],
            'africa': ['nigeria'],
            'asia': ['india', 'singapore', 'japan'],
            'australia': ['australia']
        };
        
        return continentMapping[continent]?.includes(officeId) || false;
    }
    
    // ===================================
    // ANIMATED COUNTER FOR MAP STATS
    // ===================================
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const mapStats = document.querySelector('.map-stats');
    if (mapStats) {
        statsObserver.observe(mapStats);
    }
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let current = 0;
            const increment = Math.ceil(target / 50);
            const duration = 2000;
            const stepTime = duration / (target / increment);
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(counter);
                } else {
                    stat.textContent = current;
                }
            }, stepTime);
        });
    }
    
    // ===================================
    // VALUE CARDS STAGGER ANIMATION
    // ===================================
    
    const valueCards = document.querySelectorAll('.value-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // ===================================
    // VALUE CARD HOVER ENHANCEMENTS
    // ===================================
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.value-icon');
            const tags = this.querySelectorAll('.feature-tag');
            
            if (icon) {
                icon.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            }
            
            tags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-3px)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const tags = this.querySelectorAll('.feature-tag');
            tags.forEach(tag => {
                tag.style.transform = 'translateY(0)';
            });
        });
    });
    
    // ===================================
    // CONNECTION LINES ANIMATION
    // ===================================
    
    const connectionLines = document.querySelectorAll('.connection-line');
    
    const linesObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                connectionLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.style.opacity = '1';
                        line.style.animation = 'dashFlow 3s linear infinite';
                    }, index * 200);
                });
                linesObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const connectionGroup = document.getElementById('connection-lines');
    if (connectionGroup) {
        connectionLines.forEach(line => {
            line.style.opacity = '0';
            line.style.transition = 'opacity 0.5s ease';
        });
        linesObserver.observe(connectionGroup);
    }
    
    // ===================================
    // PARALLAX EFFECT ON MAP
    // ===================================
    
    const globalSection = document.querySelector('.global-presence');
    const mapWrapper = document.querySelector('.map-wrapper');
    
    if (globalSection && mapWrapper && window.innerWidth > 768) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const sectionTop = globalSection.offsetTop;
                    const sectionHeight = globalSection.offsetHeight;
                    
                    if (scrolled > sectionTop - window.innerHeight && 
                        scrolled < sectionTop + sectionHeight) {
                        
                        const relativeScroll = scrolled - sectionTop;
                        const movement = relativeScroll * 0.05;
                        
                        mapWrapper.style.transform = `translateY(${movement}px)`;
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // ===================================
    // CTA BUTTON MAGNETIC EFFECT
    // ===================================
    
    const ctaButton = document.querySelector('.global-cta .btn');
    
    if (ctaButton && window.innerWidth > 768) {
        ctaButton.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) translateY(-3px)`;
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // ===================================
    // OFFICE MARKER SEQUENTIAL REVEAL
    // ===================================
    
    const markersObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                officeMarkers.forEach((marker, index) => {
                    setTimeout(() => {
                        marker.style.opacity = '1';
                        marker.style.transform = 'scale(1)';
                    }, index * 150);
                });
                markersObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const markersGroup = document.getElementById('office-markers');
    if (markersGroup) {
        officeMarkers.forEach(marker => {
            marker.style.opacity = '0';
            marker.style.transform = 'scale(0)';
            marker.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        markersObserver.observe(markersGroup);
    }
    
    // ===================================
    // WORLD MAP ROTATION ON SCROLL
    // ===================================
    
    const worldMap = document.getElementById('worldMap');
    
    if (worldMap && window.innerWidth > 768) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const sectionTop = globalSection.offsetTop;
            
            if (scrolled > sectionTop - window.innerHeight) {
                const rotation = (scrolled - sectionTop) * 0.02;
                worldMap.style.transform = `rotate(${rotation}deg)`;
            }
        }, 10));
    }
    
    // ===================================
    // CONTINENTS SEQUENTIAL FADE IN
    // ===================================
    
    const continentsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                continents.forEach((continent, index) => {
                    setTimeout(() => {
                        continent.style.opacity = '1';
                    }, index * 100);
                });
                continentsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const continentsGroup = document.getElementById('map-continents');
    if (continentsGroup) {
        continents.forEach(continent => {
            continent.style.opacity = '0';
            continent.style.transition = 'opacity 0.6s ease';
        });
        continentsObserver.observe(continentsGroup);
    }
    
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
            if (mapWrapper) {
                mapWrapper.style.transform = '';
            }
            if (worldMap) {
                worldMap.style.transform = '';
            }
        }
    }, 250);
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    // ===================================
    // SECTION HEADER FADE IN
    // ===================================
    
    const sectionHeader = document.querySelector('.global-presence .section-header');
    
    if (sectionHeader) {
        const headerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elements = [
                        entry.target.querySelector('.section-label'),
                        entry.target.querySelector('.section-title'),
                        entry.target.querySelector('.section-description')
                    ];
                    
                    elements.forEach((el, index) => {
                        if (el) {
                            el.style.opacity = '0';
                            el.style.transform = 'translateY(-20px)';
                            setTimeout(() => {
                                el.style.transition = 'all 0.6s ease';
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            }, (index + 1) * 100);
                        }
                    });
                    
                    headerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        headerObserver.observe(sectionHeader);
    }
    
    // ===================================
    // ACCESSIBILITY: FOCUS MANAGEMENT
    // ===================================
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll(
        '.global-presence a, .global-presence button, .office-marker, .value-card'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid var(--brick)';
            this.style.outlineOffset = '3px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // ===================================
    // AUTO-ROTATE THROUGH OFFICES
    // ===================================
    
    let currentOfficeIndex = 0;
    const officeMarkersArray = Array.from(officeMarkers);
    
    function autoRotateOffices() {
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        setInterval(() => {
            if (!document.querySelector('.office-tooltip.active')) {
                const currentMarker = officeMarkersArray[currentOfficeIndex];
                if (currentMarker) {
                    const officeId = currentMarker.getAttribute('data-office');
                    showOfficeTooltip(officeId, currentMarker);
                    
                    setTimeout(() => {
                        hideOfficeTooltip();
                    }, 3000);
                }
                
                currentOfficeIndex = (currentOfficeIndex + 1) % officeMarkersArray.length;
            }
        }, 5000);
    }
    
    // Optional: Enable auto-rotation
    // autoRotateOffices();
    
});

// ===================================
// PRELOAD OPTIMIZATION
// ===================================

window.addEventListener('load', function() {
    const globalSection = document.querySelector('.global-presence');
    if (globalSection) {
        globalSection.classList.add('loaded');
    }
});
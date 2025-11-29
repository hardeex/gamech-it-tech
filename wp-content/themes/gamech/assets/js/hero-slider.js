/**
 * Hero Image Slider Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===================================
  // HERO IMAGE SLIDER
  // ===================================
  
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    
    // Show specific slide
    function showSlide(index) {
      // Remove active class from all
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => ind.classList.remove('active'));
      
      // Add active class to current
      slides[index].classList.add('active');
      indicators[index].classList.add('active');
      
      currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
      const next = (currentSlide + 1) % totalSlides;
      showSlide(next);
    }
    
    // Previous slide
    function prevSlide() {
      const prev = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(prev);
    }
    
    // Auto slide every 6 seconds
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 6000);
    }
    
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }
    
    // Button controls
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide(); // Restart auto-slide
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide(); // Restart auto-slide
      });
    }
    
    // Indicator controls
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        showSlide(index);
        stopAutoSlide();
        startAutoSlide(); // Restart auto-slide
      });
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoSlide);
      heroSection.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Start auto-slide on page load
    startAutoSlide();
  }
  
  // ===================================
  // ROTATING TEXT ANIMATION
  // ===================================
  
  const rotateText = document.querySelector('.text-rotate');
  if (rotateText) {
    const words = JSON.parse(rotateText.getAttribute('data-words'));
    let currentIndex = 0;
    
    setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      rotateText.style.opacity = '0';
      
      setTimeout(() => {
        rotateText.textContent = words[currentIndex];
        rotateText.style.opacity = '1';
      }, 300);
    }, 3000);
  }
  
  // ===================================
  // COUNTER ANIMATION
  // ===================================
  
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;
  
  function animateCounters() {
    if (hasAnimated) return;
    
    const counterSection = document.querySelector('.hero-stats');
    if (!counterSection) return;
    
    const rect = counterSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      hasAnimated = true;
      
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            stat.textContent = target;
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current);
          }
        }, 16);
      });
    }
  }
  
  // Trigger counter on scroll
  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Check on load
  
  // ===================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ===================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ===================================
  // SCROLL REVEAL ANIMATION
  // ===================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe service cards
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
  
});
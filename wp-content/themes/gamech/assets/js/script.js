/**
 * Mobile Menu Toggle Functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-navigation");
  const body = document.body;

  // Create overlay element if it doesn't exist
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    body.appendChild(overlay);
  }

  // Toggle menu on button click
  if (menuToggle) {
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      menuToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
      overlay.classList.toggle("active");
      body.style.overflow = mainNav.classList.contains("active")
        ? "hidden"
        : "";
    });
  }

  // Close menu when clicking overlay
  overlay.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    mainNav.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflow = "";
  });

  // Close menu when clicking a menu link
  const menuLinks = document.querySelectorAll(".nav-menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove("active");
        mainNav.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "";
      }
    });
  });

  // Close menu on window resize if open
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("active");
      overlay.classList.remove("active");
      body.style.overflow = "";
    }
  });
});




/**
 * Interactive Homepage JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // ===================================
  // MOBILE MENU TOGGLE
  // ===================================
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-navigation');
  const body = document.body;
  
  // Create overlay element
  let overlay = document.querySelector('.menu-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);
  }
  
  // Toggle menu on button click
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      overlay.classList.toggle('active');
      body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Close menu when clicking overlay
  overlay.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    mainNav.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = '';
  });
  
  // Close menu when clicking a menu link
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    });
  });
  
  // Close menu on window resize if open
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      overlay.classList.remove('active');
      body.style.overflow = '';
    }
  });
  
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
/**
 * Professional Services Page Interactive Features
 * Enhanced animations, smooth interactions, and performance optimizations
 */

(function () {
  "use strict";

  // Initialize all features when DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    initAOS();
    initScrollEffects();
    initProcessTimeline();
    initSmoothScroll();
    initServiceCards();
  });

  /**
   * Initialize AOS (Animate On Scroll) Library
   */
  function initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
        delay: 50,
        anchorPlacement: "top-bottom",
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
    const aosCSS = document.createElement("link");
    aosCSS.rel = "stylesheet";
    aosCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(aosCSS);

    const aosJS = document.createElement("script");
    aosJS.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    aosJS.onload = function () {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
        delay: 50,
      });
    };
    document.body.appendChild(aosJS);
  }

  /**
   * Advanced Scroll Effects
   */
  function initScrollEffects() {
    // Fade effect for scroll prompt
    const scrollPrompt = document.querySelector(".scroll-prompt");

    if (scrollPrompt) {
      window.addEventListener(
        "scroll",
        throttle(function () {
          const scrolled = window.pageYOffset;
          const fadeStart = 100;
          const fadeEnd = 400;

          if (scrolled <= fadeStart) {
            scrollPrompt.style.opacity = "1";
          } else if (scrolled >= fadeEnd) {
            scrollPrompt.style.opacity = "0";
          } else {
            const opacity = 1 - (scrolled - fadeStart) / (fadeEnd - fadeStart);
            scrollPrompt.style.opacity = opacity;
          }
        }, 10),
        { passive: true }
      );
    }

    // Parallax effect for hero background
    const heroBackground = document.querySelector(
      ".services-hero .hero-background"
    );

    if (heroBackground) {
      window.addEventListener(
        "scroll",
        throttle(function () {
          const scrolled = window.pageYOffset;
          const heroHeight =
            document.querySelector(".services-hero").offsetHeight;

          if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${
              scrolled * parallaxSpeed
            }px)`;
          }
        }, 10),
        { passive: true }
      );
    }

    // Add progress indicator
    createProgressBar();
  }

  /**
   * Create and manage scroll progress bar
   */
  function createProgressBar() {
    const progressBar = document.createElement("div");
    progressBar.className = "scroll-progress-bar";
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

    window.addEventListener(
      "scroll",
      throttle(function () {
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + "%";
      }, 10),
      { passive: true }
    );
  }

  /**
   * Process Timeline Sequential Reveal
   */
  function initProcessTimeline() {
    const processSteps = document.querySelectorAll(".process-step");

    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateX(0)";
              entry.target.classList.add("process-revealed");
            }, index * 100);
            processObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    processSteps.forEach((step) => {
      step.style.opacity = "0";
      step.style.transform = "translateX(-30px)";
      step.style.transition = "all 0.6s ease-out";
      processObserver.observe(step);
    });
  }

  /**
   * Service Cards Enhanced Interactions
   */
  function initServiceCards() {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
      // Add smooth transition
      card.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      });

      // Add click to expand (optional)
      const serviceLink = card.querySelector(".service-link");
      if (serviceLink) {
        serviceLink.addEventListener("click", function (e) {
          // Custom analytics or tracking can go here
          console.log("Service clicked:", card.querySelector("h3").textContent);
        });
      }
    });

    // Add hover effect to tech tags
    const techTags = document.querySelectorAll(".tech-tag");
    techTags.forEach((tag) => {
      tag.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.3s ease";
      });
    });

    // Add hover effect to industry cards
    const industryCards = document.querySelectorAll(".industry-card");
    industryCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      });
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    // Scroll to services when clicking scroll prompt
    const scrollPrompt = document.querySelector(".scroll-prompt");
    if (scrollPrompt) {
      scrollPrompt.addEventListener("click", function () {
        const targetSection = document.querySelector(".services-main");
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }

    // Handle all anchor links with smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#") return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }

  /**
   * Add active state to CTA buttons
   */
  function initCTAButtons() {
    const ctaButtons = document.querySelectorAll(
      ".btn-primary, .btn-secondary"
    );

    ctaButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Add click animation
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
  }

  /**
   * Performance Optimization: Throttle Function
   */
  function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
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
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  /**
   * Add scroll-based reveal animations for service features
   */
  function initServiceFeatures() {
    const features = document.querySelectorAll(".service-features li");

    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateX(0)";
            }, index * 50);
            featureObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    features.forEach((feature) => {
      feature.style.opacity = "0";
      feature.style.transform = "translateX(-20px)";
      feature.style.transition = "all 0.4s ease-out";
      featureObserver.observe(feature);
    });
  }

  /**
   * Lazy Load Images (if needed)
   */
  function initLazyLoad() {
    const images = document.querySelectorAll("img[data-src]");

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              imageObserver.unobserve(img);
            }
          });
        },
        {
          rootMargin: "50px",
        }
      );

      images.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach((img) => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      });
    }
  }

  /**
   * Add scroll spy for navigation (if you have a fixed nav)
   */
  function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");

    window.addEventListener(
      "scroll",
      throttle(function () {
        const scrollY = window.pageYOffset;

        sections.forEach((section) => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute("id");

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
              .querySelectorAll(`.nav-link[href*="${sectionId}"]`)
              .forEach((link) => {
                link.classList.add("active");
              });
          } else {
            document
              .querySelectorAll(`.nav-link[href*="${sectionId}"]`)
              .forEach((link) => {
                link.classList.remove("active");
              });
          }
        });
      }, 100),
      { passive: true }
    );
  }

  /**
   * Handle window resize events
   */
  window.addEventListener(
    "resize",
    debounce(function () {
      // Refresh AOS on resize
      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    }, 250)
  );

  /**
   * Initialize additional features on window load
   */
  window.addEventListener("load", function () {
    initLazyLoad();
    initCTAButtons();
    initServiceFeatures();
    initScrollSpy();
  });

  /**
   * Prevent layout shift by setting min-heights
   */
  function preventLayoutShift() {
    const heroSection = document.querySelector(".services-hero");
    if (heroSection) {
      heroSection.style.minHeight = "90vh";
    }
  }

  preventLayoutShift();

  /**
   * Add custom cursor effect for service cards (optional enhancement)
   */
  function initCustomCursor() {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 50;
        const angleY = (centerX - x) / 50;

        this.style.transform = `translateY(-10px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "";
      });
    });
  }

  // 3D effects
  initCustomCursor();
})();

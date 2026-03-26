/**
 * legal.js — Shared behaviour for Privacy Policy & Terms of Service pages
 * Gamech Custom Theme
 */

(function () {
  "use strict";

  /* =====================================================
     1. INTERSECTION OBSERVER — SCROLL REVEAL
     Adds .is-visible to each .legal-section when it
     enters the viewport (CSS handles the animation).
     ===================================================== */
  const sections = document.querySelectorAll(".legal-section");

  if ("IntersectionObserver" in window && sections.length) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach(function (section) {
      revealObserver.observe(section);
    });
  } else {
    // Fallback: show all sections immediately
    sections.forEach(function (section) {
      section.classList.add("is-visible");
    });
  }

  /* =====================================================
     2. SMOOTH-SCROLL for TOC anchor links
     Accounts for any sticky navigation bar height
     by reading a CSS variable (--nav-height) if set,
     otherwise defaults to 80px.
     ===================================================== */
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--nav-height",
    ) || "80",
    10,
  );

  document
    .querySelectorAll('.legal-toc__list a[href^="#"]')
    .forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const targetId = anchor.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          e.preventDefault();

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - navHeight;

          window.scrollTo({ top: top, behavior: "smooth" });

          // Update URL hash without triggering a jump
          history.replaceState(null, "", "#" + targetId);
        }
      });
    });

  /* =====================================================
     3. ACTIVE TOC LINK HIGHLIGHTING
     Highlights the corresponding TOC link as the user
     scrolls through each section.
     ===================================================== */
  const tocLinks = document.querySelectorAll('.legal-toc__list a[href^="#"]');

  if (tocLinks.length && sections.length) {
    let activeSectionId = null;

    const highlightObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activeSectionId = entry.target.id;
            updateActiveLink(activeSectionId);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // triggers when section is ~20% from top
        threshold: 0,
      },
    );

    sections.forEach(function (section) {
      if (section.id) highlightObserver.observe(section);
    });

    function updateActiveLink(id) {
      tocLinks.forEach(function (link) {
        link.classList.remove("is-active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("is-active");
        }
      });
    }
  }
})();

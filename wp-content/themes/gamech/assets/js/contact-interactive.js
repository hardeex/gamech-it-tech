/**
 * contact-interactive.js
 * Gamech Contact Page — AJAX form + all interactive features
 * Place at: /assets/js/contact-interactive.js
 */

(function () {
  "use strict";

  /* -----------------------------------------------
       DOM READY
    ----------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initAOS();
    initContactForm();
    initContactMethods();
    initLocationCards();
    initScrollEffects();
    initCharCounter();
    initInlineValidation();
  });

  window.addEventListener("load", function () {
    initSmoothScroll();
    initOfficeTimeDisplay();
    addAnimationStyles();
  });

  /* -----------------------------------------------
       AOS
    ----------------------------------------------- */
  function initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
        delay: 50,
      });
      return;
    }
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(css);

    var js = document.createElement("script");
    js.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    js.onload = function () {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
        delay: 50,
      });
    };
    document.body.appendChild(js);
  }

  /* -----------------------------------------------
       CONTACT FORM — AJAX
    ----------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("gamech-contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validateForm()) return;

      var submitBtn = document.getElementById("submit-btn");
      var btnText = submitBtn.querySelector(".btn-text");
      var btnLoading = submitBtn.querySelector(".btn-loading");
      var btnArrow = submitBtn.querySelector(".btn-arrow");
      var errorDiv = document.getElementById("form-error-message");
      var errorText = document.getElementById("form-error-text");
      var successDiv = document.getElementById("form-success-message");
      var successText = document.getElementById("form-success-text");

      // Loading state
      submitBtn.disabled = true;
      btnText.style.display = "none";
      btnLoading.style.display = "flex";
      if (btnArrow) btnArrow.style.display = "none";
      errorDiv.style.display = "none";

      // Build FormData — includes wp_nonce_field output automatically
      var formData = new FormData(form);
      formData.append("action", "gamech_contact_form"); // must match wp_ajax_{action}

      // Use localised ajaxurl from wp_localize_script, or fall back
      var ajaxUrl =
        typeof gamechAjax !== "undefined" && gamechAjax.ajaxurl
          ? gamechAjax.ajaxurl
          : "/wp-admin/admin-ajax.php";

      fetch(ajaxUrl, {
        method: "POST",
        body: formData,
        credentials: "same-origin",
      })
        .then(function (res) {
          if (!res.ok)
            throw new Error(
              "Server error (" + res.status + "). Please try again.",
            );
          return res.json();
        })
        .then(function (data) {
          if (data.success) {
            form.style.display = "none";
            successDiv.style.display = "block";
            successText.textContent = data.data.message;
            successDiv.scrollIntoView({ behavior: "smooth", block: "center" });

            if (typeof gtag !== "undefined") {
              gtag("event", "contact_form_submit", {
                form_id: "gamech_contact",
              });
            }
          } else {
            showFormError(
              data.data
                ? data.data.message
                : "Something went wrong. Please try again.",
            );
          }
        })
        .catch(function (err) {
          showFormError(
            err.message ||
              "A network error occurred. Please try again or email us directly at info@gamechltd.com.",
          );
        })
        .finally(function () {
          submitBtn.disabled = false;
          btnText.style.display = "inline";
          btnLoading.style.display = "none";
          if (btnArrow) btnArrow.style.display = "inline";
        });

      function showFormError(msg) {
        errorText.innerHTML = msg;
        errorDiv.style.display = "flex";
        errorDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  /* -----------------------------------------------
       CLIENT-SIDE VALIDATION
    ----------------------------------------------- */
  function validateForm() {
    var valid = true;

    var name = document.getElementById("contact_name");
    if (!name || !name.value.trim() || name.value.trim().length < 2) {
      setFieldError(
        name,
        "name-error",
        "Please enter your full name (at least 2 characters).",
      );
      valid = false;
    } else {
      clearFieldError(name, "name-error");
    }

    var email = document.getElementById("contact_email");
    if (!email || !isValidEmail(email.value.trim())) {
      setFieldError(
        email,
        "email-error",
        "Please enter a valid email address.",
      );
      valid = false;
    } else {
      clearFieldError(email, "email-error");
    }

    var subject = document.getElementById("contact_subject");
    if (!subject || !subject.value.trim()) {
      setFieldError(subject, "subject-error", "Please enter a subject.");
      valid = false;
    } else {
      clearFieldError(subject, "subject-error");
    }

    var message = document.getElementById("contact_message");
    if (!message || message.value.trim().length < 20) {
      setFieldError(
        message,
        "message-error",
        "Please write a message of at least 20 characters.",
      );
      valid = false;
    } else {
      clearFieldError(message, "message-error");
    }

    if (!valid) {
      var first = document.querySelector(".is-invalid");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return valid;
  }

  function setFieldError(field, errorId, msg) {
    if (!field) return;
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    var el = document.getElementById(errorId);
    if (el) el.textContent = msg;
  }

  function clearFieldError(field, errorId) {
    if (!field) return;
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
    var el = document.getElementById(errorId);
    if (el) el.textContent = "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* -----------------------------------------------
       INLINE VALIDATION (on blur)
    ----------------------------------------------- */
  function initInlineValidation() {
    var rules = [
      {
        id: "contact_name",
        err: "name-error",
        test: function (v) {
          return v.length >= 2;
        },
        msg: "Name must be at least 2 characters.",
      },
      {
        id: "contact_email",
        err: "email-error",
        test: isValidEmail,
        msg: "Please enter a valid email address.",
      },
      {
        id: "contact_subject",
        err: "subject-error",
        test: function (v) {
          return v.length > 0;
        },
        msg: "Please enter a subject.",
      },
      {
        id: "contact_message",
        err: "message-error",
        test: function (v) {
          return v.length >= 20;
        },
        msg: "Message must be at least 20 characters.",
      },
    ];

    rules.forEach(function (r) {
      var el = document.getElementById(r.id);
      if (!el) return;

      el.addEventListener("blur", function () {
        var val = this.value.trim();
        if (!val) return; // don't flag empty on first blur
        if (!r.test(val)) setFieldError(el, r.err, r.msg);
        else clearFieldError(el, r.err);
      });

      el.addEventListener("input", function () {
        if (!el.classList.contains("is-invalid")) return;
        if (r.test(this.value.trim())) clearFieldError(el, r.err);
      });
    });
  }

  /* -----------------------------------------------
       CHARACTER COUNTER
    ----------------------------------------------- */
  function initCharCounter() {
    var textarea = document.getElementById("contact_message");
    var counter = document.getElementById("char-count");
    if (!textarea || !counter) return;

    var max = parseInt(textarea.getAttribute("maxlength"), 10) || 3000;
    var wrapper = counter.parentElement;

    textarea.addEventListener("input", function () {
      var len = this.value.length;
      counter.textContent = len;
      if (wrapper) wrapper.classList.toggle("over-limit", len >= max * 0.9);
    });
  }

  /* -----------------------------------------------
       CONTACT METHOD CARDS
    ----------------------------------------------- */
  function initContactMethods() {
    document.querySelectorAll(".contact-method").forEach(function (el) {
      el.addEventListener("click", function () {
        var type = (this.querySelector("h3") || {}).textContent || "";
        if (typeof gtag !== "undefined")
          gtag("event", "contact_method_click", { method_type: type });
      });
    });
  }

  /* -----------------------------------------------
       LOCATION CARDS
    ----------------------------------------------- */
  function initLocationCards() {
    document.querySelectorAll(".location-card").forEach(function (card) {
      var btn = card.querySelector(".location-cta");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var office = (card.querySelector("h3") || {}).textContent || "";
        if (typeof gtag !== "undefined")
          gtag("event", "directions_click", { office_location: office });
      });
    });
  }

  /* -----------------------------------------------
       SCROLL EFFECTS + PROGRESS BAR
    ----------------------------------------------- */
  function initScrollEffects() {
    createProgressBar();

    var heroBg = document.querySelector(".contact-hero .hero-background");
    if (!heroBg) return;

    window.addEventListener(
      "scroll",
      throttle(function () {
        var scrolled = window.pageYOffset;
        var heroHeight =
          (document.querySelector(".contact-hero") || {}).offsetHeight || 0;
        if (scrolled < heroHeight) {
          heroBg.style.transform = "translateY(" + scrolled * 0.5 + "px)";
        }
      }, 10),
      { passive: true },
    );
  }

  function createProgressBar() {
    var bar = document.createElement("div");
    bar.style.cssText = [
      "position:fixed",
      "top:0",
      "left:0",
      "height:4px",
      "width:0",
      "background:linear-gradient(90deg,var(--brick,#922f16),var(--light-brick,#c04a2a))",
      "z-index:9999",
      "transition:width 0.1s ease-out",
      "box-shadow:0 2px 10px rgba(146,47,22,0.3)",
    ].join(";");
    document.body.appendChild(bar);

    window.addEventListener(
      "scroll",
      throttle(function () {
        var h =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        bar.style.width = (h > 0 ? (window.pageYOffset / h) * 100 : 0) + "%";
      }, 10),
      { passive: true },
    );
  }

  /* -----------------------------------------------
       SMOOTH SCROLL
    ----------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var href = this.getAttribute("href");
        if (href === "#") return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /* -----------------------------------------------
       OFFICE LOCAL TIME
    ----------------------------------------------- */
  function initOfficeTimeDisplay() {
    var offices = [
      { match: "Lagos", tz: "Africa/Lagos" },
      { match: "London", tz: "Europe/London" },
    ];

    function updateTimes() {
      document.querySelectorAll(".location-card h3").forEach(function (h3) {
        offices.forEach(function (o) {
          if (!h3.textContent.includes(o.match)) return;

          var card = h3.closest(".location-card");
          var time = new Date().toLocaleTimeString("en-GB", {
            timeZone: o.tz,
            hour: "2-digit",
            minute: "2-digit",
          });
          var el = card.querySelector(".office-time");

          if (!el) {
            el = document.createElement("div");
            el.className = "office-time";
            el.style.cssText =
              "margin-top:10px;padding:7px 14px;background:rgba(146,47,22,0.1);border-radius:8px;font-size:13px;color:var(--brick,#922f16);font-weight:600;display:inline-block;";
            var details = card.querySelector(".location-details");
            if (details) details.appendChild(el);
          }

          el.textContent = "Local time: " + time;
        });
      });
    }

    updateTimes();
    setInterval(updateTimes, 60000);
  }

  /* -----------------------------------------------
       ANIMATION KEYFRAMES (injected once)
    ----------------------------------------------- */
  function addAnimationStyles() {
    var s = document.createElement("style");
    s.textContent =
      "@keyframes slideInUp{from{transform:translateY(100px);opacity:0}to{transform:translateY(0);opacity:1}}";
    s.textContent +=
      "@keyframes slideOutDown{from{transform:translateY(0);opacity:1}to{transform:translateY(100px);opacity:0}}";
    document.head.appendChild(s);
  }

  /* -----------------------------------------------
       UTILS
    ----------------------------------------------- */
  function throttle(fn, delay) {
    var last = 0;
    return function () {
      var now = Date.now();
      if (now - last < delay) return;
      last = now;
      return fn.apply(this, arguments);
    };
  }

  function debounce(fn, delay) {
    var t;
    return function () {
      clearTimeout(t);
      var ctx = this;
      var args = arguments;
      t = setTimeout(function () {
        fn.apply(ctx, args);
      }, delay);
    };
  }

  window.addEventListener(
    "resize",
    debounce(function () {
      if (typeof AOS !== "undefined") AOS.refresh();
    }, 250),
  );

  // Prevent layout shift
  (function () {
    var hero = document.querySelector(".contact-hero");
    if (hero) hero.style.minHeight = "70vh";
  })();
})();

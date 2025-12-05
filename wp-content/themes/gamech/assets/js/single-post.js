/* ===================================
   SINGLE POST INTERACTIVE FEATURES
   =================================== */

document.addEventListener('DOMContentLoaded', function() {

  /* ===================================
     TABLE OF CONTENTS GENERATION
     =================================== */
  
  function generateTableOfContents() {
    const tocContainer = document.getElementById('table-of-contents');
    if (!tocContainer) return;

    const postContent = document.querySelector('.post-content');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2, h3');
    
    if (headings.length === 0) {
      tocContainer.innerHTML = '<p style="color: #999; font-size: 0.9rem;">No headings found</p>';
      return;
    }

    const tocList = document.createElement('ul');
    tocList.style.cssText = 'list-style: none; padding: 0; margin: 0;';

    headings.forEach((heading, index) => {
      // Add ID to heading if it doesn't have one
      if (!heading.id) {
        heading.id = 'heading-' + index;
      }

      const listItem = document.createElement('li');
      const link = document.createElement('a');
      
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      link.style.fontSize = heading.tagName === 'H3' ? '0.9rem' : '1rem';
      link.style.paddingLeft = heading.tagName === 'H3' ? '20px' : '12px';
      
      link.addEventListener('click', function(e) {
        e.preventDefault();
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Update active state
        tocList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        
        // Update URL without jumping
        history.pushState(null, null, this.href);
      });

      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);
  }

  generateTableOfContents();

  /* ===================================
     ACTIVE TOC ITEM ON SCROLL
     =================================== */
  
  function updateActiveTocItem() {
    const tocLinks = document.querySelectorAll('#table-of-contents a');
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    
    if (tocLinks.length === 0 || headings.length === 0) return;

    let currentActive = null;
    const scrollPos = window.scrollY + 150;

    headings.forEach((heading) => {
      if (heading.offsetTop <= scrollPos) {
        currentActive = heading.id;
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentActive) {
        link.classList.add('active');
      }
    });
  }

  // Throttle scroll event
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
      updateActiveTocItem();
    });
  });

  /* ===================================
     COPY LINK TO CLIPBOARD
     =================================== */
  
  window.copyToClipboard = function(url) {
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Visual feedback
    const button = event.target.closest('.copy-link');
    const originalText = button.innerHTML;
    
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Copied!
    `;
    button.classList.add('copied');

    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('copied');
    }, 2000);
  };

  /* ===================================
     SMOOTH SCROLL FOR ALL ANCHOR LINKS
     =================================== */
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, href);
      }
    });
  });

  /* ===================================
     IMAGE LIGHTBOX/ZOOM
     =================================== */
  
  const contentImages = document.querySelectorAll('.post-content img');
  
  contentImages.forEach(img => {
    // Make images clickable
    img.style.cursor = 'pointer';
    img.title = 'Click to enlarge';

    img.addEventListener('click', function() {
      createLightbox(this.src, this.alt);
    });

    // Add loading animation
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', function() {
        this.style.opacity = '1';
      });
    }
  });

  function createLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      cursor: zoom-out;
      animation: fadeIn 0.3s ease;
      padding: 40px;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      animation: zoomIn 0.3s ease;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;

    closeBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'rotate(90deg) scale(1.1)';
      this.style.background = '#f44336';
      this.style.color = 'white';
    });

    closeBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'rotate(0) scale(1)';
      this.style.background = 'white';
      this.style.color = '#333';
    });

    const closeLightbox = () => {
      lightbox.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => lightbox.remove(), 300);
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });

    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes zoomIn {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ===================================
     READING PROGRESS BAR
     =================================== */
  
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--brick), var(--light-brick));
    z-index: 9999;
    transition: width 0.1s ease;
    width: 0;
  `;
  document.body.appendChild(progressBar);

  function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgressBar);
  updateProgressBar();

  /* ===================================
     BACK TO TOP BUTTON
     =================================== */
  
  const backToTop = document.createElement('button');
  backToTop.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="18 15 12 9 6 15"/>
    </svg>
  `;
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--brick);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(146, 47, 22, 0.3);
    transition: all 0.3s ease;
    z-index: 999;
  `;

  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-3px)';
    this.style.boxShadow = '0 6px 20px rgba(146, 47, 22, 0.4)';
  });

  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(146, 47, 22, 0.3)';
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTop.style.display = 'flex';
      backToTop.style.animation = 'fadeInUp 0.3s ease';
    } else {
      backToTop.style.display = 'none';
    }
  });

  document.body.appendChild(backToTop);

  /* ===================================
     EXTERNAL LINKS - OPEN IN NEW TAB
     =================================== */
  
  const postLinks = document.querySelectorAll('.post-content a');
  postLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add external link icon
      const icon = document.createElement('svg');
      icon.setAttribute('width', '14');
      icon.setAttribute('height', '14');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('fill', 'none');
      icon.setAttribute('stroke', 'currentColor');
      icon.setAttribute('stroke-width', '2');
      icon.innerHTML = '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>';
      icon.style.marginLeft = '4px';
      icon.style.display = 'inline-block';
      icon.style.verticalAlign = 'middle';
      link.appendChild(icon);
    }
  });

  /* ===================================
     CODE BLOCK COPY BUTTON
     =================================== */
  
  const codeBlocks = document.querySelectorAll('.post-content pre');
  codeBlocks.forEach(pre => {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: all 0.3s ease;
    `;

    copyBtn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255, 255, 255, 0.3)';
    });

    copyBtn.addEventListener('click', function() {
      const code = pre.querySelector('code') || pre;
      const text = code.textContent;
      
      navigator.clipboard.writeText(text).then(() => {
        this.textContent = 'Copied!';
        setTimeout(() => {
          this.textContent = 'Copy';
        }, 2000);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(copyBtn);
  });

  /* ===================================
     LAZY LOAD COMMENTS
     =================================== */
  
  const commentsSection = document.querySelector('.comments-section');
  if (commentsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          commentsSection.style.opacity = '0';
          commentsSection.style.transform = 'translateY(30px)';
          commentsSection.style.transition = 'all 0.6s ease';
          
          setTimeout(() => {
            commentsSection.style.opacity = '1';
            commentsSection.style.transform = 'translateY(0)';
          }, 100);
          
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(commentsSection);
  }

  /* ===================================
     PRINT BUTTON (OPTIONAL)
     =================================== */
  
  const printBtn = document.createElement('button');
  printBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 6 2 18 2 18 9"/>
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="14" width="12" height="8"/>
    </svg>
    Print
  `;
  printBtn.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    padding: 12px 20px;
    background: white;
    color: var(--navy);
    border: 2px solid var(--navy);
    border-radius: 25px;
    cursor: pointer;
    display: none;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
    font-family: var(--font-body);
  `;

  printBtn.addEventListener('click', function() {
    window.print();
  });

  printBtn.addEventListener('mouseenter', function() {
    this.style.background = var(--navy);
    this.style.color = 'white';
    this.style.transform = 'scale(1.05)';
  });

  printBtn.addEventListener('mouseleave', function() {
    this.style.background = 'white';
    this.style.color = 'var(--navy)';
    this.style.transform = 'scale(1)';
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      printBtn.style.display = 'flex';
    } else {
      printBtn.style.display = 'none';
    }
  });

  document.body.appendChild(printBtn);

  console.log('Single post interactive features loaded successfully! 📝');
});
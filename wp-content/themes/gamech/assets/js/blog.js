/* ===================================
   BLOG PAGE INTERACTIVE FEATURES
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // Elements
  const categoryFilters = document.querySelectorAll('.category-filter');
  const searchInput = document.getElementById('blog-search');
  const blogCards = document.querySelectorAll('.blog-card');
  const viewButtons = document.querySelectorAll('.view-btn');
  const blogGrid = document.getElementById('blog-posts-container');
  const postsShowing = document.getElementById('posts-showing');

  // State
  let currentCategory = 'all';
  let searchQuery = '';

  // Initialize
  updatePostsCount();

  /* ===================================
     VIEW TOGGLE (Grid/List)
     =================================== */
  
  viewButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const view = this.getAttribute('data-view');
      
      // Update active state
      viewButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Toggle grid class
      if (view === 'list') {
        blogGrid.classList.add('list-view');
        animateViewChange();
      } else {
        blogGrid.classList.remove('list-view');
        animateViewChange();
      }
    });
  });

  function animateViewChange() {
    blogCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }

  /* ===================================
     CATEGORY FILTERING
     =================================== */
  
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active state
      categoryFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      // Get category
      currentCategory = this.getAttribute('data-category');
      
      // Filter posts
      filterPosts();
    });
  });

  /* ===================================
     SEARCH FUNCTIONALITY
     =================================== */
  
  if (searchInput) {
    // Debounce search
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchQuery = this.value.toLowerCase().trim();
        filterPosts();
      }, 300);
    });

    // Add search icon animation
    searchInput.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });

    searchInput.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  }

  /* ===================================
     FILTER POSTS
     =================================== */
  
  function filterPosts() {
    let visibleCount = 0;

    blogCards.forEach((card, index) => {
      const categories = card.getAttribute('data-categories') || '';
      const title = card.querySelector('.blog-card-title a')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('.blog-card-excerpt')?.textContent.toLowerCase() || '';
      
      // Check category match
      const categoryMatch = currentCategory === 'all' || categories.includes(currentCategory);
      
      // Check search match
      const searchMatch = !searchQuery || 
                         title.includes(searchQuery) || 
                         excerpt.includes(searchQuery);
      
      // Show/hide card with animation
      if (categoryMatch && searchMatch) {
        setTimeout(() => {
          card.classList.remove('hidden');
          card.style.animation = `fadeInUp 0.5s ease ${index * 0.05}s backwards`;
        }, 50);
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Update count
    updatePostsCount(visibleCount);

    // Show no results message if needed
    showNoResultsMessage(visibleCount);
  }

  /* ===================================
     UPDATE POSTS COUNT
     =================================== */
  
  function updatePostsCount(count) {
    if (!postsShowing) return;

    const total = blogCards.length;
    const visible = count !== undefined ? count : total;
    
    if (visible === total) {
      postsShowing.textContent = `Showing all ${total} posts`;
    } else if (visible === 0) {
      postsShowing.textContent = 'No posts found';
    } else {
      postsShowing.textContent = `Showing ${visible} of ${total} posts`;
    }
  }

  /* ===================================
     NO RESULTS MESSAGE
     =================================== */
  
  function showNoResultsMessage(visibleCount) {
    const existingMessage = document.querySelector('.no-results-message');
    
    if (visibleCount === 0) {
      if (!existingMessage) {
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.style.cssText = `
          grid-column: 1 / -1;
          text-align: center;
          padding: 60px 20px;
          animation: fadeInUp 0.5s ease;
        `;
        message.innerHTML = `
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin-bottom: 20px;">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <h3 style="color: #666; margin-bottom: 10px;">No posts found</h3>
          <p style="color: #999; margin: 0;">Try adjusting your filters or search query</p>
        `;
        blogGrid.appendChild(message);
      }
    } else if (existingMessage) {
      existingMessage.remove();
    }
  }

  /* ===================================
     SMOOTH SCROLL TO TOP
     =================================== */
  
  const paginationLinks = document.querySelectorAll('.blog-pagination a');
  paginationLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default - let WordPress handle pagination
      // Just smooth scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    });
  });

  /* ===================================
     CARD HOVER EFFECTS
     =================================== */
  
  blogCards.forEach(card => {
    const inner = card.querySelector('.blog-card-inner');
    
    inner.addEventListener('mouseenter', function() {
      // Add subtle parallax effect
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    inner.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  /* ===================================
     LAZY LOADING IMAGES
     =================================== */
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
          img.style.opacity = '1';
        }, 100);
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  const images = document.querySelectorAll('.blog-card-image img');
  images.forEach(img => imageObserver.observe(img));

  /* ===================================
     KEYBOARD ACCESSIBILITY
     =================================== */
  
  // Category filters keyboard navigation
  categoryFilters.forEach((filter, index) => {
    filter.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
      
      // Arrow key navigation
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const direction = e.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = (index + direction + categoryFilters.length) % categoryFilters.length;
        categoryFilters[nextIndex].focus();
      }
    });
  });

  /* ===================================
     ANIMATION ON SCROLL
     =================================== */
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  blogCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    scrollObserver.observe(card);
  });

  /* ===================================
     RESET FILTERS
     =================================== */
  
  function resetFilters() {
    // Reset category
    currentCategory = 'all';
    categoryFilters.forEach(f => {
      if (f.getAttribute('data-category') === 'all') {
        f.classList.add('active');
      } else {
        f.classList.remove('active');
      }
    });
    
    // Reset search
    if (searchInput) {
      searchInput.value = '';
      searchQuery = '';
    }
    
    // Show all posts
    filterPosts();
  }

  // Add reset button if needed (optional)
  if (searchInput) {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset Filters';
    resetBtn.style.cssText = `
      display: none;
      margin-top: 15px;
      padding: 10px 20px;
      background: var(--brick);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    `;
    resetBtn.addEventListener('click', resetFilters);
    
    // Show reset button when filters are active
    function checkFiltersActive() {
      if (currentCategory !== 'all' || searchQuery !== '') {
        resetBtn.style.display = 'block';
      } else {
        resetBtn.style.display = 'none';
      }
    }
    
    searchInput.parentElement.appendChild(resetBtn);
    
    // Update reset button visibility
    const originalFilterPosts = filterPosts;
    filterPosts = function() {
      originalFilterPosts();
      checkFiltersActive();
    };
  }

  /* ===================================
     PERFORMANCE OPTIMIZATION
     =================================== */
  
  // Use requestAnimationFrame for smooth animations
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        // Add any scroll-based animations here
        ticking = false;
      });
      ticking = true;
    }
  });

  console.log('Blog page interactive features loaded successfully! 🚀');
});
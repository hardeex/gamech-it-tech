<?php
/**
 * Template Name: Blog Page
 */

get_header(); ?>

<main class="blog-page">
    <!-- Hero Section -->
    <section class="blog-hero">
        <div class="container">
            <h1 class="blog-hero-title">Our Blog</h1>
            <p class="blog-hero-subtitle">Insights, updates, and stories from our team</p>
        </div>
    </section>

    <div class="container">
        <div class="blog-layout">
            <!-- Sidebar Filter -->
            <aside class="blog-sidebar">
                <div class="filter-section">
                    <h3>Categories</h3>
                    <ul class="category-list">
                        <li><a href="#" class="category-filter active" data-category="all">All Posts</a></li>
                        <?php
                        $categories = get_categories();
                        foreach($categories as $category) {
                            echo '<li><a href="#" class="category-filter" data-category="' . $category->slug . '">' . $category->name . '</a></li>';
                        }
                        ?>
                    </ul>
                </div>

                <div class="filter-section">
                    <h3>Search</h3>
                    <input type="text" id="blog-search" placeholder="Search posts..." class="blog-search-input">
                </div>

                <div class="filter-section">
                    <h3>Recent Posts</h3>
                    <ul class="recent-posts">
                        <?php
                        $recent = new WP_Query(array('posts_per_page' => 5));
                        while($recent->have_posts()) : $recent->the_post();
                        ?>
                        <li>
                            <a href="<?php the_permalink(); ?>">
                                <?php the_title(); ?>
                                <span class="recent-date"><?php echo get_the_date('M j'); ?></span>
                            </a>
                        </li>
                        <?php endwhile; wp_reset_postdata(); ?>
                    </ul>
                </div>
            </aside>

            <!-- Main Blog Grid -->
            <div class="blog-main">
                <div class="blog-controls">
                    <div class="view-toggle">
                        <button class="view-btn active" data-view="grid" title="Grid View">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <rect width="8" height="8" rx="1"/>
                                <rect x="12" width="8" height="8" rx="1"/>
                                <rect y="12" width="8" height="8" rx="1"/>
                                <rect x="12" y="12" width="8" height="8" rx="1"/>
                            </svg>
                        </button>
                        <button class="view-btn" data-view="list" title="List View">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <rect width="20" height="3" rx="1"/>
                                <rect y="8" width="20" height="3" rx="1"/>
                                <rect y="16" width="20" height="3" rx="1"/>
                            </svg>
                        </button>
                    </div>
                    <div class="posts-count">
                        <span id="posts-showing">Showing all posts</span>
                    </div>
                </div>

                <div class="blog-grid" id="blog-posts-container">
                    <?php
                    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 9,
                        'paged' => $paged,
                        'post_status' => 'publish'
                    );
                    $blog_query = new WP_Query($args);
                    
                    if ($blog_query->have_posts()) :
                        while ($blog_query->have_posts()) : $blog_query->the_post(); 
                            $categories = get_the_category();
                            $cat_slugs = array();
                            foreach($categories as $cat) {
                                $cat_slugs[] = $cat->slug;
                            }
                            $cat_string = implode(' ', $cat_slugs);
                        ?>
                            
                        <article class="blog-card" data-categories="<?php echo esc_attr($cat_string); ?>">
                            <div class="blog-card-inner">
                                <?php if (has_post_thumbnail()) : ?>
                                    <div class="blog-card-image">
                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_post_thumbnail('large'); ?>
                                            <div class="image-overlay"></div>
                                        </a>
                                    </div>
                                <?php else : ?>
                                    <div class="blog-card-image no-image">
                                        <a href="<?php the_permalink(); ?>">
                                            <div class="placeholder-image">
                                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                                    <polyline points="21 15 16 10 5 21"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="blog-card-content">
                                    <div class="blog-card-meta">
                                        <span class="post-date">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"/>
                                                <polyline points="12 6 12 12 16 14"/>
                                            </svg>
                                            <?php echo get_the_date(); ?>
                                        </span>
                                        <span class="post-author">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                <circle cx="12" cy="7" r="4"/>
                                            </svg>
                                            <?php the_author(); ?>
                                        </span>
                                    </div>

                                    <?php if (!empty($categories)) : ?>
                                    <div class="blog-card-categories">
                                        <?php foreach($categories as $category) : ?>
                                            <span class="category-badge"><?php echo $category->name; ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                    <?php endif; ?>
                                    
                                    <h2 class="blog-card-title">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h2>
                                    
                                    <div class="blog-card-excerpt">
                                        <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                    </div>
                                    
                                    <a href="<?php the_permalink(); ?>" class="read-more-btn">
                                        Read More
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                            <polyline points="12 5 19 12 12 19"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                        
                        <?php endwhile; ?>
                    <?php else : ?>
                        <div class="no-posts">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10"/>
                                <line x1="12" y1="8" x2="12" y2="12"/>
                                <line x1="12" y1="16" x2="12.01" y2="16"/>
                            </svg>
                            <p>No blog posts found.</p>
                        </div>
                    <?php endif; ?>
                </div>

                <?php if ($blog_query->max_num_pages > 1) : ?>
                <div class="blog-pagination">
                    <?php
                    echo paginate_links(array(
                        'total' => $blog_query->max_num_pages,
                        'current' => $paged,
                        'prev_text' => '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Previous',
                        'next_text' => 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'
                    ));
                    ?>
                </div>
                <?php endif; ?>
                
                <?php wp_reset_postdata(); ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
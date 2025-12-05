<?php
/**
 * Single Post Template
 */

get_header(); ?>

<?php while (have_posts()) : the_post(); ?>

<article class="single-post">
    <!-- Post Header -->
    <header class="post-header">
        <div class="post-header-overlay"></div>
        <?php if (has_post_thumbnail()) : ?>
            <div class="post-header-image">
                <?php the_post_thumbnail('full'); ?>
            </div>
        <?php endif; ?>
        
        <div class="post-header-content">
            <div class="container-narrow">
                <!-- Breadcrumb -->
                <nav class="breadcrumb">
                    <a href="<?php echo home_url(); ?>">Home</a>
                    <span class="separator">/</span>
                    <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>">Blog</a>
                    <span class="separator">/</span>
                    <span class="current"><?php the_title(); ?></span>
                </nav>

                <!-- Categories -->
                <?php
                $categories = get_the_category();
                if (!empty($categories)) : ?>
                    <div class="post-categories">
                        <?php foreach($categories as $category) : ?>
                            <a href="<?php echo get_category_link($category->term_id); ?>" class="category-tag">
                                <?php echo $category->name; ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <!-- Title -->
                <h1 class="post-title"><?php the_title(); ?></h1>

                <!-- Meta Info -->
                <div class="post-meta">
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>By <strong><?php the_author(); ?></strong></span>
                    </div>
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span><?php echo get_the_date('F j, Y'); ?></span>
                    </div>
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span><?php echo get_estimated_reading_time(); ?> min read</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Post Content -->
    <div class="post-content-wrapper">
        <div class="container-narrow">
            <div class="post-layout">
                <!-- Main Content -->
                <main class="post-main">
                    <div class="post-content">
                        <?php the_content(); ?>
                    </div>

                    <!-- Tags -->
                    <?php
                    $tags = get_the_tags();
                    if ($tags) : ?>
                        <div class="post-tags">
                            <h4>Tags:</h4>
                            <div class="tags-list">
                                <?php foreach($tags as $tag) : ?>
                                    <a href="<?php echo get_tag_link($tag->term_id); ?>" class="tag-item">
                                        #<?php echo $tag->name; ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <!-- Share Buttons -->
                    <div class="post-share">
                        <h4>Share this post:</h4>
                        <div class="share-buttons">
                            <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="share-btn twitter" title="Share on Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                                Twitter
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" target="_blank" class="share-btn facebook" title="Share on Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                </svg>
                                Facebook
                            </a>
                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_permalink()); ?>&title=<?php echo urlencode(get_the_title()); ?>" target="_blank" class="share-btn linkedin" title="Share on LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                                LinkedIn
                            </a>
                            <button class="share-btn copy-link" onclick="copyToClipboard('<?php echo get_permalink(); ?>')" title="Copy Link">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                                Copy Link
                            </button>
                        </div>
                    </div>

                    <!-- Author Bio -->
                    <div class="author-bio">
                        <div class="author-avatar">
                            <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
                        </div>
                        <div class="author-info">
                            <h4>About <?php the_author(); ?></h4>
                            <p><?php echo get_the_author_meta('description') ? get_the_author_meta('description') : 'No bio available.'; ?></p>
                            <div class="author-links">
                                <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" class="author-posts-link">
                                    View all posts by <?php the_author(); ?>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                        <polyline points="12 5 19 12 12 19"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation (Previous/Next Posts) -->
                    <nav class="post-navigation">
                        <?php
                        $prev_post = get_previous_post();
                        $next_post = get_next_post();
                        ?>
                        
                        <?php if ($prev_post) : ?>
                            <a href="<?php echo get_permalink($prev_post); ?>" class="nav-link prev">
                                <span class="nav-label">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="15 18 9 12 15 6"/>
                                    </svg>
                                    Previous Post
                                </span>
                                <span class="nav-title"><?php echo get_the_title($prev_post); ?></span>
                            </a>
                        <?php endif; ?>

                        <?php if ($next_post) : ?>
                            <a href="<?php echo get_permalink($next_post); ?>" class="nav-link next">
                                <span class="nav-label">
                                    Next Post
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="9 18 15 12 9 6"/>
                                    </svg>
                                </span>
                                <span class="nav-title"><?php echo get_the_title($next_post); ?></span>
                            </a>
                        <?php endif; ?>
                    </nav>

                    <!-- Comments Section -->
                    <?php if (comments_open() || get_comments_number()) : ?>
                        <div class="comments-section">
                            <?php comments_template(); ?>
                        </div>
                    <?php endif; ?>
                </main>

                <!-- Sidebar -->
                <aside class="post-sidebar">
                    <!-- Table of Contents -->
                    <div class="sidebar-widget toc-widget">
                        <h3>Table of Contents</h3>
                        <div id="table-of-contents">
                            <!-- Generated by JavaScript -->
                        </div>
                    </div>

                    <!-- Related Posts -->
                    <?php
                    $categories = get_the_category();
                    if ($categories) {
                        $category_ids = array();
                        foreach($categories as $category) {
                            $category_ids[] = $category->term_id;
                        }
                        
                        $related_args = array(
                            'category__in' => $category_ids,
                            'post__not_in' => array(get_the_ID()),
                            'posts_per_page' => 3,
                            'orderby' => 'rand'
                        );
                        $related_query = new WP_Query($related_args);
                        
                        if ($related_query->have_posts()) : ?>
                            <div class="sidebar-widget related-posts-widget">
                                <h3>Related Posts</h3>
                                <div class="related-posts-list">
                                    <?php while ($related_query->have_posts()) : $related_query->the_post(); ?>
                                        <article class="related-post-item">
                                            <?php if (has_post_thumbnail()) : ?>
                                                <a href="<?php the_permalink(); ?>" class="related-post-thumb">
                                                    <?php the_post_thumbnail('thumbnail'); ?>
                                                </a>
                                            <?php endif; ?>
                                            <div class="related-post-content">
                                                <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                                <span class="related-post-date"><?php echo get_the_date('M j, Y'); ?></span>
                                            </div>
                                        </article>
                                    <?php endwhile; ?>
                                </div>
                            </div>
                        <?php endif;
                        wp_reset_postdata();
                    }
                    ?>

                    <!-- Newsletter Signup -->
                    <div class="sidebar-widget newsletter-widget">
                        <h3>Stay Updated</h3>
                        <p>Subscribe to our newsletter for the latest updates and insights.</p>
                        <form class="newsletter-form" method="post" action="#">
                            <input type="email" name="email" placeholder="Your email address" required>
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</article>

<?php endwhile; ?>

<?php get_footer(); ?>

<?php
// Helper function for reading time
function get_estimated_reading_time() {
    $content = get_post_field('post_content', get_the_ID());
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Average reading speed
    return max(1, $reading_time);
}
?>
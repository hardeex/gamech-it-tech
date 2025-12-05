<?php
/* Template Name: Services Page - Professional */
get_header();
?>

<!-- Hero Section -->
<section class="services-hero">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content" data-aos="fade-up">
            <span class="hero-label">Our Services</span>
            <h1>Comprehensive IT Solutions for <span class="highlight">Modern Businesses</span></h1>
            <p class="hero-description">From custom software development to cloud infrastructure, cybersecurity to digital transformation—we deliver end-to-end technology solutions that drive growth and innovation.</p>
            <div class="hero-cta">
                <a href="<?php echo home_url('/contact'); ?>" class="btn-primary">Get Started</a>
                <a href="#services-grid" class="btn-secondary">Explore Services</a>
            </div>
        </div>
    </div>
    
    <div class="scroll-prompt">
        <div class="scroll-line"></div>
        <span class="scroll-text">Scroll to explore</span>
    </div>
</section>

<!-- Services Grid Section -->
<section class="services-main" id="services-grid">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">What We Offer</span>
            <h2>Our Core Services</h2>
            <p class="section-subtitle">Comprehensive technology solutions tailored to your unique business needs</p>
        </div>
        
        <div class="services-grid">
            <!-- Service 1: Software Development -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>Software Development</h3>
                    <p>Custom applications built with cutting-edge technologies to solve your unique business challenges and accelerate digital transformation.</p>
                    <ul class="service-features">
                        <li>Custom Web Applications</li>
                        <li>Mobile App Development (iOS & Android)</li>
                        <li>Enterprise Software Solutions</li>
                        <li>API Development & Integration</li>
                        <li>Legacy System Modernization</li>
                    </ul>
                    <a href="<?php echo home_url('/services/software-development'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
            
            <!-- Service 2: Cloud & Infrastructure -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>Cloud & Infrastructure</h3>
                    <p>Scalable cloud solutions and robust infrastructure management to ensure your operations run smoothly 24/7 with maximum reliability.</p>
                    <ul class="service-features">
                        <li>Cloud Migration & Strategy</li>
                        <li>AWS, Azure & Google Cloud</li>
                        <li>Infrastructure as Code (IaC)</li>
                        <li>DevOps & CI/CD Pipelines</li>
                        <li>Disaster Recovery & Backup</li>
                    </ul>
                    <a href="<?php echo home_url('/services/cloud-infrastructure'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
            
            <!-- Service 3: Cybersecurity -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>Cybersecurity Services</h3>
                    <p>Comprehensive security solutions to protect your digital assets, ensure compliance, and safeguard against evolving cyber threats.</p>
                    <ul class="service-features">
                        <li>Security Audits & Assessments</li>
                        <li>Penetration Testing</li>
                        <li>24/7 Security Monitoring</li>
                        <li>Compliance Management (GDPR, SOC 2)</li>
                        <li>Incident Response & Recovery</li>
                    </ul>
                    <a href="<?php echo home_url('/services/cybersecurity'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
            
            <!-- Service 4: Digital Transformation -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>Digital Transformation</h3>
                    <p>Strategic consulting to help you leverage technology for competitive advantage, operational excellence, and sustainable growth.</p>
                    <ul class="service-features">
                        <li>Technology Strategy & Roadmap</li>
                        <li>Process Automation & RPA</li>
                        <li>Digital Innovation Consulting</li>
                        <li>Change Management</li>
                        <li>Data Analytics & Business Intelligence</li>
                    </ul>
                    <a href="<?php echo home_url('/services/digital-transformation'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
            
            <!-- Service 5: E-Commerce Solutions -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>E-Commerce Solutions</h3>
                    <p>Full-scale e-commerce platforms designed to maximize conversions, enhance user experience, and scale with your business growth.</p>
                    <ul class="service-features">
                        <li>Custom E-Commerce Development</li>
                        <li>Shopify, WooCommerce, Magento</li>
                        <li>Payment Gateway Integration</li>
                        <li>Inventory & Order Management</li>
                        <li>Multi-Channel Selling Solutions</li>
                    </ul>
                    <a href="<?php echo home_url('/services/ecommerce'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
            
            <!-- Service 6: IT Consulting & Support -->
            <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                <div class="service-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                    </svg>
                </div>
                <div class="service-content">
                    <h3>IT Consulting & Support</h3>
                    <p>Expert guidance and round-the-clock support to keep your technology infrastructure running smoothly and efficiently.</p>
                    <ul class="service-features">
                        <li>24/7 Technical Support</li>
                        <li>IT Strategy Consulting</li>
                        <li>Technology Vendor Selection</li>
                        <li>System Integration Services</li>
                        <li>Managed IT Services</li>
                    </ul>
                    <a href="<?php echo home_url('/services/it-consulting'); ?>" class="service-link">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Technology Stack Section -->
<section class="tech-stack">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">Our Expertise</span>
            <h2>Technologies We Master</h2>
            <p class="section-subtitle">We work with industry-leading technologies to deliver robust, scalable solutions</p>
        </div>
        
        <div class="tech-categories">
            <!-- Frontend -->
            <div class="tech-category" data-aos="fade-up" data-aos-delay="100">
                <h3>Frontend Development</h3>
                <div class="tech-tags">
                    <span class="tech-tag">React</span>
                    <span class="tech-tag">Vue.js</span>
                    <span class="tech-tag">Angular</span>
                    <span class="tech-tag">Next.js</span>
                    <span class="tech-tag">TypeScript</span>
                    <span class="tech-tag">Tailwind CSS</span>
                </div>
            </div>
            
            <!-- Backend -->
            <div class="tech-category" data-aos="fade-up" data-aos-delay="200">
                <h3>Backend Development</h3>
                <div class="tech-tags">
                    <span class="tech-tag">Node.js</span>
                    <span class="tech-tag">Python</span>
                    <span class="tech-tag">PHP/Laravel</span>
                    <span class="tech-tag">Java/Spring</span>
                    <span class="tech-tag">.NET Core</span>
                    <span class="tech-tag">Ruby on Rails</span>
                </div>
            </div>
            
            <!-- Database -->
            <div class="tech-category" data-aos="fade-up" data-aos-delay="300">
                <h3>Database & Storage</h3>
                <div class="tech-tags">
                    <span class="tech-tag">PostgreSQL</span>
                    <span class="tech-tag">MongoDB</span>
                    <span class="tech-tag">MySQL</span>
                    <span class="tech-tag">Redis</span>
                    <span class="tech-tag">Elasticsearch</span>
                    <span class="tech-tag">Firebase</span>
                </div>
            </div>
            
            <!-- Cloud & DevOps -->
            <div class="tech-category" data-aos="fade-up" data-aos-delay="400">
                <h3>Cloud & DevOps</h3>
                <div class="tech-tags">
                    <span class="tech-tag">AWS</span>
                    <span class="tech-tag">Azure</span>
                    <span class="tech-tag">Google Cloud</span>
                    <span class="tech-tag">Docker</span>
                    <span class="tech-tag">Kubernetes</span>
                    <span class="tech-tag">Jenkins</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Process Section -->
<section class="our-process">
    <div class="container">
        <div class="section-heading light" data-aos="fade-up">
            <span class="section-label">How We Work</span>
            <h2>Our Development Process</h2>
            <p class="section-subtitle">A proven methodology that delivers results on time and within budget</p>
        </div>
        
        <div class="process-timeline">
            <div class="process-step" data-aos="fade-right" data-aos-delay="100">
                <div class="step-number">01</div>
                <div class="step-content">
                    <h3>Discovery & Planning</h3>
                    <p>We dive deep into understanding your business goals, challenges, and requirements to create a comprehensive project roadmap.</p>
                </div>
            </div>
            
            <div class="process-step" data-aos="fade-left" data-aos-delay="200">
                <div class="step-number">02</div>
                <div class="step-content">
                    <h3>Design & Prototyping</h3>
                    <p>Our design team creates intuitive, user-centered interfaces and interactive prototypes for your approval before development begins.</p>
                </div>
            </div>
            
            <div class="process-step" data-aos="fade-right" data-aos-delay="300">
                <div class="step-number">03</div>
                <div class="step-content">
                    <h3>Development & Testing</h3>
                    <p>Agile development sprints with continuous testing ensure high-quality code and rapid iteration based on your feedback.</p>
                </div>
            </div>
            
            <div class="process-step" data-aos="fade-left" data-aos-delay="400">
                <div class="step-number">04</div>
                <div class="step-content">
                    <h3>Deployment & Launch</h3>
                    <p>Smooth deployment to production with comprehensive documentation, training, and post-launch support to ensure success.</p>
                </div>
            </div>
            
            <div class="process-step" data-aos="fade-right" data-aos-delay="500">
                <div class="step-number">05</div>
                <div class="step-content">
                    <h3>Maintenance & Support</h3>
                    <p>Ongoing maintenance, updates, and 24/7 support to keep your systems running smoothly and adapt to changing needs.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Industries We Serve -->
<section class="industries">
    <div class="container">
        <div class="section-heading" data-aos="fade-up">
            <span class="section-label">Industries</span>
            <h2>Sectors We Serve</h2>
            <p class="section-subtitle">Deep expertise across multiple industries and business sectors</p>
        </div>
        
        <div class="industries-grid">
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="100">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                    </svg>
                </div>
                <h3>E-Commerce & Retail</h3>
                <p>Online stores, marketplaces, and omnichannel solutions</p>
            </div>
            
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="200">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h3>Healthcare</h3>
                <p>HIPAA-compliant systems and telemedicine platforms</p>
            </div>
            
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="300">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                </div>
                <h3>Finance & Banking</h3>
                <p>Secure fintech solutions and payment systems</p>
            </div>
            
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="400">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                    </svg>
                </div>
                <h3>Education</h3>
                <p>E-learning platforms and educational management systems</p>
            </div>
            
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="500">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3>Real Estate</h3>
                <p>Property management and listing platforms</p>
            </div>
            
            <div class="industry-card" data-aos="zoom-in" data-aos-delay="600">
                <div class="industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                </div>
                <h3>Logistics & Transportation</h3>
                <p>Fleet management and supply chain solutions</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="services-cta">
    <div class="container">
        <div class="cta-content" data-aos="fade-up">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how our services can help you achieve your business goals. Our experts are ready to provide a free consultation and project estimate.</p>
            <div class="cta-buttons">
                <a href="<?php echo home_url('/contact'); ?>" class="btn-primary">Get Free Consultation</a>
                <a href="<?php echo home_url('/portfolio'); ?>" class="btn-secondary">View Our Work</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
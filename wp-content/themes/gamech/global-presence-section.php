<!-- GLOBAL PRESENCE & VALUE PROPOSITION SECTION -->
<section class="global-presence">
    <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
            <span class="section-label">Why Choose Us</span>
            <h2 class="section-title">Global Excellence, Local Expertise</h2>
            <p class="section-description">
                Operating across continents with cutting-edge technology and unwavering commitment to your success
            </p>
        </div>
        
        <!-- Main Content Grid -->
        <div class="global-content-grid">
            
            <!-- Left: Interactive World Map -->
            <div class="map-container" data-aos="fade-right">
                <div class="map-wrapper">
                    <!-- World Map SVG -->
                    <div class="world-map" id="worldMap">
                        <!-- Map will be rendered here by JavaScript -->
                        <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                            <!-- Simplified world map paths -->
                            <g id="map-continents">
                                <!-- North America -->
                                <path class="continent" data-continent="north-america" d="M150,80 L180,70 L220,90 L240,120 L220,140 L180,145 L140,130 L120,100 Z" />
                                
                                <!-- South America -->
                                <path class="continent" data-continent="south-america" d="M200,200 L230,190 L240,220 L230,270 L200,290 L180,270 L175,230 Z" />
                                
                                <!-- Europe -->
                                <path class="continent" data-continent="europe" d="M460,80 L500,75 L520,95 L510,120 L480,125 L450,110 Z" />
                                
                                <!-- Africa -->
                                <path class="continent" data-continent="africa" d="M450,150 L490,145 L520,170 L530,220 L510,270 L470,280 L440,250 L435,190 Z" />
                                
                                <!-- Asia -->
                                <path class="continent" data-continent="asia" d="M550,70 L700,65 L750,90 L780,120 L760,160 L700,170 L630,165 L580,140 L560,110 Z" />
                                
                                <!-- Australia -->
                                <path class="continent" data-continent="australia" d="M720,280 L770,275 L800,290 L795,320 L760,330 L730,315 Z" />
                            </g>
                            
                            <!-- Office Location Markers -->
                            <g id="office-markers">
                                <!-- North America - USA -->
                                <circle class="office-marker" data-office="usa" cx="200" cy="110" r="8" />
                                <circle class="office-pulse pulse-1" cx="200" cy="110" r="8" />
                                <circle class="office-pulse pulse-2" cx="200" cy="110" r="8" />
                                
                                <!-- Europe - UK -->
                                <circle class="office-marker" data-office="uk" cx="480" cy="95" r="8" />
                                <circle class="office-pulse pulse-1" cx="480" cy="95" r="8" />
                                <circle class="office-pulse pulse-2" cx="480" cy="95" r="8" />
                                
                                <!-- Europe - Germany -->
                                <circle class="office-marker" data-office="germany" cx="505" cy="100" r="8" />
                                <circle class="office-pulse pulse-1" cx="505" cy="100" r="8" />
                                <circle class="office-pulse pulse-2" cx="505" cy="100" r="8" />
                                
                                <!-- Asia - India -->
                                <circle class="office-marker" data-office="india" cx="650" cy="150" r="8" />
                                <circle class="office-pulse pulse-1" cx="650" cy="150" r="8" />
                                <circle class="office-pulse pulse-2" cx="650" cy="150" r="8" />
                                
                                <!-- Asia - Singapore -->
                                <circle class="office-marker" data-office="singapore" cx="700" cy="165" r="8" />
                                <circle class="office-pulse pulse-1" cx="700" cy="165" r="8" />
                                <circle class="office-pulse pulse-2" cx="700" cy="165" r="8" />
                                
                                <!-- Asia - Japan -->
                                <circle class="office-marker" data-office="japan" cx="760" cy="120" r="8" />
                                <circle class="office-pulse pulse-1" cx="760" cy="120" r="8" />
                                <circle class="office-pulse pulse-2" cx="760" cy="120" r="8" />
                                
                                <!-- Australia -->
                                <circle class="office-marker" data-office="australia" cx="760" cy="300" r="8" />
                                <circle class="office-pulse pulse-1" cx="760" cy="300" r="8" />
                                <circle class="office-pulse pulse-2" cx="760" cy="300" r="8" />
                                
                                <!-- Africa - Nigeria -->
                                <circle class="office-marker active" data-office="nigeria" cx="475" cy="165" r="8" />
                                <circle class="office-pulse pulse-1" cx="475" cy="165" r="8" />
                                <circle class="office-pulse pulse-2" cx="475" cy="165" r="8" />
                            </g>
                            
                            <!-- Connection Lines -->
                            <g id="connection-lines" opacity="0.3">
                                <line class="connection-line" x1="475" y1="165" x2="480" y2="95" stroke-dasharray="5,5" />
                                <line class="connection-line" x1="475" y1="165" x2="650" y2="150" stroke-dasharray="5,5" />
                                <line class="connection-line" x1="480" y1="95" x2="650" y2="150" stroke-dasharray="5,5" />
                                <line class="connection-line" x1="650" y1="150" x2="700" y2="165" stroke-dasharray="5,5" />
                            </g>
                        </svg>
                    </div>
                    
                    <!-- Map Stats Overlay -->
                    <div class="map-stats">
                        <div class="map-stat-item">
                            <div class="stat-icon">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <div class="stat-info">
                                <span class="stat-number" data-count="25">0</span>
                                <span class="stat-label">Countries</span>
                            </div>
                        </div>
                        
                        <div class="map-stat-item">
                            <div class="stat-icon">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                </svg>
                            </div>
                            <div class="stat-info">
                                <span class="stat-number" data-count="12">0</span>
                                <span class="stat-label">Global Offices</span>
                            </div>
                        </div>
                        
                        <div class="map-stat-item">
                            <div class="stat-icon">
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                                </svg>
                            </div>
                            <div class="stat-info">
                                <span class="stat-number" data-count="15">0</span>
                                <span class="stat-label">Languages</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Office Info Tooltip -->
                    <div class="office-tooltip" id="officeTooltip">
                        <h4 class="tooltip-title">Office Location</h4>
                        <p class="tooltip-address">Address will appear here</p>
                        <span class="tooltip-status">
                            <span class="status-dot"></span>
                            Active
                        </span>
                    </div>
                </div>
                
                <!-- Map Legend -->
                <div class="map-legend">
                    <div class="legend-item">
                        <span class="legend-marker headquarters"></span>
                        <span class="legend-label">Headquarters</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-marker office"></span>
                        <span class="legend-label">Regional Offices</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-marker partner"></span>
                        <span class="legend-label">Partner Locations</span>
                    </div>
                </div>
            </div>
            
            <!-- Right: Value Propositions -->
            <div class="value-propositions" data-aos="fade-left">
                
                <!-- Value Prop 1: Global Reach -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="100">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>Global Reach</h3>
                        <p>With offices across 6 continents and operations in 25+ countries, we bring world-class IT solutions to your doorstep.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ 25+ Countries</span>
                            <span class="feature-tag">✓ 6 Continents</span>
                        </div>
                    </div>
                </div>
                
                <!-- Value Prop 2: Glocalisation -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="200">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>Glocalisation Approach</h3>
                        <p>Global standards meet local expertise. We adapt our solutions to match cultural, technical, and regulatory requirements of each market.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ Local Market Experts</span>
                            <span class="feature-tag">✓ Cultural Adaptation</span>
                        </div>
                    </div>
                </div>
                
                <!-- Value Prop 3: Cost Efficiency -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="300">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>Cost Efficiency</h3>
                        <p>Strategic global operations enable us to deliver premium services at competitive prices without compromising quality.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ Competitive Pricing</span>
                            <span class="feature-tag">✓ Maximum ROI</span>
                        </div>
                    </div>
                </div>
                
                <!-- Value Prop 4: Cutting-Edge Tech -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="400">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>Cutting-Edge Technology</h3>
                        <p>Stay ahead with AI, cloud computing, blockchain, IoT, and other emerging technologies integrated into your business.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ AI & ML</span>
                            <span class="feature-tag">✓ Cloud Native</span>
                            <span class="feature-tag">✓ Blockchain</span>
                        </div>
                    </div>
                </div>
                
                <!-- Value Prop 5: 24/7 Support -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="500">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>24/7 Global Support</h3>
                        <p>Round-the-clock assistance from distributed teams across time zones. Your success never sleeps, and neither do we.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ 24/7 Availability</span>
                            <span class="feature-tag">✓ Multilingual Teams</span>
                        </div>
                    </div>
                </div>
                
                <!-- Value Prop 6: Scalability -->
                <div class="value-card" data-aos="fade-up" data-aos-delay="600">
                    <div class="value-icon">
                        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"/>
                        </svg>
                    </div>
                    <div class="value-content">
                        <h3>Future-Ready Solutions</h3>
                        <p>Scalable architectures that grow with your business. Built for today, designed for tomorrow's challenges.</p>
                        <div class="value-features">
                            <span class="feature-tag">✓ Scalable</span>
                            <span class="feature-tag">✓ Future-Proof</span>
                            <span class="feature-tag">✓ Agile</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
        <!-- Bottom CTA -->
        <div class="global-cta" data-aos="fade-up">
            <div class="cta-content">
                <h3>Ready to Go Global?</h3>
                <p>Partner with us to expand your reach and accelerate growth worldwide</p>
            </div>
            <a href="<?php echo home_url('/contact'); ?>" class="btn btn-primary">
                Start Your Journey
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </a>
        </div>
        
    </div>
    
    <!-- Animated Background Elements -->
    <div class="global-bg-elements">
        <div class="bg-globe"></div>
        <div class="bg-dots"></div>
    </div>
</section>
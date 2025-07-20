// Enhanced JavaScript for NeurOS Website - Framer-quality interactivity
(function() {
    'use strict';
    
    // Utility functions
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    
    const throttle = (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };
    
    // Initialize all modules
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initScrollAnimations();
        initForms();
        initImageLoading();
        initParallax();
        initSmoothScroll();
        initHoverEffects();
        initPageTransitions();
    });
    
    // Enhanced Navigation
    function initNavigation() {
        const header = document.querySelector('.site-header');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!header || !mobileMenuToggle || !navMenu) return;
        
        // Mobile menu toggle with enhanced animation
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.style.overflow = isActive ? '' : 'hidden';
            
            // Prevent scrolling when menu is open
            if (!isActive) {
                const scrollY = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
            } else {
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && 
                !navMenu.contains(event.target) && 
                navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => closeMobileMenu());
        });
        
        function closeMobileMenu() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
        }
        
        // Enhanced header scroll behavior
        let lastScrollY = 0;
        let ticking = false;
        
        function updateHeader() {
            const scrollY = window.scrollY;
            
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        });
        
        // Set active nav item
        const currentPath = window.location.pathname;
        navMenu.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || 
                (currentPath === '/' && href === 'index.html') ||
                (currentPath.includes(href.replace('.html', '')) && href !== '/')) {
                link.classList.add('active');
            }
        });
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .stagger-animate');
        
        if (!animatedElements.length || !('IntersectionObserver' in window)) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Add delay for stagger animations
                    if (entry.target.classList.contains('stagger-animate')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, index) => {
                            child.style.transitionDelay = `${index * 0.1}s`;
                        });
                    }
                    
                    // Unobserve after animation
                    setTimeout(() => {
                        observer.unobserve(entry.target);
                    }, 1500);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => observer.observe(el));
    }
    
    // Enhanced form handling
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => validateInput(input));
                input.addEventListener('input', debounce(() => validateInput(input), 500));
            });
            
            // Form submission
            form.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Validate all inputs
                let isValid = true;
                inputs.forEach(input => {
                    if (!validateInput(input)) {
                        isValid = false;
                    }
                });
                
                if (!isValid) return;
                
                // Add loading state
                const submitBtn = form.querySelector('[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.classList.add('loading');
                
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                showFormSuccess(form);
                
                // Reset form
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                
                // Clear validation states
                inputs.forEach(input => {
                    input.parentElement.classList.remove('has-error', 'has-success');
                });
            });
        });
    }
    
    function validateInput(input) {
        const parent = input.parentElement;
        const value = input.value.trim();
        let isValid = true;
        
        // Remove existing error messages
        const existingError = parent.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        // Required field validation
        if (input.hasAttribute('required') && !value) {
            showError(parent, 'This field is required');
            isValid = false;
        }
        
        // Email validation
        else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showError(parent, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Update visual state
        if (value) {
            parent.classList.toggle('has-error', !isValid);
            parent.classList.toggle('has-success', isValid);
        } else {
            parent.classList.remove('has-error', 'has-success');
        }
        
        return isValid;
    }
    
    function showError(parent, message) {
        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = message;
        error.style.cssText = `
            display: block;
            color: #e74c3c;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            animation: fadeIn 0.3s ease;
        `;
        parent.appendChild(error);
    }
    
    function showFormSuccess(form) {
        const success = document.createElement('div');
        success.className = 'form-success animate-fade-in';
        success.textContent = 'Thank you! We\'ll be in touch soon.';
        form.appendChild(success);
        
        setTimeout(() => {
            success.style.opacity = '0';
            setTimeout(() => success.remove(), 300);
        }, 5000);
    }
    
    // Progressive image loading
    function initImageLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Add loading class
            img.classList.add('img-loading');
            
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'img-placeholder skeleton-loader';
            placeholder.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: inherit;
            `;
            
            if (img.parentElement) {
                img.parentElement.style.position = 'relative';
                img.parentElement.insertBefore(placeholder, img);
            }
            
            // Handle image load
            if (img.complete) {
                handleImageLoad(img, placeholder);
            } else {
                img.addEventListener('load', () => handleImageLoad(img, placeholder));
                img.addEventListener('error', () => handleImageError(img, placeholder));
            }
        });
    }
    
    function handleImageLoad(img, placeholder) {
        img.classList.remove('img-loading');
        img.classList.add('img-loaded');
        if (placeholder && placeholder.parentElement) {
            setTimeout(() => placeholder.remove(), 300);
        }
    }
    
    function handleImageError(img, placeholder) {
        img.classList.remove('img-loading');
        img.classList.add('img-error');
        if (placeholder) {
            placeholder.innerHTML = '<span style="color: #999; font-size: 0.875rem;">Image failed to load</span>';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.background = '#f0f0f0';
        }
    }
    
    // Parallax effects
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (!parallaxElements.length) return;
        
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }, 16));
    }
    
    // Enhanced smooth scrolling
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Enhanced hover effects
    function initHoverEffects() {
        // Magnetic buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
        
        // Tilt effect for cards
        document.querySelectorAll('.card, .value-item, .step, .faq-item').forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const tiltX = (y - 0.5) * 10;
                const tiltY = (x - 0.5) * -10;
                
                this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Page transitions
    function initPageTransitions() {
        // Add transition class to body
        document.body.classList.add('page-transition');
        
        // Animate links
        document.querySelectorAll('a:not([href^="#"]):not([href^="http"]):not([href^="mailto"])').forEach(link => {
            link.addEventListener('click', function(e) {
                if (e.ctrlKey || e.metaKey || e.shiftKey) return;
                
                e.preventDefault();
                const href = this.getAttribute('href');
                
                document.body.style.opacity = '0';
                document.body.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    }
    
    // Performance monitoring
    if ('PerformanceObserver' in window) {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        });
        perfObserver.observe({ entryTypes: ['measure'] });
    }
})();
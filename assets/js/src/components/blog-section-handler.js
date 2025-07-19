/**
 * Blog Section Handler Module
 * 
 * Purpose: Manages the blog section visibility and removal
 * File size: ~150 lines
 * 
 * Table of Contents:
 * - Configuration (line 15)
 * - Blog Section Removal (line 30)
 * - Export Functions (line 100)
 * 
 * Dependencies: None
 * 
 * Last Updated: Created to handle blog section removal
 */

// Configuration for blog-related elements to remove
const BLOG_SELECTORS = {
  sections: [
    'section[data-framer-name="Blog"]',
    'section[name="Blog"]',
    '.framer-1ysj058', // Blog section class
    '[data-framer-name="blog-wrapper"]',
    '[data-framer-name="blog list"]'
  ],
  links: [
    'a[href*="/blog"]',
    'a[href="./blog"]',
    'a[href="blog"]'
  ],
  components: [
    '[data-framer-name="blog card"]',
    '.framer-EAVeB' // Blog card component class
  ]
};

/**
 * Removes all blog-related sections from the page
 */
export function removeBlogSections() {
  // Remove blog sections
  BLOG_SELECTORS.sections.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing blog section: ${selector}`);
      element.remove();
    });
  });
  
  // Remove blog links
  BLOG_SELECTORS.links.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing blog link: ${selector}`);
      element.remove();
    });
  });
  
  // Remove blog components
  BLOG_SELECTORS.components.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing blog component: ${selector}`);
      element.remove();
    });
  });
}

/**
 * Prevents blog section from being rendered
 * This function should be called before Framer initializes
 */
export function preventBlogRendering() {
  // Override any functions that might render blog content
  if (window.FramerRuntime) {
    const originalRender = window.FramerRuntime.render;
    
    window.FramerRuntime.render = function(...args) {
      // Check if rendering blog-related content
      const elementString = JSON.stringify(args);
      if (elementString.includes('Blog') || 
          elementString.includes('blog') ||
          elementString.includes('Our blogs')) {
        console.log('Preventing blog section render');
        return null;
      }
      
      return originalRender.apply(this, args);
    };
  }
}

/**
 * Initialize blog removal with mutation observer
 */
export function initializeBlogRemoval() {
  // Initial removal
  removeBlogSections();
  
  // Watch for dynamically added blog content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          // Check if it's a blog-related element
          const nodeString = node.outerHTML || '';
          if (nodeString.includes('Blog') || 
              nodeString.includes('blog') ||
              nodeString.includes('Our blogs')) {
            removeBlogSections();
          }
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  return () => observer.disconnect();
}

// Auto-initialize on module load
if (typeof window !== 'undefined') {
  // Try to prevent rendering before DOM loads
  preventBlogRendering();
  
  // Remove elements after DOM loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBlogRemoval);
  } else {
    initializeBlogRemoval();
  }
}
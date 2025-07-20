/**
 * Visibility Control Module
 * 
 * Handles hiding/showing elements including blog sections, patients sections,
 * footer sections, and Framer badge.
 * 
 * @module visibility-control
 */

import { siteConfig } from '../config/site-config.js';
import { on } from '../core/event-manager.js';

/**
 * Visibility control module
 */
const visibilityModule = {
  name: 'visibility-control',
  hiddenElements: new Set(),
  
  /**
   * Initialize visibility module
   */
  initialize() {
    console.log('[Visibility] Initializing...');
    
    // Apply CSS rules immediately
    this.injectVisibilityCSS();
    
    // Listen for modification events
    on('neuros:apply-modifications', ({ trigger }) => {
      this.apply(trigger);
    });
  },
  
  /**
   * Apply visibility modifications
   */
  apply(trigger) {
    // Apply on all triggers to ensure elements stay hidden
    console.log(`[Visibility] Applying modifications (${trigger})`);
    
    // Hide Framer badge
    this.hideFramerBadge();
    
    // Hide configured elements
    this.hideElements();
    
    // Hide footer sections
    this.hideFooterSections();
  },
  
  /**
   * Inject CSS for immediate hiding
   */
  injectVisibilityCSS() {
    // Check if CSS already exists
    if (document.getElementById('neuros-visibility-css')) return;
    
    const style = document.createElement('style');
    style.id = 'neuros-visibility-css';
    
    // Build CSS rules from config
    const selectors = [
      ...siteConfig.visibility.hiddenElements,
      ...siteConfig.visibility.hiddenClasses.map(cls => `.${cls}`)
    ];
    
    style.textContent = `
      /* Neuros Visibility Control */
      ${selectors.join(',\n')} {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
      }
      
      /* Specific hiding for office hours */
      *:has(> h4:contains("Office hours")) {
        display: none !important;
      }
      
      /* Hide elements containing specific text */
      ${siteConfig.content.footer.hiddenSections.map(section => 
        `*:has-text("${section}")`
      ).join(',\n')} {
        display: none !important;
      }
    `;
    
    document.head.appendChild(style);
  },
  
  /**
   * Hide Framer badge
   */
  hideFramerBadge() {
    const badges = document.querySelectorAll(
      '#__framer-badge-container, .__framer-badge, [id*="framer-badge"]'
    );
    
    badges.forEach(badge => {
      if (!this.hiddenElements.has(badge)) {
        badge.remove();
        this.hiddenElements.add(badge);
        console.log('[Visibility] Removed Framer badge');
      }
    });
  },
  
  /**
   * Hide configured elements
   */
  hideElements() {
    // Hide by class
    siteConfig.visibility.hiddenClasses.forEach(className => {
      const elements = document.getElementsByClassName(className);
      Array.from(elements).forEach(el => {
        if (!this.hiddenElements.has(el)) {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
          el.setAttribute('aria-hidden', 'true');
          this.hiddenElements.add(el);
        }
      });
    });
    
    // Hide by selector
    siteConfig.visibility.hiddenElements.forEach(selector => {
      try {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (!this.hiddenElements.has(el)) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.setAttribute('aria-hidden', 'true');
            this.hiddenElements.add(el);
          }
        });
      } catch (e) {
        // Skip invalid selectors
      }
    });
  },
  
  /**
   * Hide footer sections
   */
  hideFooterSections() {
    // Find footer containers
    const footerSelectors = [
      'footer',
      '[role="contentinfo"]',
      '.footer',
      '[class*="footer"]'
    ];
    
    footerSelectors.forEach(selector => {
      const footers = document.querySelectorAll(selector);
      
      footers.forEach(footer => {
        // Look for sections to hide
        const headings = footer.querySelectorAll('h3, h4, h5');
        
        headings.forEach(heading => {
          const text = heading.textContent || '';
          
          // Check if this section should be hidden
          const shouldHide = siteConfig.content.footer.hiddenSections.some(section =>
            text.includes(section)
          );
          
          if (shouldHide) {
            // Hide the heading and its container
            const container = this.findSectionContainer(heading);
            if (container && !this.hiddenElements.has(container)) {
              container.style.display = 'none';
              container.style.visibility = 'hidden';
              container.setAttribute('aria-hidden', 'true');
              this.hiddenElements.add(container);
              console.log(`[Visibility] Hid footer section: ${text}`);
            }
          }
        });
      });
    });
  },
  
  /**
   * Find the container element for a section
   */
  findSectionContainer(element) {
    let current = element.parentElement;
    
    while (current && current !== document.body) {
      // Check if this looks like a section container
      const hasMultipleChildren = current.children.length > 1;
      const hasSiblings = current.parentElement && 
                         current.parentElement.children.length > 1;
      
      if (hasMultipleChildren || !hasSiblings) {
        return current;
      }
      
      current = current.parentElement;
    }
    
    return element.parentElement;
  },
  
  /**
   * Show an element (utility method)
   */
  showElement(element) {
    if (this.hiddenElements.has(element)) {
      element.style.display = '';
      element.style.visibility = '';
      element.removeAttribute('aria-hidden');
      this.hiddenElements.delete(element);
    }
  },
  
  /**
   * Toggle visibility (utility method)
   */
  toggleElement(element) {
    if (this.hiddenElements.has(element)) {
      this.showElement(element);
    } else {
      this.hideElement(element);
    }
  }
};

// Register module with core
if (window.NeurosCore) {
  window.NeurosCore.registerModule('visibility-control', visibilityModule);
}

// Export for other modules
export default visibilityModule;
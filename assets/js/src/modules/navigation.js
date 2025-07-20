/**
 * Navigation Module
 * 
 * Simplified navigation management that works with Framer's system
 * instead of fighting against it.
 * 
 * @module navigation
 */

import { siteConfig } from '../config/site-config.js';
import { on, NEUROS_EVENTS } from '../core/event-manager.js';

/**
 * Navigation module
 */
const navigationModule = {
  name: 'navigation',
  
  /**
   * Initialize navigation module
   */
  initialize() {
    console.log('[Navigation] Initializing...');
    
    // Listen for modification events
    on('neuros:apply-modifications', ({ trigger }) => {
      this.apply(trigger);
    });
  },
  
  /**
   * Apply navigation modifications
   */
  apply(trigger) {
    // Only apply on specific triggers to avoid excessive processing
    const relevantTriggers = ['init', 'dom-ready', 'page-ready', 'navigation', 'route-change'];
    if (!relevantTriggers.includes(trigger)) return;
    
    console.log(`[Navigation] Applying modifications (${trigger})`);
    
    // Hide navigation items
    this.hideNavigationItems();
    
    // Update navigation links
    this.updateNavigationLinks();
  },
  
  /**
   * Hide unwanted navigation items
   */
  hideNavigationItems() {
    // Find all navigation links
    const navLinks = document.querySelectorAll('nav a, [role="navigation"] a, header a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const text = link.textContent || '';
      
      // Check if this link should be hidden
      const shouldHide = siteConfig.navigation.hiddenItems.some(item => {
        const itemLower = item.toLowerCase();
        return href.includes(itemLower) || 
               text.toLowerCase().includes(itemLower);
      });
      
      if (shouldHide) {
        // Hide the link and its container
        link.style.display = 'none';
        link.style.visibility = 'hidden';
        
        // Also hide parent if it only contains this link
        const parent = link.parentElement;
        if (parent && parent.children.length === 1) {
          parent.style.display = 'none';
          parent.style.visibility = 'hidden';
        }
      }
    });
  },
  
  /**
   * Update navigation links (e.g., LinkedIn)
   */
  updateNavigationLinks() {
    // Update all links on the page
    const allLinks = document.querySelectorAll('a[href]');
    
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      // Update LinkedIn URL
      if (href === siteConfig.social.linkedIn.original) {
        link.setAttribute('href', siteConfig.social.linkedIn.replacement);
        console.log('[Navigation] Updated LinkedIn URL');
      }
    });
  },
  
  /**
   * Clean method to properly structure navigation
   */
  restructureNavigation() {
    // This method can be called if we need to completely rebuild navigation
    const navContainers = document.querySelectorAll('nav, [role="navigation"]');
    
    navContainers.forEach(nav => {
      const links = Array.from(nav.querySelectorAll('a'));
      
      // Filter and reorder based on config
      const configuredLinks = siteConfig.navigation.items
        .map(item => {
          // Find matching link
          const link = links.find(l => {
            const href = l.getAttribute('href') || '';
            return href.includes(item.href) || 
                   href.includes(item.id) ||
                   l.textContent.includes(item.label);
          });
          
          if (link) {
            // Update link properties
            link.textContent = item.label;
            link.setAttribute('href', item.href);
            return { element: link, order: item.order };
          }
          
          return null;
        })
        .filter(Boolean)
        .sort((a, b) => a.order - b.order);
      
      // Clear and rebuild navigation if we have configured links
      if (configuredLinks.length > 0) {
        // Remove all links first
        links.forEach(link => {
          const parent = link.parentElement;
          if (parent && parent !== nav) {
            parent.remove();
          } else {
            link.remove();
          }
        });
        
        // Add configured links back
        configuredLinks.forEach(({ element }) => {
          nav.appendChild(element);
        });
      }
    });
  }
};

// Register module with core
if (window.NeurosCore) {
  window.NeurosCore.registerModule('navigation', navigationModule);
}

// Export for other modules
export default navigationModule;
/**
 * Navigation Renderer Module
 * 
 * Purpose: Handles the rendering logic for navigation components
 * File size: ~300 lines
 * 
 * Table of Contents:
 * - Import Dependencies (line 15)
 * - Navigation Link Renderer (line 30)
 * - Navigation Bar Component (line 100)
 * - Mobile Menu Handler (line 200)
 * - Export Functions (line 280)
 * 
 * Dependencies: navigation-config.js, framer runtime
 * 
 * Last Updated: Refactored to use configuration-based navigation items
 */

import { 
  navigationItems, 
  scheduleButtonConfig, 
  navigationStyles,
  getActiveNavigationItems 
} from './navigation-config.js';

/**
 * Renders a single navigation link
 * @param {Object} item - Navigation item configuration
 * @param {Object} currentStyles - Current style overrides
 * @returns {Object} Rendered navigation link element
 */
export function renderNavigationLink(item, currentStyles = {}) {
  const { e, p, N } = window.FramerRuntime; // Assuming these are available globally
  
  return e(
    "a",
    {
      className: `${item.className} framer-1mtqgq5`,
      "data-framer-name": item.dataFramerName,
      href: item.href,
      children: e(
        "div",
        {
          className: "framer-navigation-text",
          style: {
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexShrink: 0,
            "--extracted-r6o4lv": "var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7))",
            "--framer-link-text-color": "rgb(0, 153, 255)",
            "--framer-link-text-decoration": "underline",
            transform: "none",
            ...currentStyles
          },
          "data-framer-component-type": "RichTextContainer",
          children: e(
            p,
            {
              className: "framer-text framer-styles-preset-7w5cfp",
              "data-styles-preset": "f3yeTtevI",
              style: {
                "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d8a875a2-ddce-46fa-b134-dc875161545a, rgba(255, 255, 255, 0.7)))"
              },
              children: item.label
            }
          )
        }
      )
    }
  );
}

/**
 * Renders the schedule demo button
 * @param {Object} config - Button configuration
 * @returns {Object} Rendered button element
 */
export function renderScheduleButton(config = scheduleButtonConfig) {
  const { e, p } = window.FramerRuntime;
  
  return e(
    "div",
    {
      className: "framer-dyvpkc-container",
      children: e(
        "a",
        {
          "aria-label": config.ariaLabel,
          className: config.className,
          "data-framer-name": config.dataFramerName,
          style: config.style,
          href: config.href,
          target: config.target,
          rel: config.rel,
          children: e(
            "div",
            {
              className: "framer-1kj038a",
              style: {
                outline: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexShrink: 0,
                "--extracted-r6o4lv": "var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0))",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                transform: "none"
              },
              "data-framer-component-type": "RichTextContainer",
              children: e(
                p,
                {
                  style: {
                    "--font-selector": "RlI7SW50ZXJEaXNwbGF5LVNlbWlCb2xk",
                    "--framer-font-family": '"Inter Display", "Inter Display Placeholder", sans-serif',
                    "--framer-font-size": "14px",
                    "--framer-font-weight": "600",
                    "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7ec39054-6594-42f0-a512-ac2f17133a96, rgb(0, 0, 0)))"
                  },
                  className: "framer-text",
                  children: config.label
                }
              )
            }
          )
        }
      )
    }
  );
}

/**
 * Renders the complete navigation menu
 * @param {Object} options - Rendering options
 * @returns {Object} Complete navigation menu
 */
export function renderNavigationMenu(options = {}) {
  const { e } = window.FramerRuntime;
  const activeItems = getActiveNavigationItems();
  
  return e(
    "div",
    {
      className: "framer-1kwnghx",
      "data-framer-name": "menu-links",
      children: [
        ...activeItems.map(item => renderNavigationLink(item, options.linkStyles)),
        renderScheduleButton()
      ]
    }
  );
}

/**
 * Handles mobile menu toggle
 * @param {boolean} isOpen - Current menu state
 * @returns {void}
 */
export function toggleMobileMenu(isOpen) {
  // Implementation for mobile menu toggle
  const mobileMenu = document.querySelector('.framer-mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('is-open', isOpen);
  }
}

/**
 * Initialize navigation with proper event handlers
 */
export function initializeNavigation() {
  // Function to remove blocked navigation elements
  const removeBlockedElements = () => {
    // Remove blog and patients links - more aggressive selectors
    const selectors = [
      'a[href*="blog"]',
      'a[href*="patients"]',
      'a[href="./blog"]',
      'a[href="./patients"]',
      'a[href="/blog"]',
      'a[href="/patients"]',
      '.framer-69tlqz', // Blog link class
      '.framer-7ddsau', // Patients link class
      '.framer-13m8v6l', // Blog text container
      '.framer-zwpqgk'  // Patients text container
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        // Check if it's in navigation
        if (el.closest('nav') || el.closest('.framer-1kwnghx') || el.closest('[data-framer-name="menu-links"]')) {
          console.log(`Removing navigation element: ${selector}`);
          el.remove();
        }
      });
    });
    
    // Remove specific framer classes requested
    document.querySelectorAll('.framer-oqhszj, .framer-1m9nwvx').forEach(el => {
      console.log(`Removing element with class: ${el.className}`);
      el.remove();
    });
  };
  
  // Function to hide elements with CSS as backup
  const hideBlockedElements = () => {
    const style = document.createElement('style');
    style.textContent = `
      /* Hide Blog and Patients navigation links */
      .framer-69tlqz, .framer-7ddsau,
      .framer-13m8v6l, .framer-zwpqgk,
      nav a[href*="blog"], nav a[href*="patients"],
      .framer-oqhszj, .framer-1m9nwvx {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  };
  
  // Apply CSS hiding immediately
  hideBlockedElements();
  
  // Initial removal
  removeBlockedElements();
  
  // Aggressive monitoring with multiple strategies
  let removalCount = 0;
  const maxRemovals = 20;
  
  const aggressiveRemoval = () => {
    removeBlockedElements();
    removalCount++;
    
    if (removalCount < maxRemovals) {
      setTimeout(aggressiveRemoval, 200);
    }
  };
  
  // Start aggressive removal after a delay to let Framer render
  setTimeout(aggressiveRemoval, 100);
  
  // Watch for changes in navigation
  const observer = new MutationObserver(() => {
    removeBlockedElements();
  });
  
  // Observe multiple containers
  const containers = [
    ...document.querySelectorAll('.framer-1kwnghx'),
    ...document.querySelectorAll('nav'),
    ...document.querySelectorAll('[data-framer-name="menu-links"]'),
    document.body
  ];
  
  containers.forEach(container => {
    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['href', 'class']
      });
    }
  });
  
  return () => observer.disconnect();
}

// Auto-initialize on module load
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initializeNavigation);
}
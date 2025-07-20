/**
 * Main Entry Point for Neuros Website JavaScript
 * 
 * Purpose: Coordinates all modules and initializes the application
 * File size: ~100 lines
 * 
 * Table of Contents:
 * - Module Imports (line 15)
 * - Initialization Functions (line 30)
 * - Export Main Function (line 80)
 * 
 * Dependencies: All modular components
 * 
 * Last Updated: Created as main entry point for modular JavaScript
 */

// Import navigation modules
import { initializeNavigation } from './navigation/navigation-renderer.js';
import { initializeBlogRemoval } from './components/blog-section-handler.js';
import { initializePatientsRemoval } from './components/patients-section-handler.js';
import { initializeFooterHandler } from './components/footer-handler.js';
import { initializeFAQUpdater } from './components/faq-updater.js';
import { initializeFAQUpdaterV2 } from './components/faq-updater-v2.js';

// Store cleanup functions
let cleanupFunctions = [];
let framerBadgeObserver = null;

/**
 * Hide Framer badge/watermark
 */
function hideFramerBadge() {
  // Inject CSS to hide the badge
  const style = document.createElement('style');
  style.textContent = `
    #__framer-badge-container,
    .__framer-badge {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Function to remove badge from DOM
  function removeBadge() {
    const badgeContainer = document.getElementById('__framer-badge-container');
    if (badgeContainer) {
      badgeContainer.remove();
      console.log('Framer badge removed');
    }
  }
  
  // Remove immediately if it exists
  removeBadge();
  
  // Set up observer to catch dynamically added badges
  framerBadgeObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // Element node
            if (node.id === '__framer-badge-container' || 
                (node.querySelector && node.querySelector('#__framer-badge-container'))) {
              removeBadge();
            }
          }
        }
      }
    }
  });
  
  // Start observing
  framerBadgeObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Return cleanup function
  return () => {
    if (framerBadgeObserver) {
      framerBadgeObserver.disconnect();
      framerBadgeObserver = null;
    }
  };
}

/**
 * Initialize all website functionality
 */
export function initializeWebsite() {
  console.log('Initializing Neuros website...');
  
  try {
    // Hide Framer badge
    const badgeCleanup = hideFramerBadge();
    if (badgeCleanup) cleanupFunctions.push(badgeCleanup);
    
    // Initialize navigation
    const navCleanup = initializeNavigation();
    if (navCleanup) cleanupFunctions.push(navCleanup);
    
    // Remove blog sections
    const blogCleanup = initializeBlogRemoval();
    if (blogCleanup) cleanupFunctions.push(blogCleanup);
    
    // Remove patients sections
    const patientsCleanup = initializePatientsRemoval();
    if (patientsCleanup) cleanupFunctions.push(patientsCleanup);
    
    // Remove office hours from footer
    const footerCleanup = initializeFooterHandler();
    if (footerCleanup) cleanupFunctions.push(footerCleanup);
    
    // Update FAQ content
    const faqCleanup = initializeFAQUpdater();
    if (faqCleanup) cleanupFunctions.push(faqCleanup);
    
    // Also run the more aggressive FAQ updater
    const faqCleanupV2 = initializeFAQUpdaterV2();
    if (faqCleanupV2) cleanupFunctions.push(faqCleanupV2);
    
    console.log('Website initialization complete');
  } catch (error) {
    console.error('Error during website initialization:', error);
  }
}

/**
 * Cleanup function to remove all observers and event listeners
 */
export function cleanup() {
  console.log('Cleaning up website resources...');
  
  cleanupFunctions.forEach(cleanupFn => {
    try {
      cleanupFn();
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  });
  
  cleanupFunctions = [];
}

/**
 * Re-initialize the website (useful for SPA navigation)
 */
export function reinitialize() {
  cleanup();
  initializeWebsite();
}

// Auto-initialize on module load
if (typeof window !== 'undefined') {
  // Wait for Framer to load before initializing
  function waitForFramerAndInitialize() {
    // Check if Framer has finished loading
    if (window.FramerRuntime || document.querySelector('[data-framer-hydrate-v2]')) {
      // Give Framer a moment to finish rendering
      setTimeout(() => {
        console.log('Framer detected, initializing Neuros customizations...');
        initializeWebsite();
      }, 500);
    } else {
      // Check again in 100ms
      setTimeout(waitForFramerAndInitialize, 100);
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForFramerAndInitialize);
  } else {
    // DOM already loaded
    waitForFramerAndInitialize();
  }
  
  // Handle page visibility changes (useful for SPAs)
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      reinitialize();
    }
  });
}

// Export for use in other scripts
window.NeurosWebsite = {
  initialize: initializeWebsite,
  cleanup: cleanup,
  reinitialize: reinitialize
};
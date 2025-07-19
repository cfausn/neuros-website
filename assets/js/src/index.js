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

// Store cleanup functions
let cleanupFunctions = [];

/**
 * Initialize all website functionality
 */
export function initializeWebsite() {
  console.log('Initializing Neuros website...');
  
  try {
    // Initialize navigation
    const navCleanup = initializeNavigation();
    if (navCleanup) cleanupFunctions.push(navCleanup);
    
    // Remove blog sections
    const blogCleanup = initializeBlogRemoval();
    if (blogCleanup) cleanupFunctions.push(blogCleanup);
    
    // Remove patients sections
    const patientsCleanup = initializePatientsRemoval();
    if (patientsCleanup) cleanupFunctions.push(patientsCleanup);
    
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
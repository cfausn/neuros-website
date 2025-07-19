/**
 * Patients Section Handler Module
 * 
 * Purpose: Manages the patients section visibility and removal
 * File size: ~150 lines
 * 
 * Table of Contents:
 * - Configuration (line 15)
 * - Patients Section Removal (line 30)
 * - Export Functions (line 100)
 * 
 * Dependencies: None
 * 
 * Last Updated: Created to handle patients section removal
 */

// Configuration for patients-related elements to remove
const PATIENTS_SELECTORS = {
  sections: [
    'section[data-framer-name="Patients"]',
    'section[name="Patients"]',
    '[data-framer-name="patients-wrapper"]',
    '.framer-oqhszj', // Specific class requested to be removed
    '.framer-1m9nwvx'  // Specific class requested to be removed
  ],
  links: [
    'a[href*="/patients"]',
    'a[href="./patients"]',
    'a[href="patients"]',
    '.framer-7ddsau' // Patients link class
  ],
  components: [
    '[data-framer-name="patients card"]',
    '.framer-zwpqgk' // Patients text container class
  ]
};

/**
 * Removes all patients-related sections from the page
 */
export function removePatientsSection() {
  // Remove patients sections
  PATIENTS_SELECTORS.sections.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing patients section: ${selector}`);
      element.remove();
    });
  });
  
  // Remove patients links
  PATIENTS_SELECTORS.links.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing patients link: ${selector}`);
      element.remove();
    });
  });
  
  // Remove patients components
  PATIENTS_SELECTORS.components.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      console.log(`Removing patients component: ${selector}`);
      element.remove();
    });
  });
}

/**
 * Prevents patients section from being rendered
 * This function should be called before Framer initializes
 */
export function preventPatientsRendering() {
  // Override any functions that might render patients content
  if (window.FramerRuntime) {
    const originalRender = window.FramerRuntime.render;
    
    window.FramerRuntime.render = function(...args) {
      // Check if rendering patients-related content
      const elementString = JSON.stringify(args);
      if (elementString.includes('Patients') || 
          elementString.includes('patients') ||
          elementString.includes('framer-oqhszj') ||
          elementString.includes('framer-1m9nwvx')) {
        console.log('Preventing patients section render');
        return null;
      }
      
      return originalRender.apply(this, args);
    };
  }
}

/**
 * Initialize patients removal with mutation observer
 */
export function initializePatientsRemoval() {
  // Initial removal
  removePatientsSection();
  
  // Watch for dynamically added patients content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element node
          // Check if it's a patients-related element
          const nodeString = node.outerHTML || '';
          if (nodeString.includes('Patients') || 
              nodeString.includes('patients') ||
              nodeString.includes('framer-oqhszj') ||
              nodeString.includes('framer-1m9nwvx')) {
            removePatientsSection();
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
  preventPatientsRendering();
  
  // Remove elements after DOM loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePatientsRemoval);
  } else {
    initializePatientsRemoval();
  }
}
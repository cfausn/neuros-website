/**
 * Footer Handler Module
 * 
 * Purpose: Remove office hours section from footer
 * Target: Elements with class framer-n4csf8 containing "Office hours"
 */

// Track observer for cleanup
let footerObserver = null;

/**
 * Remove office hours section from footer
 */
function removeOfficeHours() {
  // Find all potential office hours containers
  const containers = document.querySelectorAll('.framer-n4csf8');
  
  containers.forEach(container => {
    // Check if this container has "Office hours" heading
    const heading = container.querySelector('h4');
    if (heading && heading.textContent.includes('Office hours')) {
      console.log('Removing office hours section');
      container.remove();
    }
  });
  
  // Also check for any element containing the exact text
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    if (element.childNodes.length === 1 && 
        element.firstChild.nodeType === Node.TEXT_NODE &&
        element.firstChild.textContent.trim() === 'Office hours') {
      // Find the parent container and remove it
      let parent = element.parentElement;
      while (parent && !parent.classList.contains('framer-n4csf8')) {
        parent = parent.parentElement;
      }
      if (parent) {
        console.log('Found and removing office hours container');
        parent.remove();
      }
    }
  });
}

/**
 * Initialize footer cleanup
 */
export function initializeFooterHandler() {
  console.log('Initializing footer handler...');
  
  // Add CSS to hide office hours immediately
  const style = document.createElement('style');
  style.textContent = `
    /* Hide office hours section */
    .framer-n4csf8:has(h4:contains("Office hours")),
    .framer-n4csf8:has(h4:contains("office hours")) {
      display: none !important;
    }
    
    /* Fallback - hide by checking content */
    .framer-n4csf8 {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  
  // Remove office hours initially
  removeOfficeHours();
  
  // Monitor for dynamic additions
  footerObserver = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // Element node
            if (node.classList?.contains('framer-n4csf8') ||
                node.querySelector?.('.framer-n4csf8') ||
                (node.textContent && node.textContent.includes('Office hours'))) {
              shouldCheck = true;
              break;
            }
          }
        }
      }
    }
    
    if (shouldCheck) {
      removeOfficeHours();
    }
  });
  
  // Start observing
  footerObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Periodic check for first few seconds
  let checks = 0;
  const checkInterval = setInterval(() => {
    removeOfficeHours();
    checks++;
    if (checks > 10) clearInterval(checkInterval);
  }, 500);
  
  // Return cleanup function
  return () => {
    if (footerObserver) {
      footerObserver.disconnect();
      footerObserver = null;
    }
    clearInterval(checkInterval);
  };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initializeFooterHandler);
}
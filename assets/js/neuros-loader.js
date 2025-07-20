/**
 * Neuros Website Loader
 * 
 * Purpose: Loads the modular JavaScript in the correct order
 * This script should be included in HTML files instead of the minified scripts
 */

(function() {
  'use strict';
  
  // Define the base path for scripts
  // Determine relative path based on current page location
  const currentPath = window.location.pathname;
  const depth = (currentPath.match(/\//g) || []).length - 1;
  const scriptBasePath = '../'.repeat(Math.max(0, depth - 1)) + 'assets/js/src/';
  
  // List of modules to load in order
  const modules = [
    'framer-override-system-v2.js', // Load V2 override system first!
    // Temporarily disable other modules to test override system
    // 'navigation/navigation-config.js',
    // 'navigation/navigation-renderer.js',
    // 'components/blog-section-handler.js',
    // 'components/patients-section-handler.js',
    // 'components/footer-handler.js',
    // 'components/faq-updater.js',
    // 'components/faq-updater-v2.js',
    // 'index.js'
  ];
  
  // Load a script dynamically
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = scriptBasePath + src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // Load all modules sequentially
  async function loadModules() {
    try {
      for (const module of modules) {
        await loadScript(module);
        console.log(`Loaded: ${module}`);
      }
      console.log('All modules loaded successfully');
    } catch (error) {
      console.error('Error loading modules:', error);
    }
  }
  
  // Start loading when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadModules);
  } else {
    loadModules();
  }
})();
/**
 * Neuros Website Initialization Script
 * 
 * This script must load BEFORE Framer's main script to properly intercept
 * and modify its behavior. It sets up all core systems and loads modules.
 * 
 * Load order:
 * 1. This script (neuros-init.js)
 * 2. Framer's scripts
 * 3. Module initialization happens automatically
 */

(function() {
  'use strict';
  
  // Check if already initialized
  if (window.NeurosCore) {
    console.warn('[Neuros] Already initialized');
    return;
  }
  
  console.log('[Neuros] Initializing core systems...');
  
  /**
   * Neuros Core System
   */
  window.NeurosCore = {
    version: '2.0.0',
    initialized: false,
    modules: new Map(),
    
    /**
     * Register a module
     */
    registerModule(name, module) {
      this.modules.set(name, module);
      console.log(`[Neuros] Module registered: ${name}`);
    },
    
    /**
     * Apply all modifications
     */
    applyModifications(trigger = 'manual') {
      console.log(`[Neuros] Applying modifications (${trigger})`);
      
      // Call each module's apply function
      this.modules.forEach((module, name) => {
        if (module.apply && typeof module.apply === 'function') {
          try {
            module.apply(trigger);
          } catch (error) {
            console.error(`[Neuros] Error in module ${name}:`, error);
          }
        }
      });
    },
    
    /**
     * Initialize all modules
     */
    initializeModules() {
      console.log('[Neuros] Initializing modules...');
      
      this.modules.forEach((module, name) => {
        if (module.initialize && typeof module.initialize === 'function') {
          try {
            module.initialize();
          } catch (error) {
            console.error(`[Neuros] Error initializing module ${name}:`, error);
          }
        }
      });
      
      this.initialized = true;
    }
  };
  
  /**
   * Dynamic module loader
   */
  function loadModule(path) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'module';
      
      // Determine base path based on current location
      const currentPath = window.location.pathname;
      const depth = (currentPath.match(/\//g) || []).length - 1;
      const basePath = '../'.repeat(Math.max(0, depth - 1)) + 'assets/js/';
      
      script.src = basePath + path;
      script.onload = () => {
        console.log(`[Neuros] Loaded: ${path}`);
        resolve();
      };
      script.onerror = (error) => {
        console.error(`[Neuros] Failed to load: ${path}`, error);
        reject(error);
      };
      
      document.head.appendChild(script);
    });
  }
  
  /**
   * Load all core modules
   */
  async function loadCoreModules() {
    const coreModules = [
      'src/config/site-config.js',
      'src/core/framer-interceptor.js',
      'src/core/module-overrides.js',
      'src/core/event-manager.js'
    ];
    
    try {
      // Load core modules sequentially to ensure proper initialization order
      for (const module of coreModules) {
        await loadModule(module);
      }
      
      console.log('[Neuros] Core modules loaded');
      
      // Load feature modules in parallel
      const featureModules = [
        'src/modules/navigation.js',
        'src/modules/content-overrides.js',
        'src/modules/visibility-control.js'
      ];
      
      await Promise.all(featureModules.map(loadModule));
      
      console.log('[Neuros] Feature modules loaded');
      
      // Initialize all modules
      window.NeurosCore.initializeModules();
      
      // Apply initial modifications
      window.NeurosCore.applyModifications('init');
      
    } catch (error) {
      console.error('[Neuros] Error loading modules:', error);
    }
  }
  
  /**
   * Early CSS injection for immediate visual fixes
   */
  function injectEarlyCSS() {
    const style = document.createElement('style');
    style.id = 'neuros-early-css';
    style.textContent = `
      /* Hide Framer badge immediately */
      #__framer-badge-container,
      .__framer-badge,
      [id*="framer-badge"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Hide navigation items */
      .framer-69tlqz, .framer-7ddsau,
      .framer-13m8v6l, .framer-zwpqgk,
      nav a[href*="blog"],
      nav a[href*="patients"] {
        display: none !important;
        visibility: hidden !important;
      }
      
      /* Hide sections */
      .framer-oqhszj,
      .framer-1m9nwvx {
        display: none !important;
        visibility: hidden !important;
      }
      
      /* Hide office hours in footer */
      .framer-n4csf8:has(h4:contains("Office hours")) {
        display: none !important;
      }
      
      /* Smooth transitions after modifications */
      * {
        transition: opacity 0.2s ease-in-out;
      }
    `;
    
    // Insert at the beginning of head for highest priority
    const firstChild = document.head.firstChild;
    if (firstChild) {
      document.head.insertBefore(style, firstChild);
    } else {
      document.head.appendChild(style);
    }
  }
  
  /**
   * Initialize everything
   */
  function initialize() {
    // Inject CSS immediately
    injectEarlyCSS();
    
    // Start loading modules
    loadCoreModules();
    
    // Set up global error handler for debugging
    if (window.location.search.includes('debug=true')) {
      window.addEventListener('error', (event) => {
        console.error('[Neuros] Global error:', event.error);
      });
    }
  }
  
  // Initialize based on document state
  if (document.readyState === 'loading') {
    // Document still loading, perfect time to initialize
    initialize();
  } else {
    // Document already loaded, initialize immediately but warn
    console.warn('[Neuros] Document already loaded. Some interceptors may not work properly.');
    initialize();
  }
  
})();
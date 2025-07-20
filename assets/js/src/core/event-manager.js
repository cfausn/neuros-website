/**
 * Event Manager
 * 
 * Integrates with Framer's event system and provides a clean event-driven
 * architecture for applying modifications at the right time.
 * 
 * @module event-manager
 */

import { siteConfig } from '../config/site-config.js';

// Event listeners registry
const eventListeners = new Map();

// Framer event names we care about
const FRAMER_EVENTS = {
  PAGE_READY: 'framer:pageready',
  ROUTE_CHANGE: 'framer:routechange',
  COMPONENT_MOUNT: 'framer:componentmount',
  HYDRATION_COMPLETE: 'framer:hydrationcomplete'
};

// Custom events for our system
const NEUROS_EVENTS = {
  INTERCEPTORS_READY: 'neuros:interceptorsready',
  MODIFICATIONS_APPLIED: 'neuros:modificationsapplied',
  CONTENT_UPDATED: 'neuros:contentupdated'
};

/**
 * Event manager class
 */
class EventManager {
  constructor() {
    this.initialized = false;
    this.pendingEvents = [];
    this.framerReady = false;
  }
  
  /**
   * Initialize event system
   */
  initialize() {
    if (this.initialized) return;
    
    this.initialized = true;
    this.setupFramerEventListeners();
    this.setupCustomEventListeners();
    this.detectFramerReady();
    
    // Emit initialization event
    this.emit(NEUROS_EVENTS.INTERCEPTORS_READY);
  }
  
  /**
   * Set up listeners for Framer events
   */
  setupFramerEventListeners() {
    // Listen for Framer's custom events
    Object.values(FRAMER_EVENTS).forEach(eventName => {
      document.addEventListener(eventName, (event) => {
        this.handleFramerEvent(eventName, event);
      });
    });
    
    // Also listen for standard DOM events that Framer uses
    document.addEventListener('DOMContentLoaded', () => {
      this.handleDOMReady();
    });
    
    // Navigation events
    window.addEventListener('popstate', () => {
      this.handleNavigation();
    });
    
    // Mutation observer for dynamic content
    this.setupMutationObserver();
  }
  
  /**
   * Set up custom event listeners
   */
  setupCustomEventListeners() {
    // Page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.applyModifications('visibility');
      }
    });
    
    // Window focus (for development)
    window.addEventListener('focus', () => {
      if (siteConfig.debug) {
        this.applyModifications('focus');
      }
    });
  }
  
  /**
   * Detect when Framer is ready
   */
  detectFramerReady() {
    const checkFramer = () => {
      if (window.FramerRuntime || window.framerHydrateV2 || 
          document.querySelector('[data-framer-hydrate-v2]')) {
        this.framerReady = true;
        this.processPendingEvents();
        this.applyModifications('framer-ready');
      } else {
        setTimeout(checkFramer, 50);
      }
    };
    
    checkFramer();
  }
  
  /**
   * Handle Framer events
   */
  handleFramerEvent(eventName, event) {
    if (siteConfig.debug) {
      console.log('[Neuros Event]', eventName, event);
    }
    
    // Apply modifications based on event
    switch (eventName) {
      case FRAMER_EVENTS.PAGE_READY:
      case FRAMER_EVENTS.HYDRATION_COMPLETE:
        this.applyModifications('page-ready');
        break;
        
      case FRAMER_EVENTS.ROUTE_CHANGE:
        this.applyModifications('route-change');
        break;
        
      case FRAMER_EVENTS.COMPONENT_MOUNT:
        this.applyModifications('component-mount', event.detail);
        break;
    }
  }
  
  /**
   * Handle DOM ready
   */
  handleDOMReady() {
    this.applyModifications('dom-ready');
  }
  
  /**
   * Handle navigation
   */
  handleNavigation() {
    // Delay to let Framer finish rendering
    setTimeout(() => {
      this.applyModifications('navigation');
    }, 100);
  }
  
  /**
   * Set up mutation observer for dynamic content
   */
  setupMutationObserver() {
    let debounceTimer = null;
    
    const observer = new MutationObserver((mutations) => {
      // Debounce rapid mutations
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        // Check if significant changes occurred
        const hasSignificantChanges = mutations.some(mutation => {
          // New nodes added
          if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            return Array.from(mutation.addedNodes).some(node => 
              node.nodeType === 1 && // Element node
              (node.classList?.length > 0 || node.id)
            );
          }
          
          // Attributes changed on important elements
          if (mutation.type === 'attributes' && mutation.target.nodeType === 1) {
            return mutation.target.classList?.contains('framer-') ||
                   mutation.target.hasAttribute('data-framer-');
          }
          
          return false;
        });
        
        if (hasSignificantChanges) {
          this.applyModifications('mutation');
        }
      }, 200); // 200ms debounce
    });
    
    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'data-framer-name', 'data-framer-component-type']
    });
  }
  
  /**
   * Apply modifications based on trigger
   */
  applyModifications(trigger, data = null) {
    if (!this.framerReady && trigger !== 'framer-ready') {
      // Queue events until Framer is ready
      this.pendingEvents.push({ trigger, data });
      return;
    }
    
    if (siteConfig.debug) {
      console.log('[Neuros] Applying modifications:', trigger);
    }
    
    // Emit event for modules to react
    this.emit('neuros:apply-modifications', { trigger, data });
    
    // Call registered modification functions
    if (window.NeurosCore) {
      window.NeurosCore.applyModifications(trigger);
    }
    
    // Emit completion event
    this.emit(NEUROS_EVENTS.MODIFICATIONS_APPLIED, { trigger });
  }
  
  /**
   * Process any pending events
   */
  processPendingEvents() {
    while (this.pendingEvents.length > 0) {
      const { trigger, data } = this.pendingEvents.shift();
      this.applyModifications(trigger, data);
    }
  }
  
  /**
   * Register an event listener
   */
  on(event, callback) {
    if (!eventListeners.has(event)) {
      eventListeners.set(event, new Set());
    }
    eventListeners.get(event).add(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = eventListeners.get(event);
      if (callbacks) {
        callbacks.delete(callback);
      }
    };
  }
  
  /**
   * Emit an event
   */
  emit(event, data = null) {
    // Dispatch custom event
    const customEvent = new CustomEvent(event, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(customEvent);
    
    // Call registered listeners
    const callbacks = eventListeners.get(event);
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('[Neuros Event] Error in callback:', error);
        }
      });
    }
  }
  
  /**
   * Wait for a specific event
   */
  waitFor(event, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout waiting for event: ${event}`));
      }, timeout);
      
      const cleanup = this.on(event, (data) => {
        clearTimeout(timer);
        cleanup();
        resolve(data);
      });
    });
  }
}

// Create singleton instance
const eventManager = new EventManager();

// Export functions
export const on = eventManager.on.bind(eventManager);
export const emit = eventManager.emit.bind(eventManager);
export const waitFor = eventManager.waitFor.bind(eventManager);
export const initialize = eventManager.initialize.bind(eventManager);

// Store global reference
window.NeurosEventManager = eventManager;

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initialize());
} else {
  initialize();
}

// Export event constants
export { FRAMER_EVENTS, NEUROS_EVENTS };
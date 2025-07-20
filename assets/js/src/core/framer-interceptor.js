/**
 * Framer Runtime Interceptor
 * 
 * Intercepts and modifies Framer's core functions to give us control
 * over rendering and content. This must load before Framer's main script.
 * 
 * @module framer-interceptor
 */

import { siteConfig } from '../config/site-config.js';

// Store original functions
const originalFunctions = new Map();

// Store intercepted modules
const interceptedModules = new Map();

/**
 * Log debug messages if enabled
 */
function debug(...args) {
  if (siteConfig.debug || siteConfig.features.debugLogging) {
    console.log('[Neuros Interceptor]', ...args);
  }
}

/**
 * Create a proxy for an object to intercept property access
 */
function createProxy(target, handler) {
  return new Proxy(target, {
    get(obj, prop) {
      if (handler.get && handler.get(obj, prop) !== undefined) {
        return handler.get(obj, prop);
      }
      return obj[prop];
    },
    set(obj, prop, value) {
      if (handler.set) {
        return handler.set(obj, prop, value);
      }
      obj[prop] = value;
      return true;
    }
  });
}

/**
 * Intercept Framer's hydration function
 */
function interceptHydration() {
  // Wait for Framer's hydration function
  Object.defineProperty(window, 'framerHydrateV2', {
    set(value) {
      debug('Intercepting framerHydrateV2');
      originalFunctions.set('framerHydrateV2', value);
      
      // Create our wrapper
      const wrappedHydrate = function(container, data, ...args) {
        debug('Hydration called with data:', data);
        
        // Modify data before hydration
        if (data && typeof data === 'object') {
          modifyHydrationData(data);
        }
        
        // Call original hydration
        const result = value.call(this, container, data, ...args);
        
        // Post-hydration modifications
        setTimeout(() => {
          debug('Post-hydration modifications');
          window.NeurosCore?.applyModifications();
        }, 0);
        
        return result;
      };
      
      // Store as window property
      Object.defineProperty(window, 'framerHydrateV2', {
        value: wrappedHydrate,
        writable: false,
        configurable: true
      });
    },
    configurable: true
  });
}

/**
 * Modify hydration data before Framer processes it
 */
function modifyHydrationData(data) {
  debug('Modifying hydration data');
  
  // Deep traverse the data object
  function traverse(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;
    
    for (const key in obj) {
      const value = obj[key];
      const currentPath = path ? `${path}.${key}` : key;
      
      // Look for navigation items
      if (key === 'children' && Array.isArray(value)) {
        obj[key] = value.filter(child => {
          if (child && child.props) {
            const href = child.props.href || '';
            const label = child.props.children || '';
            
            // Filter out hidden navigation items
            const shouldHide = siteConfig.navigation.hiddenItems.some(item => 
              href.includes(item) || 
              (typeof label === 'string' && label.toLowerCase() === item)
            );
            
            if (shouldHide) {
              debug(`Filtering out navigation item: ${label || href}`);
              return false;
            }
          }
          return true;
        });
      }
      
      // Look for FAQ content
      if (typeof value === 'string') {
        // Check for FAQ questions
        siteConfig.content.faq.questions.forEach(faq => {
          if (value.includes(faq.original)) {
            debug(`Replacing FAQ question: ${faq.original}`);
            obj[key] = value.replace(faq.original, faq.question);
          }
        });
        
        // Check for FAQ subtitle
        if (value.includes('Answers to your most common questions')) {
          debug('Replacing FAQ subtitle');
          obj[key] = siteConfig.content.faq.subtitle;
        }
        
        // Check for LinkedIn URL
        if (value === siteConfig.social.linkedIn.original) {
          debug('Replacing LinkedIn URL');
          obj[key] = siteConfig.social.linkedIn.replacement;
        }
      }
      
      // Recursively traverse
      if (typeof value === 'object') {
        traverse(value, currentPath);
      }
    }
  }
  
  traverse(data);
}

/**
 * Intercept module loading
 */
function interceptModuleLoading() {
  // Store original import function
  const originalImport = window.import || ((url) => import(url));
  
  // Override import
  window.import = async function(url) {
    debug('Module import:', url);
    
    // Check if we should intercept this module
    const shouldIntercept = siteConfig.features.interceptModules && (
      url.includes('navigation') ||
      url.includes('footer') ||
      url.includes('faq') ||
      url.includes('chunk')
    );
    
    if (shouldIntercept) {
      try {
        // Load the module
        const module = await originalImport.call(this, url);
        
        // Create a proxy to intercept exports
        return createModuleProxy(module, url);
      } catch (error) {
        debug('Error intercepting module:', error);
        return originalImport.call(this, url);
      }
    }
    
    return originalImport.call(this, url);
  };
}

/**
 * Create a proxy for a module to intercept its exports
 */
function createModuleProxy(module, url) {
  debug('Creating module proxy for:', url);
  
  return new Proxy(module, {
    get(target, prop) {
      const value = target[prop];
      
      // Intercept component functions
      if (typeof value === 'function' && prop !== 'default') {
        return function(...args) {
          const result = value.apply(this, args);
          
          // Modify component output if it's a React element
          if (result && result.$$typeof) {
            return modifyComponent(result, prop);
          }
          
          return result;
        };
      }
      
      // Intercept default export
      if (prop === 'default' && typeof value === 'function') {
        return function(...args) {
          const result = value.apply(this, args);
          
          // Modify component output
          if (result && result.$$typeof) {
            return modifyComponent(result, 'default');
          }
          
          return result;
        };
      }
      
      return value;
    }
  });
}

/**
 * Modify a React component's output
 */
function modifyComponent(element, componentName) {
  debug('Modifying component:', componentName);
  
  // Clone the element to avoid mutating the original
  const modified = Object.assign({}, element);
  
  // Modify props if needed
  if (modified.props) {
    const props = Object.assign({}, modified.props);
    
    // Hide elements based on className
    if (props.className) {
      const shouldHide = siteConfig.visibility.hiddenClasses.some(cls => 
        props.className.includes(cls)
      );
      
      if (shouldHide) {
        debug('Hiding element with class:', props.className);
        props.style = Object.assign({}, props.style, { display: 'none' });
      }
    }
    
    // Modify href for links
    if (props.href === siteConfig.social.linkedIn.original) {
      props.href = siteConfig.social.linkedIn.replacement;
    }
    
    // Modify children if they're strings
    if (typeof props.children === 'string') {
      // FAQ modifications
      siteConfig.content.faq.questions.forEach(faq => {
        if (props.children.includes(faq.original)) {
          props.children = props.children.replace(faq.original, faq.question);
        }
      });
    }
    
    modified.props = props;
  }
  
  return modified;
}

/**
 * Set up request interception for fetch/XHR
 */
function interceptRequests() {
  // Intercept fetch
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    const [url, options] = args;
    debug('Fetch request:', url);
    
    // Let the request proceed
    const response = await originalFetch.apply(this, args);
    
    // Check if it's a JSON response we should modify
    if (url && url.includes('.json')) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        // Clone the response to modify it
        const text = await response.text();
        try {
          const data = JSON.parse(text);
          modifyHydrationData(data);
          
          // Create a new response with modified data
          return new Response(JSON.stringify(data), {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          });
        } catch (e) {
          // Return original if parsing fails
          return new Response(text, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
          });
        }
      }
    }
    
    return response;
  };
}

/**
 * Initialize all interceptors
 */
export function initializeInterceptors() {
  debug('Initializing Framer interceptors');
  
  // Set up all interceptors
  interceptHydration();
  interceptModuleLoading();
  interceptRequests();
  
  // Store reference for other modules
  window.NeurosInterceptor = {
    originalFunctions,
    interceptedModules,
    modifyHydrationData,
    debug
  };
  
  debug('Interceptors initialized');
}

// Auto-initialize if this script loads early enough
if (document.readyState === 'loading' && !window.framerHydrateV2) {
  initializeInterceptors();
} else {
  debug('Warning: Framer may have already loaded. Interceptors may not work fully.');
  initializeInterceptors();
}
/**
 * Module Override System
 * 
 * Provides clean overrides for specific Framer modules and content.
 * Works in conjunction with the interceptor to modify content at the source.
 * 
 * @module module-overrides
 */

import { siteConfig } from '../config/site-config.js';

// Store module overrides
const moduleOverrides = new Map();

/**
 * Register a module override
 */
export function registerOverride(modulePattern, override) {
  moduleOverrides.set(modulePattern, override);
}

/**
 * Apply overrides to module exports
 */
export function applyModuleOverrides(moduleExports, modulePath) {
  // Check each registered override
  for (const [pattern, override] of moduleOverrides) {
    if (modulePath.includes(pattern)) {
      return override(moduleExports, modulePath);
    }
  }
  
  return moduleExports;
}

/**
 * Override navigation components
 */
registerOverride('navigation', (exports) => {
  const modified = { ...exports };
  
  // Override navigation render function
  if (exports.Navigation || exports.default) {
    const OriginalNav = exports.Navigation || exports.default;
    
    modified.Navigation = modified.default = function NavigationOverride(props) {
      // Get original render
      const result = OriginalNav.call(this, props);
      
      if (!result) return result;
      
      // Modify navigation items
      if (result.props && result.props.children) {
        const children = Array.isArray(result.props.children) 
          ? result.props.children 
          : [result.props.children];
        
        // Filter out hidden items
        const filtered = children.filter(child => {
          if (!child || !child.props) return true;
          
          const href = child.props.href || '';
          const text = getTextContent(child);
          
          return !siteConfig.navigation.hiddenItems.some(hidden => 
            href.includes(hidden) || 
            text.toLowerCase().includes(hidden)
          );
        });
        
        result.props.children = filtered;
      }
      
      return result;
    };
  }
  
  return modified;
});

/**
 * Override FAQ components
 */
registerOverride('faq', (exports) => {
  const modified = { ...exports };
  
  // Create FAQ content map for quick lookup
  const faqMap = new Map(
    siteConfig.content.faq.questions.map(q => [q.original, q])
  );
  
  // Override any FAQ-related component
  Object.keys(exports).forEach(key => {
    if (typeof exports[key] === 'function') {
      modified[key] = function FAQOverride(props) {
        const result = exports[key].call(this, props);
        
        if (result) {
          modifyFAQContent(result, faqMap);
        }
        
        return result;
      };
    }
  });
  
  return modified;
});

/**
 * Override footer components
 */
registerOverride('footer', (exports) => {
  const modified = { ...exports };
  
  Object.keys(exports).forEach(key => {
    if (typeof exports[key] === 'function') {
      modified[key] = function FooterOverride(props) {
        const result = exports[key].call(this, props);
        
        if (result) {
          removeFooterSections(result);
        }
        
        return result;
      };
    }
  });
  
  return modified;
});

/**
 * Content modification system
 */
export const contentModifiers = {
  /**
   * Modify any text content in the component tree
   */
  modifyTextContent(element) {
    if (!element || typeof element !== 'object') return;
    
    // Handle string content
    if (typeof element === 'string') {
      return this.processTextContent(element);
    }
    
    // Handle React elements
    if (element.props) {
      const props = { ...element.props };
      
      // Process children
      if (props.children) {
        if (typeof props.children === 'string') {
          props.children = this.processTextContent(props.children);
        } else if (Array.isArray(props.children)) {
          props.children = props.children.map(child => 
            this.modifyTextContent(child)
          );
        } else if (typeof props.children === 'object') {
          props.children = this.modifyTextContent(props.children);
        }
      }
      
      // Process other string props
      Object.keys(props).forEach(key => {
        if (typeof props[key] === 'string' && key !== 'className') {
          props[key] = this.processTextContent(props[key]);
        }
      });
      
      element.props = props;
    }
    
    return element;
  },
  
  /**
   * Process text content for replacements
   */
  processTextContent(text) {
    if (!text || typeof text !== 'string') return text;
    
    let modified = text;
    
    // FAQ replacements
    siteConfig.content.faq.questions.forEach(faq => {
      if (modified.includes(faq.original)) {
        modified = modified.replace(faq.original, faq.question);
      }
    });
    
    // FAQ subtitle
    if (modified.includes('Answers to your most common questions')) {
      modified = modified.replace(
        'Answers to your most common questions about our products and services',
        siteConfig.content.faq.subtitle
      );
    }
    
    // LinkedIn URL
    if (modified.includes(siteConfig.social.linkedIn.original)) {
      modified = modified.replace(
        siteConfig.social.linkedIn.original,
        siteConfig.social.linkedIn.replacement
      );
    }
    
    return modified;
  },
  
  /**
   * Hide elements based on content or class
   */
  hideElement(element) {
    if (!element || !element.props) return false;
    
    // Check className
    if (element.props.className) {
      const shouldHide = siteConfig.visibility.hiddenClasses.some(cls =>
        element.props.className.includes(cls)
      );
      
      if (shouldHide) {
        element.props.style = {
          ...element.props.style,
          display: 'none',
          visibility: 'hidden'
        };
        return true;
      }
    }
    
    // Check content for office hours
    const content = getTextContent(element);
    if (content && siteConfig.content.footer.hiddenSections.some(section => 
      content.includes(section)
    )) {
      element.props.style = {
        ...element.props.style,
        display: 'none',
        visibility: 'hidden'
      };
      return true;
    }
    
    return false;
  }
};

/**
 * Helper to extract text content from React element
 */
function getTextContent(element) {
  if (!element) return '';
  if (typeof element === 'string') return element;
  if (element.props && element.props.children) {
    if (typeof element.props.children === 'string') {
      return element.props.children;
    }
    if (Array.isArray(element.props.children)) {
      return element.props.children
        .map(child => getTextContent(child))
        .join(' ');
    }
  }
  return '';
}

/**
 * Modify FAQ content in component tree
 */
function modifyFAQContent(element, faqMap) {
  if (!element || typeof element !== 'object') return;
  
  // Apply text content modifications
  contentModifiers.modifyTextContent(element);
  
  // Recursively process children
  if (element.props && element.props.children) {
    if (Array.isArray(element.props.children)) {
      element.props.children.forEach(child => modifyFAQContent(child, faqMap));
    } else if (typeof element.props.children === 'object') {
      modifyFAQContent(element.props.children, faqMap);
    }
  }
}

/**
 * Remove footer sections
 */
function removeFooterSections(element) {
  if (!element || typeof element !== 'object') return;
  
  // Check if this element should be hidden
  if (contentModifiers.hideElement(element)) {
    return;
  }
  
  // Process children
  if (element.props && element.props.children) {
    if (Array.isArray(element.props.children)) {
      // Filter out hidden sections
      element.props.children = element.props.children.filter(child => {
        const content = getTextContent(child);
        return !siteConfig.content.footer.hiddenSections.some(section =>
          content.includes(section)
        );
      });
      
      // Recursively process remaining children
      element.props.children.forEach(child => removeFooterSections(child));
    } else if (typeof element.props.children === 'object') {
      removeFooterSections(element.props.children);
    }
  }
}

/**
 * Initialize module override system
 */
export function initializeModuleOverrides() {
  // Hook into module loading if available
  if (window.NeurosInterceptor) {
    const originalModifyComponent = window.NeurosInterceptor.modifyComponent;
    
    window.NeurosInterceptor.modifyComponent = function(element, componentName) {
      // Apply content modifications
      contentModifiers.modifyTextContent(element);
      contentModifiers.hideElement(element);
      
      // Call original if it exists
      if (originalModifyComponent) {
        return originalModifyComponent(element, componentName);
      }
      
      return element;
    };
  }
  
  // Store reference
  window.NeurosModuleOverrides = {
    registerOverride,
    applyModuleOverrides,
    contentModifiers
  };
}

// Auto-initialize
initializeModuleOverrides();
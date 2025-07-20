/**
 * Framer Override System
 * 
 * Purpose: Work WITH Framer's architecture instead of against it
 * This module intercepts Framer's module loading and hydration process
 * to inject our custom content at the data level
 */

// Content replacements configuration
const CONTENT_OVERRIDES = {
  // FAQ replacements
  faq: {
    questions: {
      "How to join the Primary Care program?": "How does neurofeedback help children with ASD?",
      "How much does a consultation cost at Primary?": "What age is appropriate for neurofeedback therapy?",
      "How much do the annual preventive check-ups cost?": "How many sessions does my child need?"
    },
    answers: {
      "How does neurofeedback help children with ASD?": "Neurofeedback helps children with ASD by training their brains to self-regulate, improving attention, reducing anxiety, and enhancing social engagement through fun, game-based activities. Our NeurOS platform uses advanced LLMs and machine learning to personalize the experience for each child.",
      "What age is appropriate for neurofeedback therapy?": "Neurofeedback is suitable for children as young as 5 years old. Our NeurOS platform is specifically designed to be engaging and age-appropriate for children with ASD, with colorful games and interactive experiences that keep them engaged throughout the treatment.",
      "How many sessions does my child need?": "Most children benefit from 20-40 sessions, with improvements often noticed after 10-15 sessions. Each child's progress is unique and tracked through our Progress Portal, allowing parents and providers to monitor improvements in real-time."
    },
    subtitle: {
      original: "Answers to your most common questions about our products and services",
      replacement: "Learn how our neurofeedback technology helps children with ASD improve focus, reduce anxiety, and enhance social skills."
    }
  },
  // Navigation items to remove
  navigation: {
    blockedPaths: ["/blog", "/patients", "./blog", "./patients"],
    blockedClasses: ["framer-69tlqz", "framer-7ddsau", "framer-13m8v6l", "framer-zwpqgk"]
  }
};

// Store original functions we'll override
const originalFunctions = {
  createElement: null,
  hydrate: null,
  render: null
};

/**
 * Intercept and modify text content before it's rendered
 */
function interceptTextContent(text) {
  if (typeof text !== 'string') return text;
  
  // Check FAQ questions
  for (const [original, replacement] of Object.entries(CONTENT_OVERRIDES.faq.questions)) {
    if (text.includes(original)) {
      return text.replace(original, replacement);
    }
  }
  
  // Check FAQ answers
  for (const [question, answer] of Object.entries(CONTENT_OVERRIDES.faq.answers)) {
    // If this text node follows a question we replaced, it might be the answer
    if (text.length > 100 && !text.includes('?')) {
      // This is likely an answer - check if we should replace it
      const parent = document.currentScript?.parentElement;
      if (parent?.textContent?.includes(question)) {
        return answer;
      }
    }
  }
  
  // Check subtitle
  if (text === CONTENT_OVERRIDES.faq.subtitle.original) {
    return CONTENT_OVERRIDES.faq.subtitle.replacement;
  }
  
  return text;
}

/**
 * Create a proxy for React.createElement to intercept component creation
 */
function createElementProxy(originalCreateElement) {
  return function(...args) {
    let [type, props, ...children] = args;
    
    // Intercept navigation links
    if (type === 'a' && props?.href) {
      // Check if this is a blocked navigation item
      if (CONTENT_OVERRIDES.navigation.blockedPaths.some(path => props.href.includes(path))) {
        return null; // Don't render blocked navigation items
      }
    }
    
    // Intercept text nodes
    if (type === 'p' || type === 'h1' || type === 'h2' || type === 'h3' || type === 'h4') {
      // Process children for text content
      children = children.map(child => {
        if (typeof child === 'string') {
          return interceptTextContent(child);
        }
        return child;
      });
    }
    
    // Check props for className to filter blocked elements
    if (props?.className && typeof props.className === 'string') {
      if (CONTENT_OVERRIDES.navigation.blockedClasses.some(cls => props.className.includes(cls))) {
        return null; // Don't render blocked elements
      }
    }
    
    // Call original createElement with potentially modified arguments
    return originalCreateElement.call(this, type, props, ...children);
  };
}

/**
 * Intercept module imports to modify content before it loads
 */
function interceptModuleImports() {
  // Store the original import function
  const originalImport = window.import || (url => import(url));
  
  // Override the import function
  window.import = async function(url) {
    const module = await originalImport(url);
    
    // Check if this is a page module (contains FAQ or navigation content)
    if (url.includes('.mjs') && module.default) {
      // Wrap the module's default export if it's a component
      if (typeof module.default === 'function') {
        const OriginalComponent = module.default;
        module.default = function(...args) {
          // Temporarily override createElement while this component renders
          const tempCreateElement = window.React?.createElement;
          if (tempCreateElement && !tempCreateElement._isProxied) {
            window.React.createElement = createElementProxy(tempCreateElement);
            window.React.createElement._isProxied = true;
          }
          
          const result = OriginalComponent.apply(this, args);
          
          // Restore original createElement
          if (tempCreateElement && window.React.createElement._isProxied) {
            window.React.createElement = tempCreateElement;
          }
          
          return result;
        };
      }
    }
    
    return module;
  };
}

/**
 * Initialize the override system
 */
function initializeOverrideSystem() {
  console.log('Initializing Framer Override System...');
  
  // Intercept module imports
  interceptModuleImports();
  
  // Wait for React to be available and override createElement
  const interceptReact = () => {
    if (window.React && window.React.createElement && !window.React.createElement._isProxied) {
      originalFunctions.createElement = window.React.createElement;
      window.React.createElement = createElementProxy(originalFunctions.createElement);
      window.React.createElement._isProxied = true;
      console.log('React.createElement intercepted');
    } else {
      setTimeout(interceptReact, 10);
    }
  };
  
  interceptReact();
  
  // Hide Framer badge via CSS injection
  const style = document.createElement('style');
  style.textContent = `
    /* Hide Framer badge */
    #__framer-badge-container,
    .__framer-badge {
      display: none !important;
    }
    
    /* Hide blocked navigation items */
    ${CONTENT_OVERRIDES.navigation.blockedClasses.map(cls => `.${cls}`).join(', ')} {
      display: none !important;
    }
    
    /* Hide office hours section */
    .framer-oqhszj, .framer-1m9nwvx {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  
  // Intercept Framer's hydration data
  const mainElement = document.getElementById('main');
  if (mainElement && mainElement.dataset.framerHydrateV2) {
    try {
      const hydrateData = JSON.parse(mainElement.dataset.framerHydrateV2);
      console.log('Intercepted hydration data:', hydrateData);
      
      // We could modify the hydration data here if needed
      // For now, we'll let our createElement proxy handle the modifications
    } catch (error) {
      console.error('Failed to parse hydration data:', error);
    }
  }
}

// Initialize as early as possible
if (document.readyState === 'loading') {
  // If DOM is still loading, initialize immediately
  initializeOverrideSystem();
} else {
  // DOM already loaded, initialize with a slight delay to ensure Framer hasn't started yet
  setTimeout(initializeOverrideSystem, 0);
}

// Export for debugging
window.FramerOverrideSystem = {
  overrides: CONTENT_OVERRIDES,
  interceptTextContent,
  createElementProxy
};
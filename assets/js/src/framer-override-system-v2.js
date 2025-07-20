/**
 * Framer Override System V2
 * 
 * Purpose: More aggressive approach to override Framer content
 * Works at multiple levels: module loading, React rendering, and DOM manipulation
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
    blockedPaths: ["/blog", "/patients", "./blog", "./patients", "blog", "patients"],
    blockedClasses: ["framer-69tlqz", "framer-7ddsau", "framer-13m8v6l", "framer-zwpqgk", "framer-oqhszj", "framer-1m9nwvx"]
  }
};

// Store original functions
const originalFunctions = {
  createElement: null,
  createTextNode: null,
  appendChild: null,
  insertBefore: null,
  replaceChild: null
};

/**
 * Intercept and modify text content
 */
function interceptTextContent(text) {
  if (typeof text !== 'string') return text;
  
  // Check FAQ questions
  for (const [original, replacement] of Object.entries(CONTENT_OVERRIDES.faq.questions)) {
    if (text.includes(original)) {
      return text.replace(original, replacement);
    }
  }
  
  // Check FAQ subtitle
  if (text === CONTENT_OVERRIDES.faq.subtitle.original) {
    return CONTENT_OVERRIDES.faq.subtitle.replacement;
  }
  
  return text;
}

/**
 * DOM-based content replacement
 */
function replaceDOMContent() {
  // Replace text nodes directly
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (node.nodeValue && node.nodeValue.trim().length > 0) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }
  );
  
  let node;
  const nodesToUpdate = [];
  
  while (node = walker.nextNode()) {
    const text = node.nodeValue.trim();
    
    // Check for FAQ questions
    for (const [original, replacement] of Object.entries(CONTENT_OVERRIDES.faq.questions)) {
      if (text === original) {
        nodesToUpdate.push({
          node: node,
          newValue: replacement,
          type: 'question',
          questionKey: original
        });
      }
    }
    
    // Check for subtitle
    if (text === CONTENT_OVERRIDES.faq.subtitle.original) {
      nodesToUpdate.push({
        node: node,
        newValue: CONTENT_OVERRIDES.faq.subtitle.replacement,
        type: 'subtitle'
      });
    }
  }
  
  // Update nodes
  nodesToUpdate.forEach(item => {
    item.node.nodeValue = item.newValue;
    console.log(`Replaced ${item.type}: "${item.newValue}"`);
    
    // For questions, try to find and update the answer
    if (item.type === 'question') {
      const answerText = CONTENT_OVERRIDES.faq.answers[item.newValue];
      if (answerText) {
        // Look for the answer in the next few elements
        let currentElement = item.node.parentElement;
        while (currentElement) {
          const parent = currentElement.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children);
            const currentIndex = siblings.indexOf(currentElement);
            
            for (let i = currentIndex + 1; i < siblings.length && i < currentIndex + 10; i++) {
              const sibling = siblings[i];
              const paragraphs = sibling.querySelectorAll('p');
              
              if (paragraphs.length > 0) {
                const answerParagraph = paragraphs[0];
                if (answerParagraph && !answerParagraph.textContent.includes('?')) {
                  answerParagraph.textContent = answerText;
                  console.log(`Replaced answer for: "${item.newValue}"`);
                  break;
                }
              }
            }
          }
          currentElement = parent;
        }
      }
    }
  });
  
  // Remove blocked navigation elements
  CONTENT_OVERRIDES.navigation.blockedClasses.forEach(className => {
    document.querySelectorAll(`.${className}`).forEach(el => {
      el.remove();
      console.log(`Removed element with class: ${className}`);
    });
  });
  
  // Remove navigation links by href
  CONTENT_OVERRIDES.navigation.blockedPaths.forEach(path => {
    document.querySelectorAll(`a[href="${path}"], a[href*="${path}"]`).forEach(el => {
      if (el.closest('nav') || el.closest('[data-framer-name="menu-links"]')) {
        el.remove();
        console.log(`Removed navigation link: ${path}`);
      }
    });
  });
}

/**
 * Create a proxy for React.createElement
 */
function createElementProxy(originalCreateElement) {
  return function(...args) {
    let [type, props, ...children] = args;
    
    // Block navigation links
    if (type === 'a' && props?.href) {
      if (CONTENT_OVERRIDES.navigation.blockedPaths.some(path => 
        props.href === path || props.href.includes(path))) {
        return null;
      }
    }
    
    // Process text in children
    children = children.map(child => {
      if (typeof child === 'string') {
        return interceptTextContent(child);
      }
      return child;
    });
    
    // Block elements by className
    if (props?.className && typeof props.className === 'string') {
      if (CONTENT_OVERRIDES.navigation.blockedClasses.some(cls => 
        props.className.includes(cls))) {
        return null;
      }
    }
    
    return originalCreateElement.call(this, type, props, ...children);
  };
}

/**
 * Override DOM methods to intercept text creation
 */
function overrideDOMMethods() {
  // Override createTextNode
  originalFunctions.createTextNode = document.createTextNode.bind(document);
  document.createTextNode = function(text) {
    const modifiedText = interceptTextContent(text);
    return originalFunctions.createTextNode(modifiedText);
  };
  
  // Override Node.prototype.appendChild to catch dynamic content
  originalFunctions.appendChild = Node.prototype.appendChild;
  Node.prototype.appendChild = function(child) {
    if (child.nodeType === Node.TEXT_NODE && child.nodeValue) {
      child.nodeValue = interceptTextContent(child.nodeValue);
    }
    return originalFunctions.appendChild.call(this, child);
  };
}

/**
 * Aggressive MutationObserver to catch all changes
 */
function setupAggressiveObserver() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      // Check added nodes
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
          const newValue = interceptTextContent(node.nodeValue);
          if (newValue !== node.nodeValue) {
            node.nodeValue = newValue;
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if it's a blocked element
          if (node.classList) {
            for (const blockedClass of CONTENT_OVERRIDES.navigation.blockedClasses) {
              if (node.classList.contains(blockedClass)) {
                node.remove();
                return;
              }
            }
          }
          
          // Check if it's a blocked link
          if (node.tagName === 'A' && node.href) {
            for (const blockedPath of CONTENT_OVERRIDES.navigation.blockedPaths) {
              if (node.href.includes(blockedPath)) {
                node.remove();
                return;
              }
            }
          }
        }
      });
      
      // Check character data changes
      if (mutation.type === 'characterData' && mutation.target.nodeValue) {
        const newValue = interceptTextContent(mutation.target.nodeValue);
        if (newValue !== mutation.target.nodeValue) {
          mutation.target.nodeValue = newValue;
        }
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    characterDataOldValue: true
  });
  
  return observer;
}

/**
 * Initialize the override system
 */
function initializeOverrideSystem() {
  console.log('Initializing Framer Override System V2...');
  
  // CSS injection for immediate hiding
  const style = document.createElement('style');
  style.textContent = `
    /* Hide Framer badge */
    #__framer-badge-container,
    .__framer-badge {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    
    /* Hide blocked navigation items */
    ${CONTENT_OVERRIDES.navigation.blockedClasses.map(cls => `.${cls}`).join(', ')},
    nav a[href*="blog"],
    nav a[href*="patients"],
    [data-framer-name="menu-links"] a[href*="blog"],
    [data-framer-name="menu-links"] a[href*="patients"] {
      display: none !important;
      visibility: hidden !important;
    }
    
    /* Hide office hours section */
    .framer-oqhszj, .framer-1m9nwvx {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  
  // Override DOM methods
  overrideDOMMethods();
  
  // Initial DOM replacement
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceDOMContent);
  } else {
    setTimeout(replaceDOMContent, 0);
  }
  
  // Setup aggressive observer
  const observer = setupAggressiveObserver();
  
  // Periodic replacement for extra safety
  let replacementCount = 0;
  const replacementInterval = setInterval(() => {
    replaceDOMContent();
    replacementCount++;
    
    if (replacementCount > 10) {
      clearInterval(replacementInterval);
    }
  }, 500);
  
  // Try to intercept React if available
  const interceptReact = () => {
    if (window.React && window.React.createElement && !window.React.createElement._isProxied) {
      originalFunctions.createElement = window.React.createElement;
      window.React.createElement = createElementProxy(originalFunctions.createElement);
      window.React.createElement._isProxied = true;
      console.log('React.createElement intercepted');
    } else if (replacementCount < 20) {
      setTimeout(interceptReact, 100);
    }
  };
  
  interceptReact();
  
  // Remove Framer badge aggressively
  const removeBadge = () => {
    const badge = document.getElementById('__framer-badge-container');
    if (badge) {
      badge.remove();
      console.log('Framer badge removed');
    }
  };
  
  // Check for badge periodically
  setInterval(removeBadge, 1000);
  
  console.log('Framer Override System V2 initialized');
}

// Initialize as early as possible
initializeOverrideSystem();

// Also run after a delay to catch late-loading content
setTimeout(initializeOverrideSystem, 1000);
setTimeout(replaceDOMContent, 2000);
setTimeout(replaceDOMContent, 3000);

// Export for debugging
window.FramerOverrideSystemV2 = {
  overrides: CONTENT_OVERRIDES,
  interceptTextContent,
  replaceDOMContent,
  reinitialize: initializeOverrideSystem
};
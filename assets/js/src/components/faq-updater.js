/**
 * FAQ Updater Module
 * 
 * Purpose: Update FAQ questions and answers to neurofeedback-specific content
 * Target: FAQ section with questions about primary care
 */

// New FAQ content for neurofeedback
const neurofeedbackFAQs = [
  {
    question: "How does neurofeedback help children with ASD?",
    answer: "Neurofeedback helps children with ASD by training their brains to self-regulate, improving attention, reducing anxiety, and enhancing social engagement through fun, game-based activities. Our NeurOS platform uses advanced LLMs and machine learning to personalize the experience for each child."
  },
  {
    question: "What age is appropriate for neurofeedback therapy?",
    answer: "Neurofeedback is suitable for children as young as 5 years old. Our NeurOS platform is specifically designed to be engaging and age-appropriate for children with ASD, with colorful games and interactive experiences that keep them engaged throughout the treatment."
  },
  {
    question: "How many sessions does my child need?",
    answer: "Most children benefit from 20-40 sessions, with improvements often noticed after 10-15 sessions. Each child's progress is unique and tracked through our Progress Portal, allowing parents and providers to monitor improvements in real-time."
  }
];

// Track observer for cleanup
let faqObserver = null;

/**
 * Update FAQ content
 */
function updateFAQContent() {
  console.log('Starting FAQ content update...');
  
  // Look for the primary care questions to replace
  const questionsToReplace = [
    "How to join the Primary Care program?",
    "How much does a consultation cost at Primary?",
    "How much do the annual preventive check-ups cost?"
  ];
  
  // Try multiple selectors for FAQ containers
  const faqSelectors = [
    '.framer-agkRe',
    '[class*="framer-"][class*="container"]',
    '.framer-sloVR-container',
    '[data-framer-component-type]'
  ];
  
  let foundFAQs = false;
  
  for (const selector of faqSelectors) {
    const containers = document.querySelectorAll(selector);
    console.log(`Checking selector ${selector}: found ${containers.length} elements`);
    
    containers.forEach(container => {
      // Try multiple ways to find the question element
      const questionSelectors = [
        'h3.framer-text',
        'h3',
        '.framer-text',
        '[data-framer-component-type="RichTextContainer"] h3',
        'div[style*="font-weight"] > h3'
      ];
      
      let questionElement = null;
      for (const qSelector of questionSelectors) {
        questionElement = container.querySelector(qSelector);
        if (questionElement && questionElement.textContent) {
          const text = questionElement.textContent.trim();
          // Check if this contains any of our target questions
          if (questionsToReplace.some(q => text.includes(q) || text.includes('Primary Care') || text.includes('consultation cost'))) {
            console.log(`Found question element with selector ${qSelector}: "${text}"`);
            foundFAQs = true;
            break;
          }
        }
      }
      
      if (questionElement && foundFAQs) {
        const currentQuestion = questionElement.textContent.trim();
        
        // Check which question to replace
        for (let i = 0; i < questionsToReplace.length; i++) {
          if (currentQuestion.includes(questionsToReplace[i]) || 
              (i === 0 && currentQuestion.includes('Primary Care program')) ||
              (i === 1 && currentQuestion.includes('consultation cost')) ||
              (i === 2 && currentQuestion.includes('preventive check-ups'))) {
            
            if (i < neurofeedbackFAQs.length) {
              // Update question
              questionElement.textContent = neurofeedbackFAQs[i].question;
              console.log(`Updated question ${i + 1}: ${neurofeedbackFAQs[i].question}`);
              
              // Find and update the answer - look for p tag in parent or sibling
              const answerSelectors = [
                'p.framer-text',
                'p',
                '+ div p',
                '~ div p',
                '~ * p'
              ];
              
              let answerElement = null;
              for (const aSelector of answerSelectors) {
                if (aSelector.startsWith('+') || aSelector.startsWith('~')) {
                  // Sibling selector
                  const parent = questionElement.closest('[class*="framer-"]');
                  if (parent && parent.parentElement) {
                    answerElement = parent.parentElement.querySelector(`[class*="framer-"]${aSelector}`);
                  }
                } else {
                  // Child selector
                  answerElement = container.querySelector(aSelector);
                }
                
                if (answerElement && !answerElement.textContent.includes('?')) {
                  console.log(`Found answer element with selector ${aSelector}`);
                  break;
                }
              }
              
              if (answerElement) {
                answerElement.textContent = neurofeedbackFAQs[i].answer;
                console.log(`Updated answer ${i + 1}`);
              } else {
                console.log(`Warning: Could not find answer element for question ${i + 1}`);
              }
              
              break;
            }
          }
        }
      }
    });
    
    if (foundFAQs) break;
  }
  
  if (!foundFAQs) {
    console.log('Warning: Could not find FAQ questions to update');
    // Log all h3 elements on the page for debugging
    const allH3s = document.querySelectorAll('h3');
    console.log(`Total h3 elements on page: ${allH3s.length}`);
    allH3s.forEach((h3, index) => {
      if (h3.textContent.includes('?')) {
        console.log(`  H3 ${index}: "${h3.textContent.trim()}" - classes: ${h3.className}`);
      }
    });
  }
  
  // Also update the FAQ section subtitle if found
  const subtitleSelectors = [
    'p.framer-text.framer-styles-preset-7w5cfp',
    'p.framer-text'
  ];
  
  subtitleSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element.textContent.includes('Answers to your most common questions about our products and services')) {
        element.textContent = 'Learn how our neurofeedback technology helps children with ASD improve focus, reduce anxiety, and enhance social skills.';
        console.log('Updated FAQ subtitle');
      }
    });
  });
}

/**
 * Initialize FAQ updates
 */
export function initializeFAQUpdater() {
  console.log('Initializing FAQ updater...');
  
  // Update FAQ content initially
  updateFAQContent();
  
  // Monitor for dynamic content changes
  faqObserver = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1) { // Element node
            // Check if FAQ-related content was added
            const textContent = node.textContent || '';
            if (node.classList?.contains('framer-agkRe') ||
                node.querySelector?.('.framer-agkRe') ||
                node.querySelector?.('h3') ||
                textContent.includes('Primary Care program') ||
                textContent.includes('consultation cost') ||
                textContent.includes('preventive check-ups') ||
                textContent.includes('How to join') ||
                textContent.includes('How much does')) {
              shouldUpdate = true;
              break;
            }
          }
        }
      } else if (mutation.type === 'characterData') {
        // Check if text content was changed
        const textContent = mutation.target.textContent || '';
        if (textContent.includes('Primary Care') ||
            textContent.includes('consultation cost') ||
            textContent.includes('preventive check-ups')) {
          shouldUpdate = true;
        }
      }
    }
    
    if (shouldUpdate) {
      console.log('FAQ-related content detected, updating...');
      setTimeout(updateFAQContent, 200); // Small delay to ensure content is fully rendered
    }
  });
  
  // Start observing
  faqObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
  
  // Periodic check for first few seconds
  let checks = 0;
  const checkInterval = setInterval(() => {
    updateFAQContent();
    checks++;
    if (checks > 10) clearInterval(checkInterval);
  }, 500);
  
  // Also add a more direct approach - search all text nodes
  setTimeout(() => {
    console.log('Running direct FAQ text replacement...');
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
    
    const nodesToUpdate = [];
    let node;
    
    while (node = walker.nextNode()) {
      const text = node.nodeValue.trim();
      
      // Check for FAQ questions
      if (text === "How to join the Primary Care program?" ||
          text === "How much does a consultation cost at Primary?" ||
          text === "How much do the annual preventive check-ups cost?") {
        nodesToUpdate.push({node: node, type: 'question', text: text});
      }
      // Check for the subtitle
      else if (text === "Answers to your most common questions about our products and services") {
        nodesToUpdate.push({node: node, type: 'subtitle', text: text});
      }
    }
    
    console.log(`Found ${nodesToUpdate.length} text nodes to update`);
    
    // Update the nodes
    nodesToUpdate.forEach(item => {
      if (item.type === 'question') {
        const index = item.text === "How to join the Primary Care program?" ? 0 :
                     item.text === "How much does a consultation cost at Primary?" ? 1 : 2;
        
        if (index < neurofeedbackFAQs.length) {
          item.node.nodeValue = neurofeedbackFAQs[index].question;
          console.log(`Directly updated question: ${neurofeedbackFAQs[index].question}`);
          
          // Try to find and update the answer
          let currentElement = item.node.parentElement;
          while (currentElement && currentElement !== document.body) {
            const parent = currentElement.parentElement;
            if (parent) {
              // Look for answer in siblings
              const siblings = Array.from(parent.children);
              const currentIndex = siblings.indexOf(currentElement);
              
              for (let i = currentIndex + 1; i < siblings.length && i < currentIndex + 5; i++) {
                const sibling = siblings[i];
                const paragraphs = sibling.querySelectorAll('p');
                
                if (paragraphs.length > 0) {
                  paragraphs[0].textContent = neurofeedbackFAQs[index].answer;
                  console.log(`Directly updated answer for question ${index + 1}`);
                  break;
                }
              }
            }
            currentElement = parent;
          }
        }
      } else if (item.type === 'subtitle') {
        item.node.nodeValue = 'Learn how our neurofeedback technology helps children with ASD improve focus, reduce anxiety, and enhance social skills.';
        console.log('Directly updated FAQ subtitle');
      }
    });
  }, 2000);
  
  // Return cleanup function
  return () => {
    if (faqObserver) {
      faqObserver.disconnect();
      faqObserver = null;
    }
    clearInterval(checkInterval);
  };
}

// Auto-initialize if loaded directly
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('DOMContentLoaded', initializeFAQUpdater);
}
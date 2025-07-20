/**
 * FAQ Updater V2 - More aggressive approach
 */

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

export function initializeFAQUpdaterV2() {
  console.log('FAQ Updater V2 starting...');
  
  // Inject CSS to hide old questions immediately
  const style = document.createElement('style');
  style.textContent = `
    /* Hide elements containing old FAQ text */
    *:has-text("Primary Care program"),
    *:has-text("consultation cost"),
    *:has-text("preventive check-ups") {
      visibility: hidden !important;
    }
  `;
  document.head.appendChild(style);
  
  // Function to update FAQs using text search
  function updateFAQsByText() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const text = node.textContent.trim();
          if (text.includes('How to join the Primary Care program') ||
              text.includes('How much does a consultation cost at Primary') ||
              text.includes('How much do the annual preventive check-ups cost')) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );
    
    let node;
    const questionsFound = [];
    
    while (node = walker.nextNode()) {
      const text = node.textContent.trim();
      let faqIndex = -1;
      
      if (text.includes('How to join the Primary Care program')) faqIndex = 0;
      else if (text.includes('How much does a consultation cost at Primary')) faqIndex = 1;
      else if (text.includes('How much do the annual preventive check-ups cost')) faqIndex = 2;
      
      if (faqIndex >= 0 && faqIndex < neurofeedbackFAQs.length) {
        console.log(`Found FAQ question ${faqIndex + 1}: "${text}"`);
        
        // Update the text node
        node.textContent = neurofeedbackFAQs[faqIndex].question;
        
        // Find the answer element
        const questionElement = node.parentElement;
        if (questionElement) {
          // Look for answer in various places
          let answerElement = null;
          
          // Try next sibling
          let sibling = questionElement.nextElementSibling;
          while (sibling && !answerElement) {
            if (sibling.tagName === 'P' || sibling.querySelector('p')) {
              answerElement = sibling.tagName === 'P' ? sibling : sibling.querySelector('p');
              break;
            }
            sibling = sibling.nextElementSibling;
          }
          
          // Try parent's next sibling
          if (!answerElement) {
            const parent = questionElement.parentElement;
            if (parent) {
              sibling = parent.nextElementSibling;
              while (sibling && !answerElement) {
                const p = sibling.querySelector('p');
                if (p) {
                  answerElement = p;
                  break;
                }
                sibling = sibling.nextElementSibling;
              }
            }
          }
          
          // Try finding any p tag after this element in document order
          if (!answerElement) {
            const allElements = Array.from(document.querySelectorAll('*'));
            const questionIndex = allElements.indexOf(questionElement);
            
            for (let i = questionIndex + 1; i < allElements.length && i < questionIndex + 20; i++) {
              if (allElements[i].tagName === 'P' && 
                  !allElements[i].textContent.includes('?') &&
                  allElements[i].textContent.length > 20) {
                answerElement = allElements[i];
                break;
              }
            }
          }
          
          if (answerElement) {
            console.log(`Updating answer for FAQ ${faqIndex + 1}`);
            answerElement.textContent = neurofeedbackFAQs[faqIndex].answer;
          }
        }
        
        questionsFound.push(faqIndex);
      }
    }
    
    return questionsFound.length > 0;
  }
  
  // Run update multiple times
  let attempts = 0;
  const maxAttempts = 20;
  
  const tryUpdate = () => {
    const success = updateFAQsByText();
    attempts++;
    
    if (!success && attempts < maxAttempts) {
      setTimeout(tryUpdate, 500);
    } else if (success) {
      console.log('FAQ update successful!');
    } else {
      console.log('FAQ update failed after', attempts, 'attempts');
    }
  };
  
  // Start trying immediately and after delays
  tryUpdate();
  setTimeout(tryUpdate, 1000);
  setTimeout(tryUpdate, 2000);
  setTimeout(tryUpdate, 3000);
  
  // Also monitor for dynamic changes
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const text = node.textContent || '';
            if (text.includes('Primary Care') || text.includes('consultation cost')) {
              console.log('Detected FAQ content added, updating...');
              setTimeout(updateFAQsByText, 100);
              break;
            }
          }
        }
      }
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
  
  return () => observer.disconnect();
}
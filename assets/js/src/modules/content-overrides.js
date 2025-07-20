/**
 * Content Overrides Module
 * 
 * Handles all content replacements including FAQ updates.
 * Simplified approach that modifies content efficiently.
 * 
 * @module content-overrides
 */

import { siteConfig } from '../config/site-config.js';
import { on } from '../core/event-manager.js';

/**
 * Content overrides module
 */
const contentModule = {
  name: 'content-overrides',
  processedElements: new WeakSet(),
  
  /**
   * Initialize content module
   */
  initialize() {
    console.log('[Content] Initializing...');
    
    // Listen for modification events
    on('neuros:apply-modifications', ({ trigger }) => {
      this.apply(trigger);
    });
  },
  
  /**
   * Apply content modifications
   */
  apply(trigger) {
    // Apply on specific triggers
    const relevantTriggers = ['init', 'dom-ready', 'page-ready', 'mutation', 'route-change'];
    if (!relevantTriggers.includes(trigger)) return;
    
    console.log(`[Content] Applying modifications (${trigger})`);
    
    // Update FAQ content
    this.updateFAQContent();
    
    // Update other text content
    this.updateTextContent();
  },
  
  /**
   * Update FAQ content
   */
  updateFAQContent() {
    // Update FAQ subtitle
    const subtitleSelectors = [
      'p:contains("Answers to your most common questions")',
      '.framer-text',
      'p.framer-styles-preset-7w5cfp'
    ];
    
    // Use querySelector with text search
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      if (p.textContent.includes('Answers to your most common questions')) {
        p.textContent = siteConfig.content.faq.subtitle;
        this.processedElements.add(p);
        console.log('[Content] Updated FAQ subtitle');
      }
    });
    
    // Update FAQ questions and answers
    this.updateFAQQuestions();
  },
  
  /**
   * Update FAQ questions using a more efficient approach
   */
  updateFAQQuestions() {
    // Create a map for quick lookup
    const faqMap = new Map(
      siteConfig.content.faq.questions.map(q => [q.original, q])
    );
    
    // Find and update questions
    const headings = document.querySelectorAll('h3, h4, h5');
    
    headings.forEach(heading => {
      const text = heading.textContent.trim();
      
      // Check each configured FAQ
      for (const [original, faq] of faqMap) {
        if (text === original || text.includes(original.replace('?', ''))) {
          // Update question
          heading.textContent = faq.question;
          this.processedElements.add(heading);
          console.log(`[Content] Updated FAQ question: ${faq.question}`);
          
          // Find and update the answer
          this.updateFAQAnswer(heading, faq.answer);
          break;
        }
      }
    });
    
    // Also check text nodes directly for questions
    this.updateTextNodes();
  },
  
  /**
   * Update FAQ answer near a question heading
   */
  updateFAQAnswer(questionElement, newAnswer) {
    // Look for answer in various locations
    let answerElement = null;
    
    // Check siblings
    let sibling = questionElement.nextElementSibling;
    let attempts = 0;
    
    while (sibling && attempts < 5) {
      if (sibling.tagName === 'P' || sibling.querySelector('p')) {
        answerElement = sibling.tagName === 'P' ? sibling : sibling.querySelector('p');
        break;
      }
      sibling = sibling.nextElementSibling;
      attempts++;
    }
    
    // Check parent's siblings
    if (!answerElement) {
      const parent = questionElement.parentElement;
      if (parent) {
        sibling = parent.nextElementSibling;
        attempts = 0;
        
        while (sibling && attempts < 5) {
          const p = sibling.querySelector('p');
          if (p) {
            answerElement = p;
            break;
          }
          sibling = sibling.nextElementSibling;
          attempts++;
        }
      }
    }
    
    if (answerElement && !this.processedElements.has(answerElement)) {
      answerElement.textContent = newAnswer;
      this.processedElements.add(answerElement);
      console.log('[Content] Updated FAQ answer');
    }
  },
  
  /**
   * Update text nodes directly
   */
  updateTextNodes() {
    // Only process text nodes we haven't seen
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (node.parentElement && this.processedElements.has(node.parentElement)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          const text = node.textContent.trim();
          if (text.length > 10 && text.includes('?')) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );
    
    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent;
      let modified = text;
      
      // Check for FAQ questions
      siteConfig.content.faq.questions.forEach(faq => {
        if (text.includes(faq.original)) {
          modified = text.replace(faq.original, faq.question);
        }
      });
      
      if (modified !== text) {
        node.textContent = modified;
        if (node.parentElement) {
          this.processedElements.add(node.parentElement);
        }
        console.log('[Content] Updated text node with FAQ question');
      }
    }
  },
  
  /**
   * Update other text content (LinkedIn URLs, etc.)
   */
  updateTextContent() {
    // Update all links
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
      if (link.href === siteConfig.social.linkedIn.original) {
        link.href = siteConfig.social.linkedIn.replacement;
        this.processedElements.add(link);
      }
    });
  },
  
  /**
   * Observe for dynamic content changes
   */
  observeContent() {
    // We rely on the event manager's mutation observer
    // This method is here if we need specific content observation
  }
};

// Register module with core
if (window.NeurosCore) {
  window.NeurosCore.registerModule('content-overrides', contentModule);
}

// Export for other modules
export default contentModule;
/**
 * Neuros Website Configuration
 * 
 * Central configuration for all site customizations.
 * This is the single source of truth for modifications.
 * 
 * @module site-config
 */

export const siteConfig = {
  // Development mode flag
  debug: false,
  
  // Navigation configuration
  navigation: {
    // Items to remove from navigation
    hiddenItems: ['blog', 'patients'],
    
    // Navigation items to display
    items: [
      {
        id: 'about',
        label: 'About',
        href: './about',
        order: 1
      },
      {
        id: 'services',
        label: 'Services',
        href: './services',
        order: 2
      },
      {
        id: 'contact',
        label: 'Contact',
        href: './contact',
        order: 3
      }
    ]
  },
  
  // Content overrides
  content: {
    // FAQ replacements
    faq: {
      subtitle: 'Learn how our neurofeedback technology helps children with ASD improve focus, reduce anxiety, and enhance social skills.',
      questions: [
        {
          original: 'How to join the Primary Care program?',
          question: 'How does neurofeedback help children with ASD?',
          answer: 'Neurofeedback helps children with ASD by training their brains to self-regulate, improving attention, reducing anxiety, and enhancing social engagement through fun, game-based activities. Our NeurOS platform uses advanced LLMs and machine learning to personalize the experience for each child.'
        },
        {
          original: 'How much does a consultation cost at Primary?',
          question: 'What age is appropriate for neurofeedback therapy?',
          answer: 'Neurofeedback is suitable for children as young as 5 years old. Our NeurOS platform is specifically designed to be engaging and age-appropriate for children with ASD, with colorful games and interactive experiences that keep them engaged throughout the treatment.'
        },
        {
          original: 'How much do the annual preventive check-ups cost?',
          question: 'How many sessions does my child need?',
          answer: 'Most children benefit from 20-40 sessions, with improvements often noticed after 10-15 sessions. Each child\'s progress is unique and tracked through our Progress Portal, allowing parents and providers to monitor improvements in real-time.'
        }
      ]
    },
    
    // Footer modifications
    footer: {
      // Sections to remove
      hiddenSections: ['Office hours']
    }
  },
  
  // Visual elements to hide
  visibility: {
    // CSS selectors for elements to hide
    hiddenElements: [
      '#__framer-badge-container',
      '.__framer-badge',
      '.framer-oqhszj', // Blog section
      '.framer-1m9nwvx', // Patients section
      '.framer-n4csf8:has(h4:contains("Office hours"))'
    ],
    
    // Classes to hide via CSS injection
    hiddenClasses: [
      'framer-69tlqz', // Blog nav
      'framer-7ddsau', // Blog nav
      'framer-13m8v6l', // Patients nav
      'framer-zwpqgk' // Patients nav
    ]
  },
  
  // LinkedIn URL replacement
  social: {
    linkedIn: {
      original: 'https://linkedin.com/emmafrank81',
      replacement: 'https://www.linkedin.com/company/neuros-platforms'
    }
  },
  
  // Performance settings
  performance: {
    // Delay before intercepting (ms)
    interceptDelay: 0,
    
    // Maximum retries for content updates
    maxRetries: 3,
    
    // Retry delay (ms)
    retryDelay: 500
  },
  
  // Feature flags
  features: {
    interceptModules: true,
    overrideContent: true,
    hideElements: true,
    debugLogging: false
  }
};

// Freeze config to prevent accidental modifications
Object.freeze(siteConfig);
Object.freeze(siteConfig.navigation);
Object.freeze(siteConfig.content);
Object.freeze(siteConfig.visibility);
Object.freeze(siteConfig.social);
Object.freeze(siteConfig.performance);
Object.freeze(siteConfig.features);
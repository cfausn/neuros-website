/**
 * Navigation Configuration Module
 * 
 * Purpose: Defines the navigation items and structure for the website
 * File size: ~200 lines
 * 
 * Table of Contents:
 * - Navigation Items Configuration (line 15)
 * - Navigation State Management (line 100)
 * - Export Configuration (line 180)
 * 
 * Dependencies: None
 * 
 * Last Updated: Added configuration to remove Blog and Patients links
 */

// Navigation items configuration
// NOTE: Blog and Patients links have been removed as requested
export const navigationItems = [
  {
    id: 'about',
    label: 'About',
    href: './about',
    className: 'framer-1uxluou',
    dataFramerName: 'link'
  },
  // REMOVED: Patients navigation item
  // {
  //   id: 'patients',
  //   label: 'Patients', 
  //   href: './patients',
  //   className: 'framer-7ddsau',
  //   dataFramerName: 'link'
  // },
  {
    id: 'services',
    label: 'Services',
    href: './services',
    className: 'framer-86if7z',
    dataFramerName: 'link'
  },
  // REMOVED: Blog navigation item
  // {
  //   id: 'blog',
  //   label: 'Blog',
  //   href: './blog',
  //   className: 'framer-69tlqz',
  //   dataFramerName: 'link'
  // },
  {
    id: 'contact',
    label: 'Contact',
    href: './contact',
    className: 'framer-102rgc1',
    dataFramerName: 'link'
  }
];

// Schedule demo button configuration
export const scheduleButtonConfig = {
  label: 'Schedule Demo',
  href: 'https://calendly.com',
  target: '_blank',
  rel: 'noopener',
  className: 'framer-6bb8u framer-1i0v9z9 framer-v-7iwekv framer-3uddet',
  ariaLabel: 'button',
  dataFramerName: 'Variant 4',
  style: {
    '--border-bottom-width': '0px',
    '--border-color': 'rgba(0, 0, 0, 0)',
    '--border-left-width': '0px',
    '--border-right-width': '0px',
    '--border-style': 'solid',
    '--border-top-width': '0px',
    'background-color': 'var(--token-33851d71-e9ac-4b29-b2ea-a2dec6814586, rgb(1, 183, 150))',
    'border-bottom-left-radius': '16px',
    'border-bottom-right-radius': '16px',
    'border-top-left-radius': '16px',
    'border-top-right-radius': '16px'
  }
};

// Navigation wrapper styles
export const navigationStyles = {
  desktop: {
    backgroundColor: 'var(--token-15636448-77df-48cc-8a9e-3a0e24c84c68, rgb(0, 35, 52))',
    width: '100%'
  },
  light: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: '100%'
  }
};

// Breakpoint configurations
export const navigationBreakpoints = {
  desktop: {
    className: 'framer-v-1lmvrib',
    dataFramerName: 'Desktop'
  },
  laptop: {
    className: 'framer-v-vk15um',
    dataFramerName: 'Laptop'
  },
  tablet: {
    className: 'framer-v-cpnqb3',
    dataFramerName: 'Tablet'
  },
  phone: {
    className: 'framer-v-q6fzoh',
    dataFramerName: 'Phone'
  }
};

// Export helper function to filter active navigation items
export function getActiveNavigationItems() {
  // This function can be extended to handle dynamic navigation based on user roles, etc.
  return navigationItems;
}

// Export helper to check if a route should be accessible
export function isRouteAccessible(route) {
  const blockedRoutes = ['/blog', '/patients'];
  return !blockedRoutes.includes(route);
}
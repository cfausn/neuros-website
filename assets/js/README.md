# Neuros Website JavaScript Architecture

## Overview

This directory contains the modularized JavaScript code for the Neuros website. The code has been restructured from minified Framer-generated files into maintainable, AI-friendly modules.

## Directory Structure

```
assets/js/
├── src/                          # Source modules
│   ├── navigation/              # Navigation-related modules
│   │   ├── navigation-config.js # Navigation item configuration
│   │   └── navigation-renderer.js # Navigation rendering and DOM manipulation
│   ├── components/              # Component-specific handlers
│   │   ├── blog-section-handler.js # Removes blog sections
│   │   └── patients-section-handler.js # Removes patients sections
│   └── index.js                 # Main entry point
├── neuros-loader.js            # Module loader script
└── minified_backup/            # Backup of original minified files
```

## Module Descriptions

### neuros-loader.js
- Loads all modules in the correct order
- Handles relative path resolution for different page locations
- Should be included in HTML files instead of the original minified scripts

### src/index.js
- Main entry point for the application
- Coordinates all module initialization
- Waits for Framer to load before applying customizations
- Provides cleanup functions for SPA navigation

### src/navigation/navigation-config.js
- Contains navigation item definitions
- Blog and Patients items are commented out but preserved
- Schedule button configuration

### src/navigation/navigation-renderer.js
- Handles navigation DOM manipulation
- Removes Blog and Patients links dynamically
- Uses multiple strategies: CSS hiding, DOM removal, MutationObserver
- Removes sections with classes framer-oqhszj and framer-1m9nwvx

### src/components/blog-section-handler.js
- Dedicated handler for removing blog-related content
- Monitors DOM for dynamically added blog elements
- Prevents blog section rendering if possible

### src/components/patients-section-handler.js
- Dedicated handler for removing patients-related content
- Removes specific classes: framer-oqhszj, framer-1m9nwvx
- Monitors DOM for dynamically added patients elements

## File Size Guidelines

All modules are kept under 2000 lines or 100KB to ensure AI agents can process them effectively. This modular approach allows for:
- Easy maintenance and updates
- AI-assisted code modifications
- Better code organization
- Reduced context window usage

## Usage

To use the new modular JavaScript structure in HTML files:

```html
<!-- Remove old script tags -->
<!-- <script src="assets/js/chunk-*.mjs"></script> -->

<!-- Add new loader -->
<script src="assets/js/neuros-loader.js" defer></script>
```

The loader will automatically adjust paths based on the current page location.

## Customizations Applied

1. **Navigation Updates**
   - Blog and Patients links removed from all navigation menus
   - Links are hidden via CSS and removed via JavaScript

2. **Section Removal**
   - Sections with class `framer-oqhszj` are removed
   - Sections with class `framer-1m9nwvx` are removed

3. **LinkedIn URL Updates**
   - All LinkedIn links updated from `/emmafrank81` to `/company/neuros-platforms`

## Development Notes

- The code waits for Framer's runtime to load before applying customizations
- Multiple removal strategies ensure content is hidden even if one method fails
- MutationObservers monitor for dynamically added content
- CSS hiding provides immediate visual removal while JavaScript loads

## Future Maintenance

When updating the site:
1. Make changes in the modular source files
2. Test locally using `python3 serve_local.py`
3. Verify all customizations still work
4. Update this documentation if new modules are added
# Neuros Website JavaScript Architecture v2.0

## Overview

This is a clean, modular JavaScript architecture that provides complete control over a Framer-exported website. Instead of fighting against Framer's rendering system, it intercepts and modifies behavior at the source level.

## Key Features

- **Early Interception**: Loads before Framer to intercept core functions
- **Event-Driven**: Uses Framer's lifecycle events for optimal timing
- **Modular Design**: Small, focused modules under 15KB each
- **Single Configuration**: All customizations in one config file
- **AI-Friendly**: Designed for easy understanding and modification by AI agents

## Architecture

```
assets/js/
├── neuros-init.js          # Early loader (loads before Framer)
├── src/
│   ├── config/
│   │   └── site-config.js  # All site customizations
│   ├── core/
│   │   ├── framer-interceptor.js  # Intercepts Framer functions
│   │   ├── module-overrides.js    # Module replacement system
│   │   └── event-manager.js       # Event coordination
│   └── modules/
│       ├── navigation.js          # Navigation management
│       ├── content-overrides.js   # Content replacements
│       └── visibility-control.js  # Element hiding
```

## How It Works

1. **neuros-init.js** loads before Framer's scripts
2. Core interceptors hook into Framer's functions
3. Event manager coordinates modifications
4. Modules apply changes at optimal times
5. No more fighting with re-renders!

## Configuration

All customizations are in `src/config/site-config.js`:

```javascript
export const siteConfig = {
  navigation: {
    hiddenItems: ['blog', 'patients'],
    items: [/* navigation structure */]
  },
  content: {
    faq: {/* FAQ replacements */},
    footer: {/* Footer modifications */}
  },
  visibility: {/* Elements to hide */},
  social: {/* URL replacements */}
};
```

## Adding Customizations

1. Edit `site-config.js` with your changes
2. Changes apply automatically on page load
3. No code changes needed in modules

## Debug Mode

Add `?debug=true` to any URL to enable debug logging.

## Module Guidelines

For AI agents and developers:

- Keep modules under 15KB (~400 lines)
- Use the event system, not timers
- Modify data, not DOM when possible
- Check `processedElements` to avoid duplicates
- Always log actions in debug mode

## Performance

- CSS injected immediately for instant hiding
- Interception happens before Framer loads
- Event-driven updates (no polling)
- Efficient element tracking with WeakSet

## Browser Support

Works in all modern browsers that support:
- ES6 modules
- Proxy objects
- MutationObserver
- Custom events
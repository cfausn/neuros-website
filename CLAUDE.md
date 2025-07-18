# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Framer-exported static website for a healthcare/medical services company. The site was created using Framer (a visual web design tool) and exported as static HTML files.

## Project Structure

```
neuros-website/
├── about/          # About page
├── blog/           # Blog section with multiple articles
├── contact/        # Contact page
├── patients/       # Patients information page
├── privacy/        # Privacy policy page
├── services/       # Services page
└── page.html       # Homepage
```

Each directory contains a `page.html` file with the complete page content, including inline styles and scripts.

## Development Workflow

Since this is a Framer-exported site, the typical workflow is:
1. Make changes in Framer (the visual design tool)
2. Export the updated site from Framer
3. Replace the HTML files in this repository

For minor text changes or quick fixes, you can edit the HTML files directly.

## Important Technical Details

- All HTML files are self-contained with inline Framer runtime code
- JavaScript and CSS assets are loaded from Framer's CDN (framerusercontent.com)
- No build process or local development server is required
- Files can be served directly as static HTML
- Each HTML file is large (150-400KB) due to embedded Framer code

## Making Changes

### Text Content Changes
To update text content, search for the specific text in the relevant `page.html` file and modify it directly.

### Structure Changes
Major structural changes should be made in Framer and re-exported. Direct HTML editing for structural changes is not recommended as it may break Framer's functionality.

### Testing Changes
Since there's no build process, you can test changes by:
1. Opening the HTML file directly in a browser
2. Using a simple HTTP server: `python -m http.server` or `npx http-server`

## Git Workflow

The repository uses standard git commands:
- `git status` - Check current changes
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository
# RPE Solutions AI - Website

Official website for RPE Solutions AI - Automating Success. Simplifying Growth.

## Overview

Modern, responsive single-page application built with React showcasing AI-powered business solutions including smart websites, AI chatbots, business automations, and CRM workflow setup.

## Features

- 🎨 **Purple-Teal Hybrid Tech Theme** - Premium design with cinematic gradients
- 💎 **Frosted Glass Effects** - Modern backdrop blur on cards and forms
- 🌊 **Animated Elements** - Gradient headlines, scroll reveals, parallax hero
- 🌙 **Dark Navy Services Section** - Dramatic contrast panel with glass cards
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ♿ **Accessible** - WCAG AA compliant, respects reduced-motion preferences
- ⚡ **Performance Optimized** - GPU-accelerated animations, passive listeners

## Tech Stack

- React 18 (via CDN)
- Babel Standalone (JSX compilation)
- Tailwind CSS (via CDN)
- Custom CSS with CSS Variables
- Pure JavaScript (no build process required)

## File Structure

```
Website 2/
├── index.html          # Main single-page application
├── 404.html            # Custom 404 error page
├── manifest.json       # PWA manifest
├── robots.txt          # Search engine directives
├── sitemap.xml         # SEO sitemap
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── README_THEME.md     # Theme customization guide
```

## Quick Start

1. Open `index.html` in a modern web browser
2. No build process or installation required
3. Works offline after first load (CDN cached)

## Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect GitHub repo and deploy
- **GitHub Pages**: Push to repo, enable Pages in settings
- **AWS S3 + CloudFront**: Upload to S3 bucket

### Traditional Hosting
- Upload all files to your web server root
- Ensure `index.html` is set as the default document
- Configure SSL certificate for HTTPS

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

See `README_THEME.md` for detailed customization guide including:
- Color palette modifications
- Gradient adjustments
- Animation controls
- Typography changes

### Quick Color Change

Edit the `:root` variables in `index.html`:

```css
:root {
  --accent-purple: #6366F1;  /* Change to your primary color */
  --accent-teal: #00C9C8;    /* Change to your secondary color */
  --accent-gold: #FFC861;    /* Change to your accent color */
}
```

## Sections

1. **Hero** - Animated gradient headline with rotating text
2. **Services** - Dark navy panel with 4 frosted glass cards
3. **Pricing** - 3 pricing tiers with "Most Popular" highlight
4. **About** - Why Choose Us with value propositions
5. **Contact** - Centered form with contact information
6. **Footer** - Dark gradient with quick links and social media

## Contact Information

- **Email**: contact@rpesolutions.ai
- **Phone**: (609) 707-0180

## Performance

- ⚡ Lighthouse Score: 90+
- 🎯 First Contentful Paint: < 1.5s
- 💎 Uses GPU acceleration for animations
- 📦 Minimal dependencies (all via CDN)

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible states (teal rings)
- Respects prefers-reduced-motion
- WCAG AA contrast ratios

## SEO

- Semantic heading hierarchy
- Meta tags for social sharing (add to `<head>`)
- Sitemap.xml included
- robots.txt configured
- Mobile-friendly (Google Mobile-First Indexing ready)

## License

© 2025 RPE Solutions AI. All rights reserved.

## Support

For technical support or customization requests, contact the development team.

---

**Version**: 4.0 (Purple-Teal Hybrid)  
**Last Updated**: October 2025  
**Status**: Production Ready ✨


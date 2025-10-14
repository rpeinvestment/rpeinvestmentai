# Deployment Guide - RPE Solutions AI Website

This guide will help you deploy your website to production.

## Prerequisites

- Your domain name (e.g., rpesolutions.ai)
- Hosting provider account (see options below)
- Basic understanding of file uploads or Git

---

## Option 1: Netlify (Recommended - Easiest)

### Steps:
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up for a free account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your entire `Website 2` folder
5. Your site will be live in seconds at a random URL
6. Configure custom domain in Site settings → Domain management

### Advantages:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Form handling (can connect your contact form)

---

## Option 2: Vercel

### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign up and create a new project
3. Upload your files or connect GitHub repo
4. Deploy with one click
5. Add custom domain in project settings

### Advantages:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Edge network (fast worldwide)
- ✅ GitHub integration

---

## Option 3: GitHub Pages

### Steps:
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository (e.g., `rpesolutions-website`)
3. Upload all your files to the repository
4. Go to Settings → Pages
5. Select branch `main` and folder `/` (root)
6. Your site will be live at `username.github.io/rpesolutions-website`

### Advantages:
- ✅ Free hosting
- ✅ Version control built-in
- ✅ Good for open-source projects

---

## Option 4: Traditional Web Hosting (cPanel, FTP)

### Steps:
1. Purchase hosting from providers like:
   - Bluehost, SiteGround, HostGator, etc.
2. Access your hosting control panel (cPanel) or FTP
3. Upload all files to `public_html` or `www` directory
4. Ensure `index.html` is in the root
5. Configure your domain DNS to point to hosting server

### File Upload Checklist:
```
✓ index.html
✓ 404.html
✓ manifest.json
✓ robots.txt
✓ sitemap.xml
✓ README.md
✓ README_THEME.md
✓ DEPLOYMENT.md
```

---

## Option 5: AWS S3 + CloudFront (Advanced)

### Steps:
1. Create AWS account
2. Create S3 bucket with public access
3. Upload all files to bucket
4. Enable static website hosting
5. Create CloudFront distribution for CDN
6. Configure custom domain via Route 53

### Advantages:
- ✅ Highly scalable
- ✅ Very fast (global CDN)
- ✅ Pay only for usage
- ✅ Enterprise-grade

---

## Post-Deployment Checklist

### 1. Update Content
- [ ] Replace `contact@rpesolutions.ai` with your real email (if different)
- [x] Phone number updated to (609) 707-0180
- [ ] Update social media links (LinkedIn, Instagram, YouTube)

### 2. Add Meta Tags
Add these to `<head>` in `index.html` for better SEO:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="RPE Solutions AI - AI-powered websites, chatbots, and automations that save time, grow revenue, and scale your business.">
<meta name="keywords" content="AI websites, chatbots, business automation, CRM, workflow optimization">
<meta name="author" content="RPE Solutions AI">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="RPE Solutions AI - Automating Success. Simplifying Growth.">
<meta property="og:description" content="AI-powered websites, chatbots, and automations for business growth.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.rpesolutions.ai">
<meta property="og:image" content="https://www.rpesolutions.ai/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="RPE Solutions AI">
<meta name="twitter:description" content="AI-powered websites, chatbots, and automations.">
<meta name="twitter:image" content="https://www.rpesolutions.ai/og-image.jpg">

<!-- PWA Manifest -->
<link rel="manifest" href="/manifest.json">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### 3. Create Favicon
Create a favicon (icon for browser tab):
- Use a tool like [favicon.io](https://favicon.io)
- Upload `favicon.ico` to root directory
- Create `icon-192.png` and `icon-512.png` for PWA

### 4. Configure Contact Form
The current form is client-side only. For actual email delivery:

**Option A - Formspree**:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B - Netlify Forms**:
Add `netlify` attribute to form tag:
```html
<form netlify name="contact">
```

**Option C - EmailJS**:
Add EmailJS SDK and configure email service.

### 5. Add Analytics (Optional)
- Google Analytics 4
- Plausible Analytics
- Fathom Analytics

### 6. Test Your Site
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check loading speed with Lighthouse
- [ ] Verify SSL certificate is active (https://)
- [ ] Test on different browsers

---

## SSL/HTTPS

Most modern hosting providers (Netlify, Vercel, GitHub Pages) provide **free automatic SSL certificates**.

For traditional hosting:
- Use Let's Encrypt (free)
- Or purchase SSL from hosting provider
- Configure in cPanel or hosting dashboard

---

## Custom Domain Setup

### DNS Configuration
Point your domain to your hosting:

**Netlify/Vercel**:
- Add CNAME record: `www` → `[your-site].netlify.app`
- Add A record: `@` → (provided IP addresses)

**GitHub Pages**:
- Add CNAME record: `www` → `username.github.io`
- Add A record: `@` → GitHub IP addresses

**Traditional Hosting**:
- Update nameservers to hosting provider
- Or point A record to server IP

---

## Performance Optimization Tips

1. **Compress Images** (if you add any):
   - Use WebP or AVIF format
   - Optimize with TinyPNG or Squoosh

2. **Enable Gzip Compression**:
   - Most hosts enable this by default
   - Check with hosting provider

3. **Use CDN**:
   - Netlify/Vercel include CDN automatically
   - Traditional hosting: consider Cloudflare (free)

4. **Caching Headers**:
   - Configure in `.htaccess` or hosting settings
   - Cache static assets for 1 year

---

## Monitoring

### Uptime Monitoring
- UptimeRobot (free)
- Pingdom
- StatusCake

### Error Tracking
- Sentry (free tier available)
- LogRocket
- Rollbar

---

## Backup

### Recommended Backup Strategy:
1. Keep local copy of all files
2. Use Git for version control (push to GitHub)
3. Export from hosting dashboard monthly
4. Store backups in cloud (Google Drive, Dropbox)

---

## Support

For deployment issues:
- Check hosting provider documentation
- Contact their support team
- Refer to this deployment guide

**Good luck with your launch!** 🚀

---

**Last Updated**: October 2025


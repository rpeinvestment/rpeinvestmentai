# 🚀 Hostinger + Free CMS Setup Guide

## Complete setup for your RPE Solutions AI blog with **zero monthly costs**!

---

## 📋 **What You'll Get**

✅ Beautiful CMS admin dashboard  
✅ Write posts like Medium  
✅ Auto-deploy to Hostinger on publish  
✅ 2-4 posts/week, forever free  
✅ No manual HTML coding  
✅ GitHub backup of all content  

---

## ⚡ **Quick Setup (15 Minutes)**

### **Step 1: Create GitHub Repository** (3 minutes)

1. Go to **github.com** and login (or create free account)
2. Click **"New repository"**
3. Name it: `rpe-solutions-website`
4. Make it **Public** (required for free features)
5. Click **"Create repository"**

6. Upload your website files:
   - Option A: Drag & drop all files into GitHub web interface
   - Option B: Use GitHub Desktop app
   - Option C: Command line Git (if comfortable)

**Important:** Make sure these folders are uploaded:
- `admin/` (CMS interface)
- `_posts/` (your blog posts)
- `_data/` (generated data)
- All HTML files

---

### **Step 2: Update CMS Configuration** (2 minutes)

1. In GitHub, open `admin/config.yml`
2. Find line 3: `repo: YOUR-GITHUB-USERNAME/YOUR-REPO-NAME`
3. Click **Edit** (pencil icon)
4. Update to your actual repo, example:
   ```yaml
   repo: johndoe/rpe-solutions-website
   ```
5. Click **Commit changes**

---

### **Step 3: Get Hostinger FTP Credentials** (2 minutes)

1. Login to **Hostinger dashboard**
2. Go to **Files → FTP Accounts**
3. Note down:
   - **FTP Server:** (e.g., `ftp.yoursite.com`)
   - **Username:** (e.g., `u123456789`)
   - **Password:** (create new or use existing)
   - **Directory:** Usually `/public_html/`

---

### **Step 4: Setup GitHub Secrets** (3 minutes)

1. In your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Add these 3 secrets:

   **Secret 1:**
   - Name: `FTP_SERVER`
   - Value: `ftp.yoursite.com` (your Hostinger FTP address)

   **Secret 2:**
   - Name: `FTP_USERNAME`
   - Value: `u123456789` (your FTP username)

   **Secret 3:**
   - Name: `FTP_PASSWORD`
   - Value: Your FTP password

---

### **Step 5: Register GitHub OAuth App** (5 minutes)

This lets the CMS authenticate and save posts.

1. Go to **github.com/settings/developers**
2. Click **"OAuth Apps"** → **"New OAuth App"**
3. Fill in:
   - **Application name:** `RPE Solutions CMS`
   - **Homepage URL:** `https://yoursite.com` (your Hostinger domain)
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     *(Yes, use Netlify's OAuth handler - it's free for everyone)*
4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"** → Copy it

7. Update `admin/config.yml` in GitHub:
   ```yaml
   backend:
     name: github
     repo: YOUR-USERNAME/YOUR-REPO
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```

---

### **Step 6: Test Deployment** (Manual First Time)

Before automation kicks in, do one manual deploy:

1. Download your entire repo as ZIP from GitHub
2. Extract it locally
3. Upload ALL files to Hostinger via:
   - **Hostinger File Manager**, or
   - **FileZilla FTP client**
4. Verify site loads at your domain

---

## ✍️ **Writing Your First Post**

### **Method 1: GitHub Web Interface** (Easiest)

1. Go to your GitHub repo
2. Navigate to `_posts/` folder
3. Click **"Add file"** → **"Create new file"**
4. Name it: `2025-01-20-my-first-post.md`
5. Copy this template:

```markdown
---
title: "My First Blog Post"
date: 2025-01-20T10:00:00.000Z
category: "AI Chatbots"
image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800"
excerpt: "A short description of my post for the blog cards."
author: "RPE Solutions Team"
readTime: "5 min read"
description: "SEO meta description for search engines"
tags: ["AI", "Automation"]
featured: false
---

## Your First Heading

Write your content here in simple markdown format.

- Bullet points work
- **Bold text** too
- *Italic text* as well

### Subheading

More content here...

```

6. Click **"Commit new file"**
7. GitHub Actions automatically:
   - Builds JSON files
   - Deploys to Hostinger
   - Post goes live in 1-2 minutes! 🎉

---

### **Method 2: Using CMS Admin Dashboard** (More Visual)

1. Go to `yoursite.com/admin`
2. Click **"Login with GitHub"**
3. Authorize the app
4. You're in! Click **"New Post"**
5. Fill in the form:
   - Title
   - Category (dropdown)
   - Upload image or paste URL
   - Write content (rich text editor)
   - Set date, author, etc.
6. Click **"Publish"**
7. Commits to GitHub → Auto-deploys to Hostinger!

---

## 🔍 **Verify Everything Works**

### After Publishing Your First Post:

1. **Check GitHub Actions:**
   - Go to repo → **Actions** tab
   - Should see "Build and Deploy to Hostinger" running
   - Wait for green checkmark (1-2 mins)

2. **Check Your Site:**
   - Visit `yoursite.com/blog.html`
   - Your new post should appear!
   - Click it to see full article

3. **Check Hostinger:**
   - Files should be updated in `/public_html/`
   - `_data/blog.json` should have your new post

---

## 🛠️ **Troubleshooting**

### **"CMS won't let me login"**
- Check OAuth app settings in GitHub
- Verify callback URL is correct
- Try incognito/private browsing
- Clear browser cache

### **"Post published but not showing on site"**
1. Check GitHub Actions tab for errors
2. Verify FTP credentials in Secrets
3. Check Hostinger FTP directory path
4. Manually run: Go to Actions → Re-run workflow

### **"Images not loading"**
- Use absolute URLs (https://...) for now
- Or upload images to Hostinger first, then reference
- Future: Setup image upload to Hostinger

### **"GitHub Actions failed"**
- Click on failed workflow → View logs
- Common issues:
  - Wrong FTP server address
  - Wrong directory path
  - FTP password changed

---

## 💡 **Alternative: Simpler Manual Workflow**

If GitHub Actions seems complex, here's a simpler approach:

### **Write Posts Anywhere:**

1. **Use Prose.io** (free web editor)
   - Go to `prose.io`
   - Connect GitHub
   - Edit files in `_posts/`
   - Beautiful interface, no setup

2. **Or use GitHub directly**
   - Edit markdown files on GitHub.com
   - Web interface is simple

3. **Build locally once per week:**
   ```
   Download repo → Run build-blog.js → Upload to Hostinger
   ```

**Time:** 5 extra minutes per week (batch all posts)

---

## 📊 **Your Publishing Workflow**

### **Fully Automated (Recommended):**
```
Write in CMS/GitHub → Commit → Auto-builds → Auto-deploys → Live!
```
**Time:** 10 mins writing + 2 mins auto-deploy

### **Semi-Automated:**
```
Write in GitHub → Commit → Download → Run build → FTP upload
```
**Time:** 10 mins writing + 5 mins manual deploy

### **Comparison:**

| Task | Automated | Manual |
|------|-----------|--------|
| Write post | 10 mins | 10 mins |
| Build JSON | Auto (0 mins) | 2 mins |
| Deploy | Auto (0 mins) | 3 mins |
| **Total** | **10 mins** | **15 mins** |

Even manual is way faster than copying HTML!

---

## 🎯 **Recommended Tools**

### **Free Editing Options:**
1. **CMS Admin** (`yoursite.com/admin`) - Best UX, needs OAuth setup
2. **Prose.io** - Simple, works immediately
3. **GitHub Web** - Always works, basic interface
4. **VS Code** - For power users

### **FTP Clients (if going manual):**
1. **FileZilla** - Free, popular
2. **Cyberduck** - Mac-friendly
3. **WinSCP** - Windows-specific
4. **Hostinger File Manager** - Built-in, browser-based

---

## 💰 **Cost Breakdown**

| Service | Cost | Your Usage |
|---------|------|------------|
| **Hostinger** | Your existing plan | Same |
| **GitHub** | $0/mo | Free public repo |
| **GitHub Actions** | $0/mo | 2,000 mins/month free (you'll use ~30) |
| **Decap CMS** | $0/mo | Open source |
| **OAuth** | $0/mo | GitHub provides free |

**Total Extra Cost: $0.00** 🎉

---

## 🚀 **Quick Start Checklist**

- [ ] Create GitHub account (if needed)
- [ ] Create repository with website files
- [ ] Update `admin/config.yml` with repo name
- [ ] Get Hostinger FTP credentials
- [ ] Add FTP secrets to GitHub
- [ ] Setup GitHub OAuth app (optional, for CMS admin)
- [ ] Push first test post
- [ ] Verify auto-deployment works
- [ ] Start blogging! 🎊

---

## 📞 **Need Help?**

### **Common Questions:**

**Q: Do I need Netlify at all?**  
A: No! Everything runs on GitHub + Hostinger. Netlify is optional.

**Q: What if I already have files on Hostinger?**  
A: GitHub Actions will only update files that changed. Your other files stay untouched.

**Q: Can I edit posts after publishing?**  
A: Yes! Edit the markdown file in GitHub, commit, and it auto-updates.

**Q: What about images?**  
A: Use external URLs (Unsplash, Imgur) or upload to Hostinger's `/images/uploads/` folder.

**Q: Can multiple people write posts?**  
A: Yes! Give them GitHub access to the repo or use the CMS admin.

---

## 🎉 **You're All Set!**

Your Hostinger-compatible blog CMS is ready. Choose your workflow:

**🏆 Best: GitHub Actions Auto-Deploy**  
- Setup once, forget forever
- Write → Commit → Auto-live

**👍 Good: Manual Deploy**  
- More control
- Run build → FTP upload weekly

Both are **infinitely better** than manual HTML! 🚀

Start by creating your GitHub repo and adding your first post!

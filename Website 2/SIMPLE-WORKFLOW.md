# 📝 Simple Blog Workflow for Hostinger (No Automation)

If you prefer to skip GitHub Actions and maintain manual control, here's the **simplest possible workflow**.

---

## 🎯 **Your 3-Step Posting Process**

### **Step 1: Write Post in GitHub** (10 minutes)

1. Go to your GitHub repository
2. Navigate to `_posts/` folder
3. Click **"Add file"** → **"Create new file"**
4. Name it: `2025-01-20-your-post-title.md`

5. Paste this template:
```markdown
---
title: "Your Awesome Post Title"
date: 2025-01-20T10:00:00.000Z
category: "AI Chatbots"
image: "https://images.unsplash.com/photo-XXXXX?w=800"
excerpt: "A short description for the blog card."
author: "RPE Solutions Team"
readTime: "5 min read"
description: "SEO description for Google"
tags: ["AI", "Business"]
featured: false
---

## Your First Heading

Write your content here...

- Bullet points
- **Bold text**
- *Italic text*

### Subheading

More content...
```

6. Replace with your actual content
7. Click **"Commit new file"**

---

### **Step 2: Build JSON Files** (30 seconds)

**Option A: Online (No Software Needed!)**

Use **GitHub Codespaces** (free 60 hours/month):

1. In your GitHub repo → Click **Code** → **Codespaces** → **Create codespace**
2. Terminal opens automatically
3. Run: `node build-blog.js`
4. Files created in `_data/` folder
5. Commit changes: 
   ```bash
   git add _data/
   git commit -m "Update blog data"
   git push
   ```
6. Close codespace

**Option B: Local (If You Have Node.js)**

1. Clone/download your repo
2. Open terminal in folder
3. Run: `node build-blog.js`
4. Upload to Hostinger

---

### **Step 3: Upload to Hostinger** (2 minutes)

**Option A: Hostinger File Manager** (Easiest)

1. Login to Hostinger
2. Go to **File Manager**
3. Navigate to `/public_html/`
4. Upload these files:
   - `_data/blog.json` (updated)
   - `_data/YOUR-NEW-POST.json` (new)
5. Done! Check your blog.

**Option B: FTP Client (FileZilla)**

1. Connect to Hostinger FTP
2. Drag & drop updated files
3. Overwrite when prompted
4. Done!

---

## 📅 **Weekly Batch Workflow**

If you write multiple posts, batch the process:

### **Monday: Write 3 Posts**
- Create 3 markdown files in GitHub
- Commit all at once

### **Friday: Build & Deploy**
- Run build script once (generates all 3)
- Upload `_data/` folder to Hostinger
- All 3 posts go live together

**Time:** 30 mins writing + 5 mins deploying = **35 mins for 3 posts**

---

## 🚀 **Even Simpler: Pre-Built JSON**

Skip the build step entirely!

### **Manual JSON Method:**

Instead of markdown, just update `_data/blog.json` directly:

1. Go to GitHub → `_data/blog.json`
2. Click **Edit**
3. Add your new post to the array:

```json
{
  "posts": [
    {
      "id": 3,
      "slug": "2025-01-20-your-new-post",
      "title": "Your New Post Title",
      "excerpt": "Short description...",
      "category": "AI Chatbots",
      "date": "Jan 20, 2025",
      "readTime": "5 min read",
      "image": "https://...",
      "author": "RPE Solutions Team",
      "content": "## Your heading\n\nYour content with \\n for line breaks...",
      "link": "post.html?slug=2025-01-20-your-new-post"
    }
  ]
}
```

4. Save → Upload to Hostinger
5. Done!

**Pro:** No build script needed  
**Con:** Manual JSON editing (but still faster than HTML)

---

## 🎨 **Image Hosting Options**

### **Free Image Hosts:**

1. **Imgur.com** - Upload, copy link, done
2. **Unsplash.com** - Professional stock photos
3. **CloudFlare R2** - 10GB free
4. **GitHub itself** - Store in `images/uploads/` in repo

### **Or Use Hostinger:**
1. Upload to `/public_html/images/uploads/`
2. Reference as `/images/uploads/filename.jpg`

---

## 📈 **Scaling Up Later**

Start simple, automate when needed:

### **Week 1-4: Manual workflow**
- Get comfortable with process
- Write a few posts
- See what works

### **Month 2: Add automation**
- Setup GitHub Actions
- Enable auto-deploy
- Save time as volume grows

### **Month 6: Consider CMS admin**
- Setup OAuth for dashboard
- Invite team members
- Professional workflow

---

## ✅ **What You Have Now**

- ✅ Markdown-based blog posts
- ✅ Beautiful frontend design
- ✅ Dynamic loading system
- ✅ Search & filter working
- ✅ Social sharing
- ✅ Reading progress bars
- ✅ Related posts
- ✅ Mobile optimized

**Missing:** Just the deployment automation (optional)

---

## 🎊 **Your Simple Workflow**

```
1. Write markdown post in GitHub (or text editor)
2. Run: node build-blog.js (or use Codespaces)
3. Upload _data/ folder to Hostinger
4. New post is live!
```

**Time per post:** 15 minutes  
**Cost:** $0  
**Complexity:** Low  

**Start writing your first post now!** 🚀

---

## 💡 **Pro Tip: Batch Your Deploys**

Write 3-4 posts during the week, then:
- Build all at once (Friday)
- One FTP upload session
- All posts go live together

**Saves:** Even more time with batching!

This is perfect for Hostinger hosting while keeping everything free and simple. 🎯

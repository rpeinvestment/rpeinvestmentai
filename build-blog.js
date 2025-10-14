// Minimal blog builder: _posts/*.md -> _data/*.json + _data/blog.json
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(process.cwd(), '_posts');
const DATA_DIR = path.join(process.cwd(), '_data');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function toSlug(filename) {
  return filename.replace(/\.md$/i, '');
}

function parseFrontMatter(source) {
  const start = source.indexOf('---');
  if (start !== 0) return { data: {}, content: source.trim() };
  const end = source.indexOf('---', 3);
  if (end === -1) return { data: {}, content: source.trim() };
  const raw = source.slice(3, end).trim();
  const content = source.slice(end + 3).trim();
  const data = {};
  raw.split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key === 'tags' && value.startsWith('[')) {
      try { data[key] = JSON.parse(value); } catch { data[key] = []; }
    } else {
      data[key] = value;
    }
  });
  return { data, content };
}

function readMarkdownPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR)
    .filter(f => f.toLowerCase().endsWith('.md'))
    .map(filename => {
      const filePath = path.join(POSTS_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf8');
      const { data, content } = parseFrontMatter(raw);
      const slug = toSlug(filename);
      return { slug, ...data, content };
    })
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

function main() {
  ensureDir(DATA_DIR);
  const posts = readMarkdownPosts();

  const indexItems = [];
  const categories = new Set();

  posts.forEach(p => {
    const postOut = {
      slug: p.slug,
      title: p.title || '',
      date: p.date || '',
      category: p.category || 'General',
      image: p.image || '',
      excerpt: p.excerpt || '',
      author: p.author || '',
      readTime: p.readTime || '',
      tags: Array.isArray(p.tags) ? p.tags : [],
      seoDescription: p.seoDescription || '',
      content: p.content || ''
    };
    ensureDir(DATA_DIR);
    fs.writeFileSync(path.join(DATA_DIR, `${p.slug}.json`), JSON.stringify(postOut, null, 2), 'utf8');

    indexItems.push({
      slug: p.slug,
      title: postOut.title,
      date: postOut.date,
      category: postOut.category,
      image: postOut.image,
      excerpt: postOut.excerpt,
      author: postOut.author,
      readTime: postOut.readTime,
      link: `post.html?slug=${encodeURIComponent(p.slug)}`
    });
    categories.add(postOut.category);
  });

  const blogIndex = { posts: indexItems, categories: Array.from(categories).sort() };
  fs.writeFileSync(path.join(DATA_DIR, 'blog.json'), JSON.stringify(blogIndex, null, 2), 'utf8');

  console.log(`Built ${posts.length} post(s).`);
}

main();

const fs = require('fs');
const path = require('path');

// Simple front-matter parser (replaces gray-matter dependency)
function parseFrontMatter(content) {
  const lines = content.split('\n');
  if (lines[0] !== '---') return { data: {}, content };
  
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIndex = i;
      break;
    }
  }
  
  if (endIndex === -1) return { data: {}, content };
  
  const frontMatter = lines.slice(1, endIndex).join('\n');
  const bodyContent = lines.slice(endIndex + 1).join('\n');
  
  const data = {};
  frontMatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      let value = match[2];
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      // Handle arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      // Handle booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      data[match[1]] = value;
    }
  });
  
  return { data, content: bodyContent };
}

// Create directories if they don't exist
const postsDir = path.join(__dirname, '_posts');
const dataDir = path.join(__dirname, '_data');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function buildBlogData() {
  const posts = [];
  
  // Check if _posts directory exists and has files
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir);
    
    files.forEach(filename => {
      if (filename.endsWith('.md')) {
        const filePath = path.join(postsDir, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = parseFrontMatter(fileContents);
        
        // Generate slug from filename
        const slug = filename.replace('.md', '');
        
        posts.push({
          id: posts.length + 1,
          slug: slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          category: data.category || 'Uncategorized',
          date: data.date ? new Date(data.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          }) : 'No date',
          readTime: data.readTime || '5 min read',
          image: data.image || 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop',
          author: data.author || 'RPE Solutions Team',
          description: data.description || data.excerpt || '',
          tags: data.tags || [],
          featured: data.featured || false,
          content: content,
          link: `post.html?slug=${slug}`
        });
      }
    });
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Write blog data JSON
  const blogData = {
    posts: posts,
    categories: [...new Set(posts.map(post => post.category))],
    totalPosts: posts.length,
    lastUpdated: new Date().toISOString()
  };
  
  fs.writeFileSync(
    path.join(dataDir, 'blog.json'),
    JSON.stringify(blogData, null, 2)
  );
  
  console.log(`✅ Built ${posts.length} blog posts`);
  
  // Create individual post files for easier access
  posts.forEach(post => {
    fs.writeFileSync(
      path.join(dataDir, `${post.slug}.json`),
      JSON.stringify(post, null, 2)
    );
  });
  
  console.log('✅ Blog build complete!');
}

// Run the build
buildBlogData();

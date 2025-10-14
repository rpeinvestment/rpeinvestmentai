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

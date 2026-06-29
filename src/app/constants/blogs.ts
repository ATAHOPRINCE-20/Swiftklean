/// <reference types="vite/client" />

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // array of paragraphs
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

const parseFrontmatter = (fileContent: string) => {
  const lines = fileContent.split(/\r?\n/);
  const frontmatter: Record<string, string> = {};
  let bodyStartIndex = -1;

  if (lines[0]?.trim() === '---') {
    let i = 1;
    while (i < lines.length && lines[i]?.trim() !== '---') {
      const line = lines[i] || '';
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        // Remove surrounding quotes if any
        frontmatter[key] = value.replace(/^['"]|['"]$/g, '');
      }
      i++;
    }
    bodyStartIndex = i + 1;
  }

  const bodyText = bodyStartIndex !== -1 && bodyStartIndex < lines.length
    ? lines.slice(bodyStartIndex).join('\n').trim()
    : fileContent.trim();

  // Split bodyText into paragraphs
  const content = bodyText
    .split(/\r?\n\r?\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return { frontmatter, content };
};

// Eager load all markdown files from /src/blogs/ as raw strings
const modules = import.meta.glob('/src/blogs/*.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;

const rawBlogs: BlogPost[] = Object.entries(modules).map(([filePath, moduleContent]) => {
  // Extract slug from filename (e.g. '/src/blogs/ultimate-stain-removal-guide.md' -> 'ultimate-stain-removal-guide')
  const slug = filePath.split('/').pop()?.replace('.md', '') || '';
  const rawText = moduleContent.default;
  const { frontmatter, content } = parseFrontmatter(rawText);

  return {
    slug,
    title: frontmatter.title || 'Untitled Post',
    excerpt: frontmatter.excerpt || '',
    content: content,
    category: frontmatter.category || 'General',
    date: frontmatter.date || '',
    readTime: frontmatter.readTime || '3 min read',
    image: frontmatter.image || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    author: {
      name: 'Kasolya Richard',
      avatar: 'https://res.cloudinary.com/dywusgc6j/image/upload/v1781348139/IMG_0187_iqglu8.jpg',
      role: 'C.E.O Swiftklean'
    }
  };
});

// Sort by date descending (latest first)
const sortedBlogs = rawBlogs.sort((a, b) => {
  const dateA = Date.parse(a.date) || 0;
  const dateB = Date.parse(b.date) || 0;
  return dateB - dateA;
});

// Enforce limit: Never display more than 6 blogs on the site
export const BLOGS = sortedBlogs.slice(0, 6);

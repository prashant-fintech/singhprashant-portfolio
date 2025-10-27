import { getAllPosts, getAllProjects } from "./contentlayer";
import { siteConfig } from "./seo";
import type { Post, Project } from ".contentlayer/generated";

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export function generateSitemap() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  
  const staticPages: SitemapEntry[] = [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const postPages: SitemapEntry[] = posts.map((post: Post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages: SitemapEntry[] = projects.map((project: Project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(project.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const allPages = [...staticPages, ...postPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}
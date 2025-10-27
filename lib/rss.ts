import { getAllPosts } from "./contentlayer";
import { siteConfig } from "./seo";
import type { Post } from ".contentlayer/generated";

interface RSSItem {
  title: string;
  description: string;
  url: string;
  date: string;
  content?: string;
}

export function generateRSS() {
  const posts = getAllPosts().slice(0, 50); // Latest 50 posts
  const items = posts.map((post: Post): RSSItem => ({
    title: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    date: new Date(post.date).toISOString(),
    content: post.body?.raw,
  }));

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name}</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.url}</link>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js</generator>
    ${items
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return rss;
}
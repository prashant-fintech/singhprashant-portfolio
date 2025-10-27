import { allPosts, allProjects } from ".contentlayer/generated";
import type { Post, Project } from ".contentlayer/generated";

export function getAllPosts(): Post[] {
  return allPosts
    .filter((post: Post) => process.env.NODE_ENV === "development" || !post.draft)
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((post: Post) => post.slug === slug);
}

export function getAllProjects(): Project[] {
  return allProjects.sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((project: Project) => project.featured === true);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project: Project) => project.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  allPosts.forEach((post: Post) => {
    post.tags?.forEach((tag: string) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post: Post) => post.tags?.includes(tag));
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): Post[] {
  const relatedPosts = getAllPosts()
    .filter((post: Post) => post.slug !== currentSlug)
    .filter((post: Post) => post.tags?.some((tag: string) => tags.includes(tag)))
    .slice(0, limit);

  if (relatedPosts.length < limit) {
    const additionalPosts = getAllPosts()
      .filter((post: Post) => post.slug !== currentSlug)
      .filter((post: Post) => !relatedPosts.includes(post))
      .slice(0, limit - relatedPosts.length);
    
    return [...relatedPosts, ...additionalPosts];
  }

  return relatedPosts;
}
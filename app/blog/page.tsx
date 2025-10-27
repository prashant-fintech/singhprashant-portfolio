import { Suspense } from "react";
import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/contentlayer";
import { PostCard } from "@/components/PostCard";
import { TagFilter } from "@/components/TagFilter";
import type { SearchParams } from "@/types";
import { generateMetadata } from "@/lib/seo";
import type { Post } from ".contentlayer/generated";

interface BlogPageProps {
  searchParams: Promise<SearchParams>;
}

export const metadata = generateMetadata({
  title: "Blog",
  description: "Articles about web development, AWS, data engineering, and modern technologies.",
  url: "/blog",
});

const POSTS_PER_PAGE = 10;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts();
  const allTags = getAllTags();
  
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const selectedTag = params.tag as string;
  
  // Filter posts by tag if specified
  const filteredPosts = selectedTag
    ? allPosts.filter((post: Post) => post.tags?.includes(selectedTag))
    : allPosts;
    
  // Pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          {totalPosts} {totalPosts === 1 ? 'post' : 'posts'}
          {selectedTag && ` tagged with "${selectedTag}"`}
        </p>
      </div>

      {/* Tag Filter */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <TagFilter tags={allTags} selectedTag={selectedTag} />
      </Suspense>

      {/* Posts Grid */}
      <div className="mt-8">
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post: Post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    const isActive = page === currentPage;
                    const href = page === 1 
                      ? selectedTag ? `/blog?tag=${selectedTag}` : '/blog'
                      : selectedTag 
                        ? `/blog?page=${page}&tag=${selectedTag}`
                        : `/blog?page=${page}`;
                        
                    return (
                      <Link
                        key={page}
                        href={href}
                        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                        }`}
                      >
                        {page}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">No posts found</h2>
            <p className="mt-2 text-muted-foreground">
              {selectedTag
                ? `No posts found with the tag "${selectedTag}".`
                : 'No posts have been published yet.'}
            </p>
            {selectedTag && (
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View all posts
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
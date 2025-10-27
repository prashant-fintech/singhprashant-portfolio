import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/contentlayer";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { formatDate, getReadingTime } from "@/lib/utils";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { MDXContent } from "@/components/MDXContent";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {};
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: ["Prashant Singh"],
    tags: post.tags,
    image: post.cover,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.body?.raw || "");
  const relatedPosts = getRelatedPosts(post.slug, post.tags || [], 3);

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime.text}</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
        
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium hover:bg-muted/80 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cover Image */}
      {post.cover && (
        <div className="mb-8">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
        <MDXContent code={post.body?.code || ""} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border/40 pt-12">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
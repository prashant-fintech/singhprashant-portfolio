import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { formatDate, getReadingTime } from "@/lib/utils";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
    cover?: string;
    body?: { raw: string };
  };
}

export function PostCard({ post }: PostCardProps) {
  const readingTime = post.body ? getReadingTime(post.body.raw) : null;

  return (
    <article className="group relative flex flex-col space-y-2">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.cover && (
          <div className="aspect-video overflow-hidden rounded-lg border border-border/50">
            <img
              src={post.cover}
              alt={post.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {readingTime && (
              <>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{readingTime.text}</span>
              </>
            )}
          </div>
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground">{post.excerpt}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-muted px-2 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
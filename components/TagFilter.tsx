"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selectedTag?: string;
}

export function TagFilter({ tags, selectedTag }: TagFilterProps) {

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          !selectedTag
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        )}
      >
        All
      </Link>
      {tags.map((tag) => {
        const isSelected = selectedTag === tag;
        return (
          <Link
            key={tag}
            href={`/blog?tag=${encodeURIComponent(tag)}`}
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isSelected
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {tag}
          </Link>
        );
      })}
    </div>
  );
}
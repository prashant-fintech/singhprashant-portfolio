import Link from "next/link";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
    cover?: string;
    demo?: string;
    repo?: string;
    featured?: boolean;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col space-y-4 rounded-lg border border-border/50 p-6 hover:border-border transition-colors">
      {project.cover && (
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={project.date}>{formatDate(project.date)}</time>
        </div>
        
        <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h2>
        
        <p className="text-muted-foreground">{project.excerpt}</p>
        
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
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
      
      <div className="flex items-center gap-2">
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Link>
        )}
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Github className="h-4 w-4" />
            Code
          </Link>
        )}
      </div>
    </article>
  );
}
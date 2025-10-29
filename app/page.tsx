import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { getAllPosts, getFeaturedProjects } from "@/lib/contentlayer";
import { PostCard } from "@/components/PostCard";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Prashant Singh
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Risk Data Engineer & Quantitative Technologist with 10+ years in banking, 
            fintech, and data engineering. I build cloud-native risk analytics systems 
            and automated financial data pipelines using Python, Airflow, PySpark, and AWS.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/prashant-fintech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/prashant-singh-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@singhprashant.dev"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View all projects
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            View all posts
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="rounded-lg bg-muted/50 p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Looking for expertise in risk analytics, quantitative finance, or data engineering?
            Let&apos;s discuss how I can help scale your financial technology solutions.
          </p>
          <div className="mt-6">
            <Link
              href="mailto:hello@singhprashant.dev"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

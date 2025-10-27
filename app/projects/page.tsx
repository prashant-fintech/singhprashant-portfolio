import { getAllProjects } from "@/lib/contentlayer";
import { ProjectCard } from "@/components/ProjectCard";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Projects",
  description: "A showcase of my latest projects including web applications, data pipelines, and open-source contributions.",
  url: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Risk analytics platforms, financial data systems, and quantitative solutions I&apos;ve built 
          for banking and fintech organizations.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold">Portfolio Coming Soon</h2>
          <p className="mt-2 text-muted-foreground">
            I&apos;m currently documenting my risk analytics and fintech projects. 
            Many involve proprietary systems, so I&apos;m preparing case studies that highlight 
            the technical architecture without sensitive details.
          </p>
        </div>
      )}
    </div>
  );
}
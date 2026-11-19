import { ArrowUpRight } from "lucide-react";
import { portfolioData, type Project } from "@/data/portfolio";
import { ProjectHoverPreview } from "./ProjectHoverPreview";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <li className="border-t border-border py-5">
      <article id={project.id} data-project-preview={project.previewImage}>
        <h3 className="font-serif text-2xl leading-tight">{project.title}</h3>
        <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{project.role}</span>
          {project.badge && <span className="font-medium">{project.badge}</span>}
        </p>
        <p className="mt-3 max-w-[66ch] text-sm leading-relaxed sm:text-base">{project.description}</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{project.tags.join(" · ")}</p>
        <div className="mt-2 flex flex-wrap gap-x-5">
          {project.url && (
            <a href={project.url} aria-label={`Live demo for ${project.title}`} className="inline-flex min-h-10 items-center gap-1 text-sm font-medium underline underline-offset-4">
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} aria-label={`Source code for ${project.title}`} className="inline-flex min-h-10 items-center gap-1 text-sm font-medium underline underline-offset-4">
              Source code <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </li>
  );
}

export function WorkSection() {
  const featured = portfolioData.projects.filter((project) => project.featured);
  const additional = portfolioData.projects.filter((project) => !project.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="pt-12 sm:pt-16">
      <h2 id="work-title" className="mb-5 font-serif text-[2rem] leading-none sm:text-[2.25rem]">
        Selected projects
      </h2>
      <ul>
        {featured.map((project) => <ProjectEntry key={project.title} project={project} />)}
      </ul>
      <details className="border-y border-border">
        <summary className="cursor-pointer py-4 text-sm font-medium hover:underline">More projects</summary>
        <ul>
          {additional.map((project) => <ProjectEntry key={project.title} project={project} />)}
        </ul>
      </details>
      <ProjectHoverPreview />
    </section>
  );
}

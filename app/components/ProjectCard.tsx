import Link from "next/link";
import type { Project } from "../content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={project.href} id={project.slug}>
      <div className="project-number">{project.accent}</div>
      <p className="mono-meta">{project.period}</p>
      <h3>{project.shortTitle}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <span className="card-link">View project →</span>
    </Link>
  );
}

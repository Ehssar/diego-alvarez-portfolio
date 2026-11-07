import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const projectDetails = [
  {
    id: "boardwhisperer",
    number: "01",
    title: "BoardWhisperer",
    subtitle: "Mixed-Reality & AI PCB Component Identification",
    period: "Jan 2026 — Present",
    summary: "A Meta Quest 3 application that combines computer vision, LLM-generated explanations, and mixed reality to identify and explain components on unfamiliar printed circuit boards.",
    bullets: [
      "Unity/C# capture to FastAPI/Python processing pipeline",
      "60 component instances across four PCBs and nine classes",
      "95% average confidence and 65% lower end-to-end latency",
    ],
    tags: ["Unity", "C#", "Python", "YOLO", "FastAPI"],
    href: "/research/boardwhisperer",
  },
  {
    id: "stylesync",
    number: "02",
    title: "StyleSync",
    subtitle: "Full-Stack Wardrobe & Outfit Management",
    period: "Jan 2025 — Jun 2025",
    summary: "A deployed wardrobe-management platform built by a five-person team and used by approximately 50 users.",
    bullets: [
      "Flask and PostgreSQL backend with Google OAuth",
      "User-scoped CRUD, custom tagging, search, and filtering",
      "Interactive Outfit Builder, social feed, and Cloudinary media",
    ],
    tags: ["Flask", "PostgreSQL", "JavaScript", "Cloudinary"],
  },
  {
    id: "raft",
    number: "03",
    title: "Fault-Tolerant Key/Value Store",
    subtitle: "Raft Consensus in Go",
    period: "Mar 2025 — May 2025",
    summary: "A reusable Raft implementation and linearizable key/value service supporting Put, Append, and Get operations through RPC.",
    bullets: [
      "Leader election, log replication, persistence, and conflict resolution",
      "Quorum replication through leader failures and network disruption",
      "Client retries, duplicate suppression, and concurrent state updates",
    ],
    tags: ["Go", "Raft", "RPC", "Concurrent Programming"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell shell">
        <PageIntro eyebrow="Selected work" title="Projects across AI, product engineering, and distributed systems.">
          <p>Three projects that best represent how I approach unfamiliar technical problems.</p>
        </PageIntro>

        <div className="project-detail-list">
          {projectDetails.map((project) => (
            <article className="project-detail" id={project.id} key={project.id}>
              <div className="project-detail-number">{project.number}</div>
              <div className="project-detail-main">
                <p className="mono-meta">{project.period}</p>
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href && <Link className="text-link" href={project.href}>Read the case study →</Link>}
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

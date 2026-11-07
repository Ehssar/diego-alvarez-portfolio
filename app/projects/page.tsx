import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const projectDetails = [
  {
    id: "boardwhisperer",
    title: "BoardWhisperer",
    subtitle: "Understanding unfamiliar electronics in mixed reality",
    period: "Jan 2026 — Present",
    category: "Independent research",
    description:
      "A Meta Quest prototype that captures unfamiliar printed circuit boards, identifies likely components with computer vision, and explains them through interactive mixed-reality annotations.",
    highlights: [
      "Built a Unity/C# to FastAPI/Python pipeline with YOLO detection, batched LLM enrichment, and structured JSON output.",
      "Demonstrated 60 detected component instances across four PCBs and nine component classes; selected detections averaged 95% model confidence.",
      "Reduced processing time by approximately 65%, from 45–55 to 15–20 seconds; refined the interface with feedback from around 10 evaluators.",
    ],
    tags: ["Unity", "C#", "FastAPI", "Computer vision", "Mixed reality"],
    href: "/research/boardwhisperer",
    linkLabel: "Read case study",
  },
  {
    id: "stylesync",
    title: "StyleSync",
    subtitle: "A wardrobe manager and outfit-building web application",
    period: "Jan 2025 — Jun 2025",
    category: "Full-stack · Team of five",
    description:
      "A mobile-friendly wardrobe and outfit-planning application developed with a five-person team, with approximately 50 users.",
    highlights: [
      "Built clothing-upload and filtering workflows using user-created tags stored in PostgreSQL.",
      "Developed an interactive outfit builder for arranging and saving outfits.",
      "Contributed to a social feed for sharing outfits and discovering clothing ideas.",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "JavaScript", "Bootstrap", "jQuery"],
  },
  {
    id: "raft",
    title: "Fault-Tolerant Key/Value Store",
    subtitle: "Consensus and replicated state in Go",
    period: "Mar 2025 — Apr 2025",
    category: "Distributed systems",
    description:
      "A reusable implementation of the Raft consensus protocol and a replicated key/value service, designed to preserve consistent operations through leader failures and network disruption.",
    highlights: [
      "Implemented leader election and replicated logs in Go, with a reusable Raft module.",
      "Built Put, Append, and Get operations on top of Raft using RPC.",
      "Used majority-quorum replication, client retries, and duplicate-request suppression to preserve linearizable behavior.",
    ],
    tags: ["Go", "Raft", "RPC", "Concurrency", "Fault tolerance"],
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <div className="projects-page shell">
        <p className="overline projects-eyebrow">Notebook / Projects</p>
        <div className="projects-card-list">
          {projectDetails.map((project) => (
            <article id={project.id} className="projects-card" key={project.id}>
              <div className="projects-card-top">
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <h1>{project.title}</h1>
              <p className="projects-subtitle">{project.subtitle}</p>
              <p className="projects-description">{project.description}</p>
              <ul className="projects-highlights">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="projects-card-bottom">
                <div className="projects-tech">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {project.href && (
                  <Link className="projects-read-link" href={project.href}>
                    {project.linkLabel} <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

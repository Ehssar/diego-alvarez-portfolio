export type Project = {
  slug: string;
  shortTitle: string;
  title: string;
  period: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "boardwhisperer",
    shortTitle: "BoardWhisperer",
    title: "Mixed-Reality & AI PCB Component Identification",
    period: "Jan 2026 — Present",
    description:
      "Mixed reality, computer vision, and LLM-generated explanations for unfamiliar printed circuit boards.",
    tags: ["Unity", "C#", "Python", "Computer Vision", "Mixed Reality"],
    href: "/research/boardwhisperer",
    accent: "01",
  },
  {
    slug: "stylesync",
    shortTitle: "StyleSync",
    title: "Full-Stack Wardrobe & Outfit Management",
    period: "Jan 2025 — Jun 2025",
    description:
      "A deployed wardrobe and outfit-management platform built by a five-person team and used by approximately 50 users.",
    tags: ["Flask", "PostgreSQL", "JavaScript", "REST APIs"],
    href: "/projects#stylesync",
    accent: "02",
  },
  {
    slug: "raft",
    shortTitle: "Raft Key/Value Store",
    title: "Fault-Tolerant Distributed Key/Value Store",
    period: "Mar 2025 — May 2025",
    description:
      "Raft consensus and a linearizable key/value service implemented from scratch in Go.",
    tags: ["Go", "Distributed Systems", "Raft", "RPC"],
    href: "/projects#raft",
    accent: "03",
  },
];

export const researchPosts = [
  {
    slug: "boardwhisperer",
    title: "Building BoardWhisperer: PCB Interpreter",
    summary:
      "The thought process behind developing a mixed-reality PCB interpreter. Turning interest in hardware attacks into a tool that others can use to simplify learning hardware.",
    date: "Spring 2026",
    category: "Engineering Entry",
    href: "/research/boardwhisperer",
    tags: ["computer vision", "mixed reality", "AI systems"],
  },
  {
    slug: "in-the-lab",
    title: "Independent systems experiments",
    summary:
      "Build logs, architecture notes, and honest retrospectives as the next project takes shape.",
    date: "Fall ’26",
    category: "In the lab",
    href: "/research/in-the-lab",
    tags: ["systems", "build logs", "work in progress"],
  },
];

export const tags = [
  { name: "AI systems", count: 1 },
  { name: "Computer vision", count: 1 },
  { name: "Mixed reality", count: 1 },
  { name: "Distributed systems", count: 1 },
  { name: "Cybersecurity", count: 0 },
  { name: "Developer tooling", count: 0 },
];

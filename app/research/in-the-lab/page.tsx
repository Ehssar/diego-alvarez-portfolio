import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { researchPosts } from "../../content";

const labPost = researchPosts.find((post) => post.slug === "in-the-lab");

export const metadata: Metadata = {
  title: labPost?.title ?? "In the lab",
  description: labPost?.summary,
};

export default function InTheLabPage() {
  if (!labPost) return null;

  return (
    <main>
      <SiteHeader />
      <article className="page-shell shell">
        <div className="page-intro">
          <p className="eyebrow">{labPost.category} · {labPost.date}</p>
          <h1>{labPost.title}</h1>
          <p className="page-intro-copy">{labPost.summary}</p>
          <div className="tag-row">
            {labPost.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <section className="outline-notice">
          <p className="eyebrow">Working notebook</p>
          <h2>Work in progress</h2>
          <p>
            This space is reserved for ongoing experiments, design decisions,
            measurements, and lessons from projects as they develop. Individual
            notes will appear here as they are ready to share.
          </p>
        </section>
        <Link className="text-link" href="/research">← Back to all research</Link>
      </article>
      <SiteFooter />
    </main>
  );
}

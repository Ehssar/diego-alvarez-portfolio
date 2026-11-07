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
      <article className="page-shell shell lab-page">
        <div className="lab-page-intro">
          <p className="overline">Notebook / In the lab</p>
          <h1>In the lab.</h1>
          <p>Work that has not yet become a case study.</p>
        </div>

        <section className="lab-teaser" aria-labelledby="boardwhisperer-2d">
          <p className="lab-teaser-status"><span className="status-dot" aria-hidden="true" /> Up next</p>
          <h2 id="boardwhisperer-2d">BoardWhisperer 2D</h2>
          <p className="lab-teaser-line">The headset was only the beginning.</p>
          <p className="lab-teaser-secondary">A different way to inspect the same unknown hardware. More soon.</p>
          <Link href="/research/boardwhisperer" className="lab-teaser-link">
            Where it started <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}

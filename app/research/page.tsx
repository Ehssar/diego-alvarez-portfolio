import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { researchPosts } from "../content";

export default function ResearchPage() {
  const labPost = researchPosts.find((post) => post.slug === "in-the-lab");

  return (
    <main>
      <SiteHeader />
      <div className="page-shell shell">
        <PageIntro eyebrow="Research & writing" title="Notes from building things that have to work.">
          <p>Case studies, build logs, and technical explanations focused on the choices behind the final result.</p>
        </PageIntro>

        <div className="archive-list">
          {researchPosts.map((post) => (
            <Link href={post.href} className="archive-entry" key={post.slug}>
              <div className="archive-meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <div>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <div className="tag-row">{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>

        {labPost && (
          <aside className="in-the-lab">
            <p className="eyebrow"><span className="status-dot" /> {labPost.category}</p>
            <h2>{labPost.title}</h2>
            <p>{labPost.summary}</p>
            <Link className="text-link" href={labPost.href}>Explore the lab →</Link>
          </aside>
        )}
      </div>
      <SiteFooter />
    </main>
  );
}

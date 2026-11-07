import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { researchPosts } from "../content";

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader />
      <div className="simple-page shell">
        <div className="simple-page-header">
          <p className="overline">Notebook / Writing</p>
          <h1>Writing</h1>
          <p>Project notes, research, and lessons from the workbench. Finished work and experiments share the same shelf.</p>
        </div>
        <div className="post-feed">
          {researchPosts.map(post => (
            <Link href={post.href} className="post-item" key={post.slug}>
              <div className="post-meta"><time>{post.date}</time><span>{post.category}</span></div>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <span className="post-read">Read note <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

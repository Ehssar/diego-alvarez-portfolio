import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { researchPosts } from "../content";

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader />
      <div className="simple-page shell">
        <p className="overline writing-eyebrow">Notebook / Writing</p>
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

import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { projects, researchPosts } from "./content";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="notebook-layout shell">
        <div className="notebook-main">
          <div className="notebook-intro">
            <p className="overline">A personal engineering notebook</p>
            <h1>Research, systems &amp; the things I build.</h1>
            <p>
              I am a computer science student at Princeton working across
              cybersecurity, AI systems, and distributed software. I write
              about projects, decisions, and what I learn along the way.
            </p>
          </div>

          <section className="notebook-section" id="writing">
            <div className="notebook-section-head">
              <h2>Writing</h2><Link href="/research">All writing <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="post-feed">
              {researchPosts.map(post => (
                <Link href={post.href} className="post-item" key={post.slug}>
                  <div className="post-meta"><time>{post.date}</time><span>{post.category}</span></div>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <span className="post-read">Read note <span aria-hidden="true">↗</span></span>
                </Link>
              ))}
            </div>
          </section>

          <section className="notebook-section" id="projects">
            <div className="notebook-section-head">
              <h2>Selected projects</h2><Link href="/projects">All projects <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="project-feed">
              {projects.map((project) => (
                <Link className="project-line" href={project.href} key={project.slug}>
                  <div><span className="project-line-date">{project.period}</span><h3>{project.shortTitle}</h3><p>{project.description}</p></div>
                  <span className="project-line-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

      </div>
      <SiteFooter />
    </main>
  );
}

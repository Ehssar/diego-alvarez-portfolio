import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { projects, researchPosts } from "./content";

const pagesBasePath = process.env.GITHUB_PAGES === "true" ? "/diego-alvarez-portfolio" : "";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <div className="notebook-layout shell">
        <aside className="notebook-rail" aria-label="Profile">
          <div className="rail-profile">
            <div className="rail-avatar"><Image src={`${pagesBasePath}/profile.webp`} alt="Portrait of Diego Alvarez Rodriguez" width={64} height={64} priority /></div>
            <p className="rail-name">Diego Alvarez Rodriguez</p>
            <p className="rail-subline">Software engineering<br />&amp; security research</p>
          </div>
          <div className="rail-links">
            <Link href="/about">About me <span aria-hidden="true">↗</span></Link>
            <a href="https://github.com/Ehssar" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/in/dar-pu27/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </aside>

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

        <aside className="notebook-side" aria-label="Background">
          <div className="side-section">
            <p className="side-heading">Currently</p>
            <p>Princeton University<br />B.S.E. Computer Science, 2027</p>
          </div>
          <div className="side-section">
            <p className="side-heading">Interests</p>
            <p>Vulnerability research<br />Hardware security<br />AI-assisted tooling<br />Distributed systems</p>
          </div>
          <div className="side-section">
            <p className="side-heading">Elsewhere</p>
            <Link href="/resume">Résumé ↗</Link>
          </div>
        </aside>
      </div>
      <SiteFooter />
    </main>
  );
}

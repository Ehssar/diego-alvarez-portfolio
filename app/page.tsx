import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { projects, researchPosts } from "./content";

export default function Home() {
  const featured = projects[0];

  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Princeton Computer Science · B.S.E. ’27</p>
          <h1>I build systems that make complex technology easier to understand.</h1>
          <p className="hero-intro">
            Software engineer exploring cybersecurity, AI/ML systems,
            distributed systems, and developer tooling.
          </p>

          <div className="topic-row" aria-label="Areas of focus">
            <span>Cybersecurity</span>
            <span>AI/ML Systems</span>
            <span>Distributed Systems</span>
          </div>

          <div className="action-row">
            <Link className="button button-primary" href="/research/boardwhisperer">
              Read the BoardWhisperer case study <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/projects">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="currently-building">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Currently building</strong>
              <p>New systems experiments and independent research for Fall ’26.</p>
            </div>
          </div>
        </div>

        <Link className="featured-panel" href="/research/boardwhisperer">
          <div className="featured-visual" aria-hidden="true" />
          <div className="featured-content">
            <p className="eyebrow">Featured project · 01</p>
            <h2>{featured.shortTitle}</h2>
            <p>{featured.description}</p>
            <div className="metric-row">
              <span><strong>95%</strong> avg. confidence</span>
              <span><strong>65%</strong> less latency</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="section shell" id="research">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Research & writing</p>
            <h2>Notes from the workbench.</h2>
          </div>
          <Link className="text-link" href="/research">All research →</Link>
        </div>

        <div className="research-list">
          {researchPosts.map((post) => (
            <Link className="research-row" href={post.href} key={post.slug}>
              <span className="mono-meta">{post.date}</span>
              <div>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <span className="research-category">{post.category}</span>
            </Link>
          ))}
          <div className="research-row upcoming-row">
            <span className="mono-meta">Fall ’26</span>
            <div>
              <h3>Independent systems experiments</h3>
              <p>Build logs, architecture notes, and honest retrospectives as the next project takes shape.</p>
            </div>
            <span className="research-category">In the lab</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Three ways I like to build.</h2>
          </div>
          <Link className="text-link" href="/projects">All projects →</Link>
        </div>

        <div className="project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="closing-note shell">
        <p className="eyebrow">A working notebook</p>
        <p>
          This site is where finished projects meet the decisions, tradeoffs,
          and unfinished questions behind them.
        </p>
        <Link className="text-link" href="/about">More about me →</Link>
      </section>

      <SiteFooter />
    </main>
  );
}

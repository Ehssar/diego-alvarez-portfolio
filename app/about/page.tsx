import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell shell about-page">
        <PageIntro eyebrow="About" title="I like turning research ideas into tools people can actually use.">
          <p>I’m a Princeton computer science student and software engineer working across cybersecurity, AI/ML systems, backend infrastructure, and distributed systems.</p>
        </PageIntro>

        <div className="about-grid">
          <article className="prose-block">
            <h2>Engineering</h2>
            <p>At Lockheed Martin, I designed and implemented a two-stage vulnerability-research pipeline that combines LLM-based commit screening, Code Property Graph queries, and deeper vulnerability analysis. Previously, at Qintess, I developed Angular and Java/Javalin features for an applicant-tracking platform connecting more than 2,000 companies and contractors.</p>
            <p>Outside of internships, I build projects that help me explore an idea deeply: mixed-reality interfaces, computer vision pipelines, full-stack products, and fault-tolerant distributed systems.</p>
          </article>
          <article className="prose-block">
            <h2>Beyond the code</h2>
            <p>I care about educational equity and have mentored transfer, first-generation, and low-income students through Princeton’s Transfer Student Initiative.</p>
            <p>This site is deliberately a working notebook. Finished case studies live beside experiments, lessons, and the occasional approach that did not work.</p>
          </article>
        </div>

        <div className="about-facts">
          <div><span>Current</span><strong>Software Engineering Intern (Cyber), Lockheed Martin</strong></div>
          <div><span>Education</span><strong>Princeton University · Computer Science B.S.E. ’27</strong></div>
          <div><span>Focus</span><strong>Cybersecurity · AI/ML · Distributed Systems</strong></div>
          <div><span>Languages</span><strong>English · Spanish</strong></div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function ResumePage() {
  return (
    <main>
      <SiteHeader />
      <article className="resume shell">
        <header className="resume-header">
          <p className="eyebrow">Résumé</p>
          <h1>Diego Alvarez Rodriguez</h1>
          <p>Software engineer working across cybersecurity, AI/ML systems, full-stack applications, and distributed systems.</p>
          <a className="text-link" href="https://www.linkedin.com/in/dar-pu27/" rel="noreferrer" target="_blank">LinkedIn profile ↗</a>
        </header>

        <ResumeSection title="Education">
          <ResumeItem title="Princeton University" meta="B.S.E. Computer Science · Minor in Statistics and Machine Learning · May 2027">
            <p>GPA 3.5. Coursework includes Natural Language Processing, Distributed Systems, Programming Systems, Computer Networks, Probability and Stochastic Systems, and Augmented Reality Meets AI.</p>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Experience">
          <ResumeItem title="Software Engineering Intern (Cyber) · Lockheed Martin" meta="Jun 2026 — Aug 2026">
            <ul>
              <li>Designed a two-stage vulnerability-research pipeline combining LLM screening, Joern-based slicing, and deeper analysis.</li>
              <li>Reduced irrelevant code context by 79% with Code Property Graph queries.</li>
              <li>Added Semgrep and tree-sitter fallbacks and generated evidence-backed CWE findings for researcher review.</li>
            </ul>
          </ResumeItem>
          <ResumeItem title="Software Engineering Intern · Qintess" meta="Jun 2025 — Aug 2025">
            <ul>
              <li>Developed Angular and Java/Javalin features for an applicant-tracking system connecting more than 2,000 companies and contractors.</li>
              <li>Implemented validated, JWT-authenticated workflows and integrated a modern frontend with a legacy hexagonal backend.</li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Selected projects">
          <ResumeItem title="BoardWhisperer" meta="Unity · C# · Python · FastAPI · Computer Vision">
            <p>Mixed-reality PCB component identification with 95% average confidence and a 65% reduction in end-to-end latency.</p>
          </ResumeItem>
          <ResumeItem title="StyleSync" meta="Flask · PostgreSQL · JavaScript">
            <p>Deployed wardrobe and outfit-management platform used by approximately 50 users.</p>
          </ResumeItem>
          <ResumeItem title="Fault-Tolerant Key/Value Store" meta="Go · Raft · RPC">
            <p>Raft consensus and a linearizable key/value service implemented from scratch.</p>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Technical toolkit">
          <p className="toolkit">Python · Java · Go · C/C++ · C# · JavaScript · TypeScript · SQL · Angular · FastAPI · Flask · Unity · PyTorch · PostgreSQL · Docker · Linux · Git · Joern · Semgrep</p>
        </ResumeSection>
      </article>
      <SiteFooter />
    </main>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="resume-section"><h2>{title}</h2><div>{children}</div></section>;
}

function ResumeItem({ title, meta, children }: { title: string; meta: string; children: React.ReactNode }) {
  return <div className="resume-item"><h3>{title}</h3><p className="mono-meta">{meta}</p>{children}</div>;
}

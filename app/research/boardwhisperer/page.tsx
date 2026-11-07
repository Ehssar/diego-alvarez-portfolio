import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Building BoardWhisperer: PCB Interpreter",
  description: "The thought process behind developing a mixed-reality PCB interpreter, from interest in hardware attacks to an interactive tool for learning hardware.",
};

const sections = [
  ["motivation", "Why I built it"],
  ["architecture", "How it works"],
  ["interface", "Design & tradeoffs"],
  ["results", "Results & limitations"],
  ["future", "Reflection & next steps"],
];

export default function BoardWhispererCaseStudy() {
  return (
    <main>
      <SiteHeader />
      <article className="article shell case-study">
        <header className="article-header">
          <div className="article-kicker">
            <span>Spring 2026</span><span>Engineering Entry</span>
          </div>
          <h1>Building BoardWhisperer: PCB Interpreter</h1>
          <p className="article-deck">
            The thought process behind developing a mixed-reality PCB interpreter.
            Turning interest in hardware attacks into a tool that others can use to simplify learning hardware.
          </p>
          <div className="article-tag-row">
            <span>Mixed reality</span><span>Computer vision</span>
            <span>AI systems</span><span>Unity / C#</span><span>Python / FastAPI</span>
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <p className="eyebrow">In this article</p>
            {sections.map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}
          </aside>

          <div className="article-body case-prose">
            <section id="motivation">
              <p className="section-number">01 / Motivation</p>
              <h2>A software researcher learning to read hardware.</h2>
              <p>
                Recently, I became interested in hardware attacks after watching one of my friends
                give a talk on how to use a controlled EMP burst to skip a CPU clock at the right time
                to skip a password check instruction. I was fascinated by the potential of hardware
                attacks, given that it expanded the attack surface beyond a device’s software.
                This led me to want to experiment with hardware, but one obstacle stood in my way:
                I was nowhere as familiar with PCBs as I am with software.
              </p>
              <p>
                Hardware security demands as intimate an understanding of a device as software security
                demands of code. So, I wanted to build a tool using my software skills that would help
                me and others bridge that gap. Augmented reality seemed especially promising because
                the object I wanted to understand was already in front of me. Instead of turning away
                to research every part, what if I could ask for information directly in the space where
                I was inspecting the board?
              </p>
              <p>
                That became BoardWhisperer: a prototype that captures an unfamiliar PCB, identifies
                likely components, and presents explanations as interactive annotations in mixed reality.
              </p>
              <p>
                Printed circuit boards can be dense, visually repetitive, and poorly documented. In
                repair, debugging, and reverse engineering, a schematic may be incomplete or absent.
                Identifying a component can mean reading tiny markings, searching for a datasheet,
                inferring its function, then finding the same part again on the physical board.
              </p>
              <p>
                Each switch from board to screen and back introduces another opportunity to lose
                context. The goal was not to recover a complete circuit schematic automatically.
                It was to make that exploratory first pass more approachable: show plausible component
                identities, make their locations understandable, and let the user control what
                information stays visible.
              </p>
              <p>
                Three goals shaped the prototype: interpret components in context, minimize the effort
                of switching tools, and make spatial guidance legible. The user takes a single image,
                waits for analysis, and then inspects the results as a stable session.
              </p>
              <p>
                Interactivity was essential. Every PCB is different, and a fixed arrangement of labels
                can become useless on a crowded board. Users needed to move labels, turn descriptions
                on and off, filter by component category, and restore the connection between a floating
                label and the physical region it described.
              </p>
            </section>

            <section id="architecture">
              <p className="section-number">02 / The system</p>
              <h2>From a captured board to an annotated workspace.</h2>
              <figure className="case-architecture">
                <div className="case-stage">
                  <span className="case-stage-number">Capture</span>
                  <strong>Meta Quest 3S</strong>
                  <p>Passthrough camera captures a PCB image on user input.</p>
                </div>
                <div className="case-stage-arrow" aria-hidden="true">↓</div>
                <div className="case-stage">
                  <span className="case-stage-number">Backend analysis</span>
                  <strong>FastAPI → Roboflow → LLM</strong>
                  <p>Detect likely components, enrich their descriptions, and return information in JSON.</p>
                  <div className="case-stage-pipeline"><span>Computer vision</span><span>LLM enrichment</span></div>
                </div>
                <div className="case-stage-arrow" aria-hidden="true">↓</div>
                <div className="case-stage">
                  <span className="case-stage-number">Presentation</span>
                  <strong>Unity mixed-reality interface</strong>
                  <p>World-space labels, highlighted board regions, category filters, and adjustable Details Mode.</p>
                </div>
                <figcaption>
                  Simplified architecture based on Figure 1 of the BoardWhisperer paper: capture,
                  backend analysis, and interactive presentation.
                </figcaption>
              </figure>
              <p>
                The Unity frontend uses Meta XR passthrough to capture an image and sends it to a
                Python FastAPI service. The service passes the image to Roboflow&apos;s{" "}
                <code>printed-circuit-board/3</code> detector, which returns candidate components
                and locations. The detections are enriched with short, functional explanations
                using <code>gpt-5.4-mini</code>.
              </p>
              <p>
                The backend then returns a JSON payload to the Quest 3S, including component types,
                bounding boxes, and explanatory fields. Unity on the Quest 3S remains responsible for
                presenting where labels appear, what it shows, and how it responds to interaction.
              </p>
            </section>

            <section id="interface">
              <p className="section-number">03 / Design challenges</p>
              <h2>Information is only useful when someone can navigate it.</h2>
              <p>
                The hardest part of BoardWhisperer was designing an interface that was accessible,
                informative, and easy to understand. Physical components are small and close together,
                while readable text cards take up much more visual space. Models return dozens of
                component label cards, so placing all of those label cards around the already tiny
                components was not going to cut it.
              </p>
              <p>
                Instead, I introduced a Board Overlay: a captured image of the PCB with boxes marking
                detected regions. Those boxes help users connect world-space labels back to specific
                parts. The interaction states are color-coded: red for the default region, yellow when
                its label is pointed at, and orange when the label is grabbed. Feedback from people
                who tried the prototype, especially my friend Nate Scott in electrical engineering,
                influenced these decisions. A common theme in their feedback was the need to tie each
                label back to the component it came from.
              </p>
              <p>
                The interface also offers category filtering, a Details Mode for expanding explanations,
                and controls to hide panels or labels when they obstruct the board. Labels can be
                repositioned to suit the user&apos;s physical workspace. These were not decorative
                features. Each addressed a specific way that otherwise useful information could
                become visual clutter.
              </p>
              <blockquote>
                <strong>Takeaway:</strong> Engineering does not end when the information is computed.
                It ends when that information actually helps someone solve the problem.
              </blockquote>
              <p>
                There was also a practical latency tradeoff. Richer prompts and more context can
                improve explanations but increase the wait between capturing the board and seeing
                results. By reducing response payloads and restructuring enrichment into batched and
                parallel work, I reduced end-to-end processing from roughly 45–55 seconds to
                15–20 seconds in the project&apos;s reported prototype tests.
              </p>
              <p>
                Interaction had its own engineering complexity. In Unity&apos;s mixed-reality
                interaction system, grabbing cards and selecting buttons by ray could interfere
                with each other. Making an interface movable and clickable simultaneously required
                careful handling of those competing behaviors.
              </p>
              <p>
                <a className="text-link" href="https://drive.google.com/file/d/1sA9pmHi73k6tGu383e3HEnczwdUjEri3/view?usp=sharing" target="_blank" rel="noreferrer">
                  Watch the prototype demonstration ↗
                </a>
              </p>
            </section>

            <section id="results">
              <p className="section-number">04 / Results and limits</p>
              <div className="case-results">
                <div><strong>60</strong><span>reported component instances</span></div>
                <div><strong>4</strong><span>physical PCBs tested</span></div>
                <div><strong>9</strong><span>component classes</span></div>
                <div><strong>15–20s</strong><span>reported end-to-end latency after optimization</span></div>
              </div>
              <p>
                Across four physical PCBs, the prototype demonstrated detection and interpretation
                of 60 component instances spanning nine classes. The reported average detector
                confidence for selected detections was approximately 95%. This is a confidence score,
                <em> not</em> a measurement of 95% accuracy or recall. Missed components and mistaken
                detections remain important limitations.
              </p>
              <p>
                Approximately ten people tried the prototype. Their design feedback helped refine
                the visual interactions, especially the color-coded feedback for pointing, selecting,
                and moving labels. This was iterative feedback, not a controlled study establishing
                faster inspection or improved learning outcomes.
              </p>
              <p>
                The biggest limitation eventually became the mixed-reality hardware itself. While
                preparing my final presentation, I took a photo of a PCB on my iPhone 15 and
                immediately noticed how much sharper the image was compared to the Quest 3S’s picture.
                This could explain the repeated instances of the Roboflow model not identifying some
                of the smaller components that might be better visible with an iPhone camera.
              </p>
              <p>
                Capture conditions are part of the user experience: bright, even lighting and an
                overhead viewpoint consistently helped. Oblique angles, tightly packed boards, and
                low-quality captures could prevent a part from being detected at all. The
                headset&apos;s interaction space also constrained how intuitive I could make an
                information-dense application. Small targets, spatial labels, and hand or controller
                interactions introduced friction that familiar 2D interfaces do not have in quite
                the same way.
              </p>
            </section>

            <section id="future">
              <p className="section-number">05 / Looking back</p>
              <h2>Rethinking the medium.</h2>
              <p>
                If I had another month, my first move would not be to add more features to the
                headset. I would experiment with a 2D web application, closer in interaction style
                to tools such as EasyEDA or CircuitLab.
              </p>
              <p>
                Users could photograph a PCB with a phone, upload a clearer image, and investigate
                detections in an interface with familiar zooming, selection, panels, and editable
                labels. This would trade away the striking in-situ quality of mixed reality in
                exchange for easier navigation and potentially better input images.
              </p>
              <p>
                Beyond the interface, stronger detection models, component marking recognition,
                source-linked explanations, and clearer uncertainty displays would make the tool
                more useful for serious hardware investigation.
              </p>
              <p>
                I started BoardWhisperer hoping to make unfamiliar hardware more understandable
                to someone who knew software far better than electronics. I finished with a working
                capture-to-annotation pipeline and a stronger appreciation for everything that
                happens after an AI system generates an answer.
              </p>
              <p>
                The interface is part of the reasoning process: it decides whether a user can find
                the right component, understand an uncertain prediction, and keep their attention
                on the work in front of them. BoardWhisperer demonstrated one way to make that
                possible in AR. It also taught me to question whether the most technically
                interesting medium is always the most useful one.
              </p>
            </section>

            <footer className="article-end">
              <p className="eyebrow">Project &amp; supporting material</p>
              <p>BoardWhisperer was developed as independent work at Princeton University, advised by Parastoo Abtahi. The prototype, research paper, and demo document its design and limitations.</p>
              <div className="case-links">
                <a className="text-link" href="https://github.com/Ehssar/PCBInterpreter" target="_blank" rel="noreferrer">Source code ↗</a>
                <a className="text-link" href="https://drive.google.com/file/d/1sA9pmHi73k6tGu383e3HEnczwdUjEri3/view?usp=sharing" target="_blank" rel="noreferrer">Demo video ↗</a>
                <Link className="text-link" href="/research">All research →</Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Building BoardWhisperer",
  description: "An engineering case study of BoardWhisperer: a mixed-reality PCB interpreter, and what building it taught me about making AI useful.",
};

const sections = [
  ["motivation", "Why I built it"],
  ["problem", "The problem"],
  ["approach", "The approach"],
  ["architecture", "Architecture"],
  ["interface", "Engineering the interface"],
  ["tradeoffs", "Hard tradeoffs"],
  ["walkthrough", "The experience"],
  ["results", "Results & evaluation"],
  ["limitations", "Limitations"],
  ["future", "What I would build next"],
  ["takeaways", "What I learned"],
];

export default function BoardWhispererCaseStudy() {
  return (
    <main>
      <SiteHeader />
      <article className="article shell case-study">
        <header className="article-header">
          <div className="article-kicker">
            <span>Independent work · Princeton University</span>
            <span>Spring 2026</span>
            <span>Engineering case study</span>
          </div>
          <h1>Building BoardWhisperer</h1>
          <p className="article-deck">
            I wanted to understand the hardware beneath cybersecurity research.
            I built a mixed-reality PCB interpreter—and learned that useful AI
            is as much an interface problem as a computation problem.
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
              <h2>Learning to read what is in front of me.</h2>
              <p>
                My background is in software and cybersecurity research. Lately,
                I had become interested in hardware attacks, but there was a
                fundamental gap in my understanding: I could reason about
                software with some familiarity, yet I did not know how to look
                at a printed circuit board and understand what its components
                were doing.
              </p>
              <p>
                Hardware security demands a similarly intimate understanding
                of a device to the one software security demands of code. A PCB
                is not just a collection of anonymous parts; it is a physical
                record of a system&apos;s design. Without experience reading one,
                even knowing where to begin can be difficult.
              </p>
              <p>
                I wanted to build a tool that would help me—and other people
                crossing into hardware work—bridge that gap. Augmented reality
                seemed especially promising because the object I wanted to
                understand was already in front of me. Instead of turning away
                to research every part, what if I could ask for information
                directly in the space where I was inspecting the board?
              </p>
              <p>
                That became BoardWhisperer: a prototype that captures an
                unfamiliar PCB, identifies likely components, and presents
                explanations as interactive annotations in mixed reality.
              </p>
            </section>

            <section id="problem">
              <p className="section-number">02 / The problem</p>
              <h2>Finding information is only half the work.</h2>
              <p>
                Printed circuit boards can be dense, visually repetitive, and
                poorly documented. In repair, debugging, and reverse engineering,
                a schematic may be incomplete or absent. Identifying a
                component can mean reading tiny markings, searching for a
                datasheet, inferring its function, then finding the same part
                again on the physical board.
              </p>
              <p>
                Each switch from board to screen and back introduces another
                opportunity to lose context. The goal was not to recover a
                complete circuit schematic automatically. It was to make that
                exploratory first pass more approachable: show plausible
                component identities, make their locations understandable,
                and let the user control what information stays visible.
              </p>
            </section>

            <section id="approach">
              <p className="section-number">03 / Design approach</p>
              <h2>Keep the board at the center.</h2>
              <p>
                Three goals shaped the prototype: interpret components in
                context, minimize the effort of switching tools, and make
                spatial guidance legible. I deliberately chose a
                capture-and-analyze workflow rather than promising continuous
                real-time recognition. The user takes a single image, waits
                for analysis, and then inspects the results as a stable session.
              </p>
              <p>
                Interactivity was essential. Every PCB is different, and a
                fixed arrangement of labels can become useless on a crowded
                board. Users needed to move labels, turn descriptions on and
                off, filter by component category, and restore the connection
                between a floating label and the physical region it described.
              </p>
            </section>

            <section id="architecture">
              <p className="section-number">04 / System architecture</p>
              <h2>From a captured board to an annotated workspace.</h2>
              <figure className="case-architecture">
                <div className="case-stage">
                  <span className="case-stage-number">01 / Capture</span>
                  <strong>Meta Quest 3S</strong>
                  <p>Passthrough camera captures a PCB image on user input.</p>
                </div>
                <div className="case-stage-arrow" aria-hidden="true">↓</div>
                <div className="case-stage">
                  <span className="case-stage-number">02 / Backend analysis</span>
                  <strong>FastAPI → Roboflow → LLM</strong>
                  <p>Detect likely components, enrich their descriptions, and return structured JSON.</p>
                  <div className="case-stage-pipeline"><span>Computer vision</span><span>LLM enrichment</span><span>JSON</span></div>
                </div>
                <div className="case-stage-arrow" aria-hidden="true">↓</div>
                <div className="case-stage">
                  <span className="case-stage-number">03 / Presentation</span>
                  <strong>Unity mixed-reality interface</strong>
                  <p>World-space labels, highlighted board regions, category filters, and adjustable detail.</p>
                </div>
                <figcaption>Architecture based on Figure 1 of the BoardWhisperer paper: capture, backend analysis, and interactive presentation.</figcaption>
              </figure>
              <p>
                The Unity frontend uses Meta XR passthrough to capture an
                image and sends it to a Python FastAPI service. The service
                passes the image to Roboflow&apos;s
                <code> printed-circuit-board/3 </code>
                detector, which returns candidate components and locations.
                The detections are enriched with short, functional
                explanations using <code>gpt-5.4-mini</code>.
              </p>
              <p>
                The backend then returns compact structured JSON, including
                component types, bounding boxes, and explanatory fields.
                Unity remains responsible for presentation—where a label
                appears, what it shows, and how it responds to interaction.
                That boundary mattered: recognition, explanation, and
                interface behavior could be changed without turning the
                entire application into one tightly coupled system.
              </p>
            </section>

            <section id="interface">
              <p className="section-number">05 / The hardest engineering problem</p>
              <h2>Information is not useful until someone can navigate it.</h2>
              <p>
                The hardest part of BoardWhisperer was not collecting
                information. It was designing an interface that was accessible,
                informative, and easy to understand. A model could return
                dozens of component predictions, but placing dozens of
                floating cards around a circuit board quickly made the view
                harder—not easier—to read.
              </p>
              <p>
                My first challenge was choosing where labels belonged.
                Physical components are small and close together, while
                readable text cards take up much more space. Simply putting
                labels near their estimated locations was not enough to
                preserve a clear correspondence between the two.
              </p>
              <p>
                I introduced a Board Overlay: a captured image of the PCB
                with boxes marking detected regions. Those boxes help users
                connect world-space labels back to specific parts. The
                interaction states are color-coded: red for the default
                region, yellow when its label is pointed at, and orange
                when the label is grabbed. Feedback from people who tried
                the prototype influenced these decisions.
              </p>
              <p>
                The interface also offers category filtering, a Details
                Mode for expanding explanations, and controls to hide
                panels or labels when they obstruct the board. Labels can
                be repositioned to suit the user&apos;s physical workspace.
                These were not decorative features. Each addressed a
                specific way that otherwise useful information could
                become visual clutter.
              </p>
              <blockquote>
                The lesson was that engineering does not end when the
                information is computed. It ends when that information
                actually helps someone solve the problem.
              </blockquote>
            </section>

            <section id="tradeoffs">
              <p className="section-number">06 / Tradeoffs</p>
              <h2>Speed, recognition, and legibility constrain each other.</h2>
              <p>
                The computer vision model determines what gets passed to
                the language model. If a component is missed, no amount of
                downstream explanation will make it appear. If a component
                is misidentified, a fluent explanation can make an uncertain
                prediction sound more convincing than it is. BoardWhisperer
                therefore provides guidance for inspection, not authoritative
                verification or electrical connectivity analysis.
              </p>
              <p>
                There was also a practical latency tradeoff. Richer prompts
                and more context can improve explanations but increase the
                wait between capturing the board and seeing results. By
                reducing response payloads and restructuring enrichment
                into batched and parallel work, I reduced end-to-end
                processing from roughly 45–55 seconds to 15–20 seconds
                in the project&apos;s reported prototype tests.
              </p>
              <p>
                Interaction had its own engineering complexity. In Unity&apos;s
                mixed-reality interaction system, grabbing cards and
                selecting buttons by ray could interfere with each other.
                Making an interface movable and clickable simultaneously
                required careful handling of those competing behaviors.
              </p>
            </section>

            <section id="walkthrough">
              <p className="section-number">07 / The experience</p>
              <h2>One inspection session, from capture to exploration.</h2>
              <ol>
                <li><strong>Frame the board.</strong> The user views a PCB through the headset and captures an image for analysis.</li>
                <li><strong>Interpret the image.</strong> The backend detects likely component regions and generates short descriptions.</li>
                <li><strong>Explore annotations.</strong> Unity places labels in world space, with a Board Overlay showing where detections came from.</li>
                <li><strong>Focus the view.</strong> The user filters categories, expands details, points to highlighted regions, and moves labels out of the way.</li>
              </ol>
              <p>
                What makes this interaction different from a static labeled
                picture is the ability to adapt the display while inspecting.
                The most relevant information changes with the board and
                with the question the user is asking.
              </p>
              <p><a className="text-link" href="https://drive.google.com/file/d/1sA9pmHi73k6tGu383e3HEnczwdUjEri3/view?usp=sharing" target="_blank" rel="noreferrer">Watch the prototype demonstration ↗</a></p>
            </section>

            <section id="results">
              <p className="section-number">08 / Results & evaluation</p>
              <h2>A working prototype, not a solved recognition problem.</h2>
              <div className="case-results">
                <div><strong>60</strong><span>reported component instances</span></div>
                <div><strong>4</strong><span>physical PCBs tested</span></div>
                <div><strong>9</strong><span>component classes</span></div>
                <div><strong>15–20s</strong><span>reported end-to-end latency after optimization</span></div>
              </div>
              <p>
                Across four physical PCBs, the prototype demonstrated
                detection and interpretation of 60 component instances
                spanning nine classes. The reported average detector
                confidence for selected detections was approximately 95%.
                This is a confidence score, <em>not</em> a measurement of
                95% accuracy or recall. Missed components and mistaken
                detections remain important limitations.
              </p>
              <p>
                Approximately ten people tried the prototype. Their
                design feedback helped refine the visual interactions,
                especially the color-coded feedback for pointing,
                selecting, and moving labels. This was useful formative
                feedback; it was not a controlled study establishing
                faster inspection or improved learning outcomes.
              </p>
            </section>

            <section id="limitations">
              <p className="section-number">09 / Limitations</p>
              <h2>The headset became the bottleneck.</h2>
              <p>
                The biggest limitation eventually became the mixed-reality
                hardware itself. While preparing a photograph for my
                final presentation, I noticed how much sharper a phone
                image looked compared with what I could capture from
                the Quest 3S. For a pipeline that depends on identifying
                tiny PCB components, that difference matters.
              </p>
              <p>
                Capture conditions are part of the user experience:
                bright, even lighting and an overhead viewpoint
                consistently helped. Oblique angles, tightly packed
                components, and low-quality captures could prevent
                a part from being detected at all. The headset&apos;s
                interaction space also constrained how intuitive I
                could make an information-dense application. Small
                targets, spatial labels, and hand or controller
                interactions introduced friction that familiar 2D
                interfaces do not have in quite the same way.
              </p>
            </section>

            <section id="future">
              <p className="section-number">10 / What I would build next</p>
              <h2>Keep the interpretation. Rethink the medium.</h2>
              <p>
                If I had another month, my first move would not be to
                add more features to the headset. I would experiment
                with a 2D web application, closer in interaction
                style to tools such as EasyEDA or CircuitLab.
              </p>
              <p>
                Users could photograph a PCB with a phone, upload a
                clearer image, and investigate detections in an
                interface with familiar zooming, selection, panels,
                and editable labels. This would trade away the
                striking in-situ quality of mixed reality in exchange
                for easier navigation and potentially better input
                images. It is a hypothesis I would want to test,
                not a claim that a web version is already better.
              </p>
              <p>
                Beyond the interface, stronger detection, component
                marking recognition, source-linked explanations, and
                clearer uncertainty displays would make the tool
                more useful for serious hardware investigation.
              </p>
            </section>

            <section id="takeaways">
              <p className="section-number">11 / Reflection</p>
              <h2>The real problem was understanding—not displaying AI.</h2>
              <p>
                I started BoardWhisperer hoping to make unfamiliar hardware
                more understandable to someone who knew software far
                better than electronics. I finished with a working
                capture-to-annotation pipeline and a stronger appreciation
                for everything that happens after an AI system generates
                an answer.
              </p>
              <p>
                The interface is part of the reasoning process: it decides
                whether a user can find the right component, understand
                an uncertain prediction, and keep their attention on the
                work in front of them. BoardWhisperer demonstrated
                one way to make that possible in AR. It also taught me
                to question whether the most technically interesting
                medium is always the most useful one.
              </p>
            </section>

            <footer className="article-end">
              <p className="eyebrow">Project & supporting material</p>
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

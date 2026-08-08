import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

const architecture = [
  ["01", "Capture", "Meta Quest 3S passthrough captures the unfamiliar board from the user’s point of view."],
  ["02", "Detect", "A FastAPI service sends the image through a PCB component-detection model."],
  ["03", "Enrich", "Concurrent LLM requests turn raw detections into short, readable explanations."],
  ["04", "Structure", "The backend returns component-level data as compact JSON for the Unity client."],
  ["05", "Annotate", "Unity renders labels, highlights, filters, and details around the physical board."],
];

type OutlineSectionProps = {
  id: string;
  number: string;
  label: string;
  heading: string;
  purpose: string;
  prompts: string[];
  evidence: string[];
  visual?: string;
};

function OutlineSection({ id, number, label, heading, purpose, prompts, evidence, visual }: OutlineSectionProps) {
  return (
    <section id={id} className="outline-section">
      <p className="section-number">{number} / {label}</p>
      <h2>{heading}</h2>
      <p className="outline-purpose"><strong>Purpose.</strong> {purpose}</p>
      <div className="outline-grid">
        <div className="outline-card">
          <p className="outline-label">Questions to answer</p>
          <ul>{prompts.map((prompt) => <li key={prompt}>{prompt}</li>)}</ul>
        </div>
        <div className="outline-card outline-card-muted">
          <p className="outline-label">Evidence to pull forward</p>
          <ul>{evidence.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      {visual && <p className="visual-note"><span>Suggested visual</span>{visual}</p>}
    </section>
  );
}

export default function BoardWhispererCaseStudy() {
  return (
    <main>
      <SiteHeader />
      <article className="article shell">
        <header className="article-header">
          <div className="article-kicker">
            <span>Working outline</span><span>BoardWhisperer · Aug 2026</span><span>First post</span>
          </div>
          <h1>Building BoardWhisperer</h1>
          <p className="article-deck">A comprehensive writing structure for explaining how mixed reality, computer vision, and language models turned an unfamiliar PCB into an interactive annotated workspace.</p>
          <div className="article-tag-row">
            <span>Computer vision</span><span>Mixed reality</span><span>Human–AI interaction</span><span>Unity</span>
          </div>
        </header>

        <section className="article-hero-visual">
          <div className="article-hero-art" aria-hidden="true" />
          <div className="article-metrics">
            <div><strong>60</strong><span>component instances</span></div>
            <div><strong>4</strong><span>physical PCBs</span></div>
            <div><strong>95%</strong><span>average confidence</span></div>
            <div><strong>65%</strong><span>latency reduction</span></div>
          </div>
        </section>

        <div className="article-layout">
          <aside className="article-toc">
            <p className="eyebrow">Outline</p>
            <a href="#opening">Opening scene</a>
            <a href="#problem">Problem & stakes</a>
            <a href="#thesis">Design thesis</a>
            <a href="#system">System at a glance</a>
            <a href="#build">Building the prototype</a>
            <a href="#tradeoffs">Hard tradeoffs</a>
            <a href="#demo">Demo walkthrough</a>
            <a href="#evaluation">Evaluation</a>
            <a href="#limitations">Where it breaks</a>
            <a href="#lessons">Lessons learned</a>
            <a href="#future">Future work</a>
            <a href="#closing">Closing idea</a>
          </aside>

          <div className="article-body">
            <div className="outline-notice">
              <p className="outline-label">How to use this page</p>
              <p>This is intentionally an outline rather than a draft. Each section gives the job that part of the article should perform, the questions your prose should answer, the strongest evidence already available, and a visual that could carry part of the explanation.</p>
            </div>

            <OutlineSection id="opening" number="01" label="Opening scene" heading="Begin with the moment the board stops being legible." purpose="Give the reader a concrete, human reason to care before introducing the technology. The post should open on a person confronting an unfamiliar PCB—not on a list of frameworks." prompts={[
              "What does the user physically see: dense components, tiny markings, and no trustworthy schematic?",
              "What is the first question they are trying to answer about the board?",
              "What does the conventional workflow force them to do next—search, consult a datasheet, take notes, and map everything back by hand?",
              "What personal observation or project moment made this friction feel worth solving?",
            ]} evidence={[
              "The paper’s central tension: attention repeatedly shifts between the physical artifact and external references.",
              "Reverse-engineering contexts may involve unavailable, incomplete, or intentionally obscured schematics.",
              "The project was shaped by hardware debugging, repair, security assessment, and electronics-learning use cases.",
            ]} visual="A clean photograph of an unfamiliar PCB with one small region highlighted, paired with a short caption asking what the components in that region do." />

            <OutlineSection id="problem" number="02" label="Problem & stakes" heading="The hard part is not finding information. It is mapping information back to the board." purpose="Define the workflow problem precisely and distinguish BoardWhisperer from a generic object detector or chatbot." prompts={[
              "Why are PCBs unusually difficult visual objects to interpret?",
              "How do scale, density, occlusion, similar-looking components, and uncertainty compound one another?",
              "Why does context switching matter during hands-on technical work?",
              "Who benefits if board inspection becomes more continuous and learnable?",
            ]} evidence={[
              "The paper identifies repeated physical-to-digital remapping as a major source of effort.",
              "Prior AR PCB systems generally support known assembly, repair, or debugging workflows; this project focuses on unfamiliar boards.",
              "Possible audiences include security researchers, repair technicians, engineers, and electronics learners.",
            ]} visual="A simple before-and-after workflow: board → laptop/search/datasheet → board versus board → in-context annotation." />

            <OutlineSection id="thesis" number="03" label="Design thesis" heading="Keep the PCB—not the software—at the center of the interaction." purpose="State the post’s governing idea. This should become the lens through which every technical decision is explained." prompts={[
              "Why is mixed reality a better fit for this spatial problem than another flat screen?",
              "What does “in-situ” or “in-context” mean in practical interaction terms?",
              "Which three goals shaped the design: in-context interpretation, low interaction overhead, and legible spatial guidance?",
              "What does the system deliberately avoid doing for the user?",
            ]} evidence={[
              "Annotations remain around the physical board rather than replacing it.",
              "The system supports reasoning under uncertainty instead of claiming to recover a complete schematic.",
              "The PCB remains the primary viewing and interaction surface throughout the workflow.",
            ]} visual="One strong pull quote over a quiet image: “The PCB itself should remain the center of interaction.”" />

            <section id="system" className="outline-section">
              <p className="section-number">04 / System at a glance</p>
              <h2>Give readers the entire journey before zooming into implementation.</h2>
              <p className="outline-purpose"><strong>Purpose.</strong> Establish a mental model that makes every later section easier to follow. Keep this explanation functional and visual.</p>
              <div className="architecture-flow">
                {architecture.map(([number, title, description]) => (
                  <div key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>
                ))}
              </div>
              <div className="outline-card">
                <p className="outline-label">Questions to answer</p>
                <ul>
                  <li>What crosses the Unity–FastAPI boundary at each stage?</li>
                  <li>What responsibility belongs to computer vision, to the LLM, and to the interface?</li>
                  <li>Why is structured JSON the useful seam between analysis and presentation?</li>
                  <li>What can the user do after annotations appear?</li>
                </ul>
              </div>
              <p className="visual-note"><span>Suggested visual</span>Reuse the paper’s three-stage workflow image: captured board, backend detections, and final mixed-reality output.</p>
            </section>

            <OutlineSection id="build" number="05" label="Building the prototype" heading="Explain the frontend and backend as answers to different design problems." purpose="Make the implementation technically satisfying without turning the post into framework documentation. Organize this section around responsibilities and decisions." prompts={[
              "Frontend: how does Unity use world-space panels, labels, hover states, grabbing, and controller input?",
              "Board Overlay: why were floating labels alone insufficient, and how do red, yellow, and orange highlights restore correspondence?",
              "Visibility: how do Details Mode, category filtering, and toggleable panels manage dense information?",
              "Backend: how do FastAPI, the PCB detector, concurrent LLM enrichment, and compact responses cooperate?",
              "What did the first working end-to-end version look like compared with the final prototype?",
            ]} evidence={[
              "Meta Quest 3S, Unity, Meta XR components, and Meta UI Set on the frontend.",
              "FastAPI, Roboflow’s printed-circuit-board/3 detector, and language-model enrichment on the backend.",
              "Controller interactions: capture, Details Mode, Visibility Panel, and Board Overlay toggles.",
              "Component labels can be repositioned and expanded or reduced for visibility.",
            ]} visual="A two-column annotated screenshot: Unity interface behaviors on one side and a compact request/response example on the other." />

            <OutlineSection id="tradeoffs" number="06" label="Hard tradeoffs" heading="The interesting engineering lives between correctness, latency, and legibility." purpose="Turn the post from a project summary into an engineering story by showing the tensions you had to manage." prompts={[
              "Detection versus explanation: what can enrichment clarify, and what can it never repair if detection is wrong?",
              "Speed versus richness: which prompt, image, and context choices improved output but damaged the interaction rhythm?",
              "Completeness versus clutter: when does showing more information make the system less useful?",
              "Interaction richness versus reliability: why did grabbing, hovering, ray selection, and buttons interfere with one another?",
              "Which optimization produced the 65% latency reduction, and what did you give up—if anything—to achieve it?",
            ]} evidence={[
              "End-to-end processing improved from 45–55 seconds to 15–20 seconds through concurrency, batching, and payload optimization.",
              "Upstream recognition quality bounds downstream explanation quality.",
              "Dense labels motivated filtering, detail toggles, and the Board Overlay.",
              "Mixed-reality interaction behaviors occasionally overrode one another despite separate controls and interactors.",
            ]} visual="A three-way tradeoff diagram labeled Recognition quality, Response time, and Spatial legibility, with concrete project decisions around the edges." />

            <OutlineSection id="demo" number="07" label="Demo walkthrough" heading="Let one inspection session carry the reader through the experience." purpose="Translate the architecture into a sequence a reader can imagine performing. This is the natural place to embed the extended demo." prompts={[
              "How does the user prepare the board and adjust the Visibility Panel?",
              "What makes a capture good enough for analysis?",
              "What does the user see while waiting, when labels spawn, and while inspecting a local region?",
              "How do filtering, hover highlights, details, and label movement support a focused question?",
              "What did a real user notice or do that surprised you during evaluation?",
            ]} evidence={[
              "The paper’s scenario moves from capture to detection to world-space inspection.",
              "The board overlay connects floating annotations back to exact component regions.",
              "Filtering by component category reduces the amount of visible information.",
              "Approximately ten multidisciplinary engineers evaluated the prototype.",
            ]} visual="Embed the extended demo, followed by four timestamped stills: capture, processing, annotation, and filtered inspection." />

            <OutlineSection id="evaluation" number="08" label="Evaluation" heading="Be precise about what the prototype demonstrates—and what it does not." purpose="Present measurements as evidence for an end-to-end prototype, not as a claim that PCB understanding is solved." prompts={[
              "What boards, component classes, capture conditions, and participants were included?",
              "How were confidence and latency measured?",
              "What does the 95% average confidence represent, and what does it leave out?",
              "What qualitative feedback came from the multidisciplinary engineers?",
              "Which results validate the workflow, and which require a larger controlled study?",
            ]} evidence={[
              "60 component instances across four physical PCBs and nine common component classes.",
              "95% average confidence among the reported detections.",
              "A 65% reduction in end-to-end processing time.",
              "The project establishes a working capture-to-annotation loop and a baseline for broader testing.",
            ]} visual="A compact results table with rows for dataset, recognition, latency, and user evaluation, each paired with an explicit caveat." />

            <OutlineSection id="limitations" number="09" label="Where it breaks" heading="Show the failure modes; they explain the system better than a feature list can." purpose="Build credibility and turn limitations into concrete design knowledge for the reader." prompts={[
              "How do poor lighting, oblique angles, small parts, occlusion, and camera quality affect the pipeline?",
              "Why does the Quest 3S camera place the system at a disadvantage relative to a modern smartphone?",
              "How might a plausible explanation become misleading after an incorrect detection?",
              "Where did hand tracking and spatial interaction become unreliable?",
              "Why should the tool be treated as an aid rather than a replacement for datasheets and verification?",
            ]} evidence={[
              "Direct overhead capture under bright white lighting produced noticeably better results.",
              "Undetected components never reach enrichment and therefore never appear in AR.",
              "Longer prompts, richer context, and higher-quality inputs improve detail but increase latency.",
              "Stable interaction with small spatial elements remains difficult on the headset.",
            ]} visual="A failure gallery using the same board under good lighting, poor lighting, and an oblique angle, with missed or ambiguous detections marked." />

            <OutlineSection id="lessons" number="10" label="Lessons learned" heading="Extract principles another builder could carry into a different system." purpose="Move beyond BoardWhisperer and articulate the reusable ideas that emerged from building it." prompts={[
              "Why must dense physical objects have active decluttering rather than passive label placement?",
              "How does capture guidance become part of UX when input quality controls AI quality?",
              "What did you learn about dividing responsibility between perception, language, and interface layers?",
              "What does mixed reality demand that a conventional web or mobile interface does not?",
              "If rebuilding from zero, which architectural or interaction decision would you make earlier?",
            ]} evidence={[
              "Recognition quality, spatial legibility, and interaction simplicity must be designed together.",
              "A compact response contract kept presentation decisions inside Unity.",
              "AI uncertainty becomes a spatial interface problem once generated information is attached to a physical object.",
              "The best interface did not show every available fact; it helped users preserve attention on the artifact.",
            ]} visual="Three numbered principles set as large editorial pullouts, each paired with one concrete BoardWhisperer example." />

            <OutlineSection id="future" number="11" label="Future work" heading="Move from a compelling prototype toward sustained real-world use." purpose="Prioritize the next experiments instead of ending with a generic feature wishlist." prompts={[
              "Which improvement would most increase practical usefulness: recognition, capture, interaction, or querying?",
              "How could labels become truly anchored to components in 3D rather than positioned around a captured view?",
              "How should users ask follow-up questions and verify answers against authoritative sources?",
              "How could the interface communicate confidence without creating more clutter?",
              "What study would test whether the system actually improves learning, inspection speed, or accuracy?",
            ]} evidence={[
              "More reliable recognition across varied boards, lighting, viewpoints, and component densities.",
              "Improved hand tracking, interactive search, follow-up querying, and stable 3D anchoring.",
              "Tighter integration between displayed labels, language-model context, and datasheet verification.",
              "A broader evaluation across user experience levels and real inspection tasks.",
            ]} visual="A restrained roadmap with three horizons: robust capture, interactive investigation, and validated field workflow." />

            <OutlineSection id="closing" number="12" label="Closing idea" heading="End on what mixed reality changes about technical understanding." purpose="Return to the opening scene and leave the reader with a broader idea, not another project summary." prompts={[
              "How is the user’s relationship with the physical artifact different at the end of the workflow?",
              "Why might mixed reality be particularly valuable for tasks that are spatial, visually dense, and uncertain?",
              "What can PCB inspection teach us about future AI interfaces for repair, education, and reverse engineering?",
              "What single sentence should the reader remember after closing the page?",
            ]} evidence={[
              "BoardWhisperer turns a board into an interactive annotated workspace while preserving attention on the artifact.",
              "The system demonstrates a complete workflow rather than a solved recognition problem.",
              "The broader opportunity is to place AI interpretation where technical work is already happening—in physical space.",
            ]} visual="Echo the opening PCB image, now annotated, to create a visual before-and-after bookend." />

            <footer className="article-end">
              <p className="eyebrow">Supporting material</p>
              <p>When drafting begins, close with links to the full paper, presentation, extended demo, acknowledgments, and a concise reference list for the related AR-for-PCB systems discussed in the paper.</p>
              <Link className="text-link" href="/research">Back to research →</Link>
            </footer>
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

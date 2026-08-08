export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-intro-copy">{children}</div>
    </section>
  );
}

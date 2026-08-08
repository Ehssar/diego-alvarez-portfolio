import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>© 2026 Diego Alvarez Rodriguez</p>
      <div>
        <Link href="/research">Research</Link>
        <Link href="/projects">Projects</Link>
        <a href="https://www.linkedin.com/in/dar-pu27/" rel="noreferrer" target="_blank">LinkedIn ↗</a>
      </div>
    </footer>
  );
}

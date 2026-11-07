import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>© 2026 Diego Alvarez Rodriguez</p>
      <div>
        <Link href="/research">Writing</Link>
        <a href="https://github.com/Ehssar" rel="noreferrer" target="_blank">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/dar-pu27/" rel="noreferrer" target="_blank">LinkedIn ↗</a>
      </div>
    </footer>
  );
}

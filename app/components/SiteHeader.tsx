import Link from "next/link";

const links = [
  ["Writing", "/research"],
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Résumé", "/resume"],
];

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Diego Alvarez Rodriguez, home">
        <span>Diego Alvarez</span><span className="wordmark-mark">/</span>
      </Link>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
    </header>
  );
}

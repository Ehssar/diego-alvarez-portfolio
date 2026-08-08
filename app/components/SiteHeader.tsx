import Link from "next/link";

const links = [
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Tags", "/tags"],
  ["About", "/about"],
  ["Résumé", "/resume"],
];

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Diego Alvarez Rodriguez, home">
        <span>Diego</span><i>/</i><span>AR</span>
      </Link>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}

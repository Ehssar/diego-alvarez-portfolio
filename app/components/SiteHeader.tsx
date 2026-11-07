import Image from "next/image";
import Link from "next/link";

const basePath = process.env.GITHUB_PAGES === "true" ? "/diego-alvarez-portfolio" : "";

const navigation = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Writing", href: "/research", icon: "writing" },
  { label: "Projects", href: "/projects", icon: "projects" },
  { label: "About", href: "/about", icon: "about" },
  { label: "Résumé", href: "/resume", icon: "resume" },
] as const;

type IconName = (typeof navigation)[number]["icon"];

function NavIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v12h14V9M9 21v-8h6v8" /></>,
    writing: <><path d="M5 4h14v16H5z" /><path d="M9 9h6M9 13h6M9 17h4" /></>,
    projects: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    about: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" /></>,
    resume: <><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h4M9 12h7M9 16h7" /></>,
  };
  return <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function SocialIcon({ name }: { name: "github" | "linkedin" | "mail" }) {
  if (name === "github") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.03c-3.1.68-3.75-1.31-3.75-1.31-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.7-1.5-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.43-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.08 1.14a10.73 10.73 0 0 1 5.6 0c2.13-1.44 3.07-1.14 3.07-1.14.62 1.54.24 2.68.12 2.96.73.78 1.15 1.77 1.15 2.99 0 4.3-2.6 5.25-5.09 5.53.4.35.75 1.02.75 2.05v3.05c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>;
  }
  if (name === "linkedin") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 18.6H5.3V9.7H8v8.9ZM6.65 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm12 10.1H16v-4.3c0-1-.02-2.25-1.37-2.25-1.38 0-1.59 1.07-1.59 2.18v4.37h-2.7V9.7h2.59v1.22h.04c.36-.68 1.24-1.39 2.55-1.39 2.72 0 3.13 1.79 3.13 4.11v4.96Z"/></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>;
}

export function SiteHeader() {
  return (
    <aside className="site-sidebar" aria-label="Site navigation">
      <div className="site-sidebar-inner">
        <Link className="sidebar-profile" href="/" aria-label="Diego Alvarez Rodriguez — home">
          <Image src={`${basePath}/profile.webp`} alt="Portrait of Diego Alvarez Rodriguez" width={104} height={104} priority className="sidebar-avatar"/>
          <strong>Diego Alvarez Rodriguez</strong>
          <span>Software engineering &amp; security research</span>
        </Link>

        <nav className="sidebar-navigation" aria-label="Primary navigation">
          {navigation.map(item => (
            <Link href={item.href} key={item.href} className="sidebar-navigation-link">
              <NavIcon name={item.icon} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/in/dar-pu27/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><SocialIcon name="linkedin"/></a>
            <a href="https://github.com/Ehssar" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><SocialIcon name="github"/></a>
            <a href="mailto:alvarezdiego0801@gmail.com" aria-label="Email Diego" title="Email"><SocialIcon name="mail"/></a>
          </div>
          <p className="sidebar-copyright">© 2026 Diego Alvarez Rodriguez</p>
        </div>
      </div>
    </aside>
  );
}

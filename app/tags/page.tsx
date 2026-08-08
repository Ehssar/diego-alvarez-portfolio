import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { tags } from "../content";

export default function TagsPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell shell">
        <PageIntro eyebrow="Index" title="Browse by subject.">
          <p>A lightweight index that will grow as new research notes and project retrospectives are published.</p>
        </PageIntro>
        <div className="tag-index">
          {tags.map((tag) => (
            <Link href={tag.count ? "/research" : "/tags"} key={tag.name}>
              <span>{tag.name}</span><i>{String(tag.count).padStart(2, "0")}</i>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

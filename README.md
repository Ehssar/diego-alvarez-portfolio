# Diego Alvarez Rodriguez — Portfolio

Source code for Diego's portfolio and engineering journal. The site uses
[Next.js](https://nextjs.org/) and exports to static HTML, CSS, and JavaScript.
The repository is private and publishing is intentionally disabled for now.

## Run it locally

Install [Node.js](https://nodejs.org/) 20 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. Changes update automatically.

## Where to edit

- `app/content.ts` — project cards, research entries, dates, summaries, and tags
- `app/page.tsx` — homepage copy and layout
- `app/research/boardwhisperer/page.tsx` — BoardWhisperer article outline
- `app/about/page.tsx` — About page
- `app/resume/page.tsx` — résumé page
- `app/globals.css` — colors, typography, spacing, and responsive styling
- `public/` — images, PDFs, and other downloadable files

## Check a change

```bash
npm run check
```

This runs the linter and generates the production-ready static site in `out/`.
No GitHub Pages workflow is included yet, so pushes cannot publish the site.

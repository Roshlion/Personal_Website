You are an expert full-stack engineer. Create a complete, production-ready Next.js 14 (App Router, TypeScript) portfolio site for **Roshen Jegajeevan**, with Tailwind CSS, clean UX, SEO metadata, and an embedded PDF resume.

## Tech + Setup
- Framework: Next.js 14, App Router, TypeScript.
- Styling: Tailwind CSS. Minimal, modern design (rounded-2xl cards, soft shadows, good whitespace, responsive).
- No server components beyond standard Next usage, no DB needed.
- All content is static. PDF is served from `/public/Roshen_J_Resume_Final.pdf`.
- Include a `README.md` with local dev + Vercel deploy steps.

## Site Structure (App Router)
- `app/layout.tsx`: global layout, font, metadata, header/nav, footer.
- `app/page.tsx`: Home page.
- `app/projects/page.tsx`: Projects page.
- `app/resume/page.tsx`: Resume page with embedded PDF viewer + download link.
- `components/`:
  - `Header.tsx` (site nav)
  - `Footer.tsx`
  - `Container.tsx` (width/padding wrapper)
  - `Badge.tsx` (small pill tags)
  - `PDFViewer.tsx` (reliable PDF embed with <object> + fallback link)
- `public/`:
  - `favicon.ico` (placeholder)
  - `Roshen_J_Resume_Final.pdf` (assume user will upload after generation)

## Brand + Content
- Primary identity:
  - **Name**: Roshen Jegajeevan
  - **Email**: roshenj67@gmail.com (mailto link)
  - **Phone**: 678-462-4887 (tel link)
  - **LinkedIn**: https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/
  - **GitHub (project repo)**: https://github.com/Roshlion/AI_BACKTESTER
  - **Live Backtester**: https://ai-backtester-j1kleim2w-roshlions-projects.vercel.app/backtester
- Tagline/role line for hero:
  - “Current Analyst at Capital One · Industrial Engineering (B.S.) · M.S. Computer Science (Georgia Tech)”
- Short “about” paragraph (use verbatim):
  - “I’m a data-driven analyst and builder focused on automating analytics, modeling, and decision tools. I work across SQL, Python, and modern data stacks (Snowflake, dbt) to ship production-grade reporting and ML-assisted workflows. Experienced with time-series modeling, Tableau/QuickSight dashboards, and end-to-end ETL on AWS/Redshift. Pursuing an M.S. in Computer Science (ML concentration) at Georgia Tech; previously B.S. in Industrial Engineering. AWS Certified.”
- “Personal passion” sentence (use verbatim):
  - “I have a personal passion for projects that blend AI and markets.”
- Skills badges to show on Home:
  - SQL, Python, Snowflake, dbt, AWS/Redshift, ETL, Time-Series, Tableau, QuickSight, Pandas, Scikit-learn, Git/GitHub, Vercel, Next.js

## Pages & Copy

### 1) Home (`/`)
- Hero: Name, role line, short about paragraph, buttons:
  - “Resume” → `/resume`
  - “Projects” → `/projects`
  - “Email” (mailto), “Call” (tel), “LinkedIn” (external)
- A compact “Skills” section using `Badge` component.
- A “Featured Project” card linking to the AI Backtester (external link to live app + GitHub repo). Copy to include:
  - Title: “AI Backtester”
  - Summary: “Backtests portfolios using ML or technical indicators with AI-generated prompts and strategy DSL.”
  - CTAs: “Open Backtester” (external), “View Repo” (external)

### 2) Projects (`/projects`)
- “AI Backtester” detailed card:
  - One paragraph (use verbatim):
    “An interactive backtesting platform supporting ML-based and technical-indicator strategies. Users can craft strategies via AI prompts that compile to a DSL/Python script, then run backtests on hosted datasets.”
  - Links:
    - Live: https://ai-backtester-j1kleim2w-roshlions-projects.vercel.app/backtester
    - Repo: https://github.com/Roshlion/AI_BACKTESTER
- Leave room (empty card style) for future projects with “Coming soon”.

### 3) Resume (`/resume`)
- Embed the PDF from `/Roshen_J_Resume_Final.pdf` using a robust viewer:
  - Use a responsive container with fixed height (e.g., 100vh minus header).
  - Embed with `<object data="/Roshen_J_Resume_Final.pdf" type="application/pdf">` and a fallback that shows a download button if inline viewing fails.
  - Provide a secondary “Download PDF” button.
  - On small screens, show a note: “On mobile, some browsers block PDF preview—use ‘Download PDF’ if the viewer doesn’t load.”

## SEO & Metadata
- `layout.tsx` should export `metadata` with:
  - `title`: “Roshen Jegajeevan — Portfolio”
  - `description`: “Portfolio of Roshen Jegajeevan — Analyst at Capital One; M.S. CS (Georgia Tech); projects in analytics, ML, and backtesting.”
  - OpenGraph and Twitter card: name, description, site URL placeholder, image placeholder from `/opengraph-image.png` (you can generate a simple OG image: name + role).

## UI/UX
- Clean, accessible, dark-mode friendly (Tailwind class `bg-neutral-950 text-neutral-100` for body; use neutral palette).
- Header: left-aligned name; right-aligned nav links: Home, Projects, Resume, LinkedIn (external).
- Footer: email + phone + copyright + “Deployed on Vercel”.
- Container width ~`max-w-4xl`; padding `px-4 md:px-6`.
- Cards with `rounded-2xl`, `shadow`, `border border-neutral-800`, and `hover:shadow-lg`.

## Deliverables
Generate the full repository with the following files and complete code:

**Root**
- `package.json` with scripts:
  - `"dev": "next dev"`, `"build": "next build"`, `"start": "next start"`, `"lint": "next lint"`
- `tsconfig.json`
- `next.config.mjs`
- `postcss.config.js`
- `tailwind.config.ts`
- `.gitignore`
- `README.md` (instructions below)

**Styles**
- `app/globals.css` (include Tailwind base/components/utilities and simple CSS for PDF container)

**App Router**
- `app/layout.tsx`:
  - Imports global styles, sets `<html lang="en">`.
  - Exports `metadata` (Title/Description/OG/Twitter).
  - Renders `<Header/>` around `<main/>` and `<Footer/>`.
- `app/page.tsx` (Home):
  - Hero + action buttons + skills badges + featured project card.
- `app/projects/page.tsx` (Projects):
  - AI Backtester section with two external links (live + repo).
- `app/resume/page.tsx` (Resume):
  - Title, “Download PDF” button, `<PDFViewer/>` component.

**Components**
- `components/Container.tsx` — children wrapper with `max-w-4xl mx-auto px-4 md:px-6`
- `components/Header.tsx` — site nav with active link states, external LinkedIn link.
- `components/Footer.tsx` — simple footer with contact info + Vercel note.
- `components/Badge.tsx` — small pill for skills.
- `components/PDFViewer.tsx` — responsive `<object>` embed with fallback:
  - Props: `src: string` (default `"/Roshen_J_Resume_Final.pdf"`), `title?: string`.
  - Renders `<object data={src} type="application/pdf">` with graceful fallback: a message + download link.

**Public**
- `public/favicon.ico` (placeholder)
- `public/opengraph-image.png` (simple generated image with name)
- `public/Roshen_J_Resume_Final.pdf` (placeholder note in README; user will upload their real PDF)

## README.md (include these steps verbatim)
- **Local Dev**:
  1) `pnpm i` (or `npm i`)
  2) `pnpm dev` (or `npm run dev`) → open http://localhost:3000
- **Add your PDF**:
  - Place your resume at `public/Roshen_J_Resume_Final.pdf`.
- **Deploy to Vercel**:
  1) Push to a GitHub repo
  2) Import the repo in Vercel → Framework: Next.js → Build Command: `next build` → Output: `.next`
  3) After deploy, verify `/resume` renders the embedded PDF. If mobile inline preview fails, use the Download button.
- **Customize**:
  - Update links, OG image, and skills in `app/page.tsx`.
  - Add more projects in `app/projects/page.tsx`.

## Implementation Guidelines
- Strict TypeScript.
- Accessible HTML (buttons/links with aria-labels).
- External links have `target="_blank"` and `rel="noopener noreferrer"`.
- Phone uses `href="tel:+16784624887"`.
- Email uses `href="mailto:roshenj67@gmail.com"`.
- Keep UI compact and readable on mobile.

## Now produce:
1) The full file/folder tree.
2) The complete code for each file (inline code blocks per file).
3) The `README.md` content.
Do not omit any files. Keep styling minimal, modern, and consistent. 


# Roshen Jegajeevan — Portfolio

My personal portfolio website showcasing my professional experience, projects, and skills as a data-driven analyst and developer. Built with Next.js 14, TypeScript, and Tailwind CSS, this site features an embedded PDF resume viewer, detailed project showcases, and a clean, accessible design.

## About This Website

This is the official portfolio website for Roshen Jegajeevan, currently an Analyst at Capital One with a B.S. in Industrial Engineering and pursuing an M.S. in Computer Science (Machine Learning concentration) at Georgia Tech. The site highlights my work in analytics, machine learning, and full-stack development.

## Featured Projects

### AI Backtester (Featured)
An interactive backtesting platform that supports both ML-based and technical-indicator strategies. Users can craft trading strategies via AI prompts that compile to a DSL/Python script, then run comprehensive backtests on hosted market datasets.

- **Live Demo**: [AI Backtester](https://ai-backtester-j1kleim2w-roshlions-projects.vercel.app/backtester)
- **Repository**: [GitHub - AI_BACKTESTER](https://github.com/Roshlion/AI_BACKTESTER)
- **Tech**: Next.js, Python, Machine Learning, Financial Analysis

### ML Projects
A comprehensive collection of machine learning implementations and algorithmic trading projects built during my Georgia Tech coursework and personal research. Includes custom learner implementations (Decision Trees, Random Trees, Bag Learners), Q-Learning for trading strategies, and market simulation tools.

- **Repository**: [GitHub - ML-Projects](https://github.com/Roshlion/ML-Projects)
- **Tech**: Python, Scikit-learn, NumPy, Pandas

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Local Development

1. Install dependencies:
   ```bash
   pnpm i
   # or
   npm i
   ```

2. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Add Your PDF

Your resume PDF is already placed at `public/Roshen_J_Resume_Final.pdf`. If you need to update it, simply replace this file with your new resume.

## Deploy to Vercel

1. Push this repository to GitHub

2. Import the repo in Vercel:
   - Framework preset: **Next.js**
   - Build command: `next build`
   - Output directory: `.next`

3. After deployment, verify the `/resume` page renders the embedded PDF. If mobile inline preview fails, use the Download button.

## Customize

- **Update content**: Edit links, about text, and skills in `app/page.tsx`
- **Add projects**: Add more project cards in `app/projects/page.tsx`
- **Change styling**: Modify colors and styles in `app/globals.css` and component files
- **Update metadata**: Edit SEO info in `app/layout.tsx`
- **Replace OG image**: Update `public/opengraph-image.png` with your custom social preview image

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── resume/
│   │   └── page.tsx        # Resume page with PDF viewer
│   └── globals.css         # Global styles
├── components/
│   ├── Container.tsx       # Max-width wrapper
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Badge.tsx           # Skill badge component
│   └── PDFViewer.tsx       # PDF embed with fallback
├── public/
│   ├── Roshen_J_Resume_Final.pdf
│   ├── favicon.ico
│   └── opengraph-image.png
└── package.json
```

## Features

- Responsive design that works on all devices
- Dark mode optimized color scheme
- Accessible HTML with proper ARIA labels
- SEO-friendly with OpenGraph and Twitter card metadata
- PDF viewer with mobile fallback
- Clean, modern UI with Tailwind CSS

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contact

- **Email**: roshenj67@gmail.com
- **Phone**: 678-462-4887
- **LinkedIn**: [Roshen Jegajeevan](https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/)

---

Built with Next.js • Deployed on Vercel

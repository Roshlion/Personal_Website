# Roshen Jegajeevan — Portfolio


Personal site for Roshen Jegajeevan, Senior Associate in Auto Finance at Capital One, with an M.S. in Computer Science (Machine Learning) in progress at Georgia Tech. The public site is a resume and a short background page.

StratBench is kept in `components/archive/StratBenchSection.tsx` and is not linked from the site.

## ML Projects
A comprehensive collection of machine learning implementations and algorithmic trading projects built during my Georgia Tech coursework and personal research. Includes custom learner implementations (Decision Trees, Random Trees, Bag Learners), Q-Learning for trading strategies, and market simulation tools.

- **Repository**: [GitHub - ML-Projects](https://github.com/Roshlion/ML-Projects)
- **Tech**: Python, Scikit-learn, NumPy, Pandas

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel


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

- **Email**: Roshenj76@gmail.com
- **Phone**: 678-462-4887
- **LinkedIn**: [Roshen Jegajeevan](https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/)

---

Built with Next.js • Deployed on Vercel

# Roshen Jegajeevan — Portfolio

A modern, production-ready portfolio site built with Next.js 14, TypeScript, and Tailwind CSS. Features an embedded PDF resume viewer, project showcase, and clean, accessible design.

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

- **Email**: roshenj67@gmail.com
- **Phone**: 678-462-4887
- **LinkedIn**: [Roshen Jegajeevan](https://www.linkedin.com/in/roshen-jegajeevan-a278a9205/)

---

Built with Next.js • Deployed on Vercel

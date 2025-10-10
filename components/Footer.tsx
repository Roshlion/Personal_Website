import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 mt-20">
      <Container className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href="mailto:roshenj67@gmail.com"
              className="hover:text-neutral-100 transition-colors"
            >
              roshenj67@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="tel:+16784624887"
              className="hover:text-neutral-100 transition-colors"
            >
              678-462-4887
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Roshen Jegajeevan</p>
            <p className="text-xs mt-1">Deployed on Vercel</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

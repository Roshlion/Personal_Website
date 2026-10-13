import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <Container className="py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-neutral-500">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <a
              href="mailto:Roshenj76@gmail.com"
              className="hover:text-neutral-200 transition-colors"
            >
              Roshenj76@gmail.com
            </a>
            <a
              href="tel:+16784624887"
              className="hover:text-neutral-200 transition-colors"
            >
              678-462-4887
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Roshen Jegajeevan</p>
        </div>
      </Container>
    </footer>
  );
}

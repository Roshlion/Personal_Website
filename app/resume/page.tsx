import Container from "@/components/Container";
import PDFViewer from "@/components/PDFViewer";

export default function Resume() {
  return (
    <Container className="py-12 md:py-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-50">
            Resume
          </h1>
          <p className="text-neutral-500 mt-2 text-sm">
            Updated October 2026
          </p>
        </div>
        <a
          href="/Roshen_J_Resume_Final.pdf"
          download="Roshen_J_Resume.pdf"
          className="px-5 py-2.5 bg-neutral-100 text-neutral-950 rounded-lg text-sm font-medium hover:bg-white transition-colors w-fit"
        >
          Download PDF
        </a>
      </div>
      <PDFViewer src="/Roshen_J_Resume_Final.pdf" title="Roshen Jegajeevan Resume" />
    </Container>
  );
}

import Container from "@/components/Container";
import PDFViewer from "@/components/PDFViewer";

export default function Resume() {
  return (
    <Container className="py-12 md:py-20">
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-100">
          Resume
        </h1>
        <a
          href="/Roshen_J_Resume_Final.pdf"
          download
          className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
        >
          Download PDF
        </a>
      </div>
      <PDFViewer src="/Roshen_J_Resume_Final.pdf" title="Roshen Jegajeevan Resume" />
    </Container>
  );
}

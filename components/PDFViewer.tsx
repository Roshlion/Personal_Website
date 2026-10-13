"use client";

interface PDFViewerProps {
  src?: string;
  title?: string;
}

export default function PDFViewer({
  src = "/Roshen_J_Resume_Final.pdf",
  title = "Resume PDF",
}: PDFViewerProps) {
  return (
    <div className="pdf-container rounded-2xl overflow-hidden border border-neutral-800 bg-white">
      <object
        data={`${src}#view=FitH`}
        type="application/pdf"
        className="w-full h-full"
        aria-label={title}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 bg-neutral-950">
          <p className="text-neutral-300 mb-4 text-center">
            This browser can&apos;t show the PDF inline.
          </p>
          <a
            href={src}
            download
            className="px-5 py-2.5 bg-neutral-100 text-neutral-950 rounded-lg text-sm font-medium hover:bg-white transition-colors"
          >
            Download PDF
          </a>
        </div>
      </object>
    </div>
  );
}

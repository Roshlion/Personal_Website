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
    <div className="pdf-container rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
      <object
        data={`${src}#view=FitH`}
        type="application/pdf"
        className="w-full h-full"
        aria-label={title}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 bg-neutral-900">
          <p className="text-neutral-300 mb-4 text-center">
            Your browser does not support inline PDF viewing.
          </p>
          <p className="text-neutral-400 text-sm mb-6 text-center max-w-md">
            On mobile, some browsers block PDF preview—use the Download button
            if the viewer doesn&apos;t load.
          </p>
          <a
            href={src}
            download
            className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </object>
    </div>
  );
}

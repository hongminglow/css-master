import type { PreviewData } from "@/types/topic";
import { useEffect, useRef } from "react";

interface PreviewCardProps {
  data: PreviewData;
}

export function PreviewCard({ data }: PreviewCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; }
                ${data.css}
              </style>
            </head>
            <body>
              ${data.html}
            </body>
          </html>
        `);
        doc.close();
      }
    }
  }, [data]);

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden">
      {/* Preview Header */}
      <div className="h-10 bg-slate-700 flex items-center px-3">
        <span className="text-xs font-semibold text-slate-400 uppercase">
          Preview
        </span>
      </div>

      {/* Preview Body */}
      <div className="bg-slate-50 p-5">
        <iframe
          ref={iframeRef}
          title="Preview"
          className="w-full h-[180px] border-0"
          sandbox="allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
}

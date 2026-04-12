import type { PreviewData } from "@/types/topic";
import { useEffect, useRef, useState } from "react";

interface PreviewCardProps {
  data: PreviewData;
}

export function PreviewCard({ data }: PreviewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(
    !data.replayable,
  );
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    if (!data.replayable || hasEnteredViewport) {
      return;
    }

    const node = cardRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [data.replayable, hasEnteredViewport]);

  useEffect(() => {
    if (!hasEnteredViewport) {
      return;
    }

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
  }, [data, hasEnteredViewport, reloadToken]);

  const handleReplay = () => {
    setHasEnteredViewport(true);
    setReloadToken((currentToken) => currentToken + 1);
  };

  return (
    <div ref={cardRef} className="bg-slate-800 rounded-xl overflow-hidden">
      {/* Preview Header */}
      <div className="h-10 bg-slate-700 flex items-center justify-between gap-3 px-3">
        <span className="text-xs font-semibold text-slate-400 uppercase">
          Preview
        </span>
        {data.replayable && (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-500/70 bg-slate-800 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
            aria-label={data.replayLabel ?? "Play preview animation"}
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M5.5 4.5a1 1 0 011.53-.848l7 4.5a1 1 0 010 1.696l-7 4.5A1 1 0 015.5 13.5v-9z" />
            </svg>
            <span>Play</span>
          </button>
        )}
      </div>

      {/* Preview Body */}
      <div className="bg-slate-50 p-5">
        <iframe
          ref={iframeRef}
          title="Preview"
          className="w-full h-45 border-0"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-modals"
        />
      </div>
    </div>
  );
}

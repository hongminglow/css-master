import type { LiveComparisonData } from "@/types/topic";
import { useEffect, useRef, useState } from "react";

interface PanelProps {
  label: string;
  variant: "bad" | "good";
  code: string;
  html: string;
  css: string;
  description?: string;
  active: boolean;
  reloadToken: number;
}

function Panel({
  label,
  variant,
  code,
  html,
  css,
  description,
  active,
  reloadToken,
}: PanelProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!active) {
      return;
    }

    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      doc.open();
      doc.write(`<!DOCTYPE html><html><head><style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { height: 100%; }
        body { font-family: system-ui, sans-serif; padding: 12px; background: #f8fafc; min-height: 100%; }
        ${css}
      </style></head><body>${html}</body></html>`);
      doc.close();
    }
  }, [active, html, css, reloadToken]);

  const isBad = variant === "bad";

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-700">
      {/* Panel label */}
      <div
        className={`flex items-center gap-2 px-4 py-2 border-b border-slate-700 ${
          isBad ? "bg-red-950/40" : "bg-green-950/40"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full shrink-0 ${
            isBad ? "bg-red-500" : "bg-green-500"
          }`}
        />
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${
            isBad ? "text-red-400" : "text-green-400"
          }`}
        >
          {label}
        </span>
      </div>

      {/* Code block */}
      <div className="bg-[#0a0f1e] p-4 overflow-x-auto">
        <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap wrap-break-word">
          <code className="text-slate-200">{code}</code>
        </pre>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-700/50 border-y border-slate-700">
        <svg
          className="w-3 h-3 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
          Output
        </span>
      </div>

      {/* Live preview */}
      <div className="bg-slate-50 flex-1">
        <iframe
          ref={iframeRef}
          title={`Preview: ${label}`}
          className="w-full h-80 lg:h-96 border-0"
          loading="lazy"
          sandbox="allow-same-origin allow-scripts allow-modals"
        />
      </div>

      {/* Description */}
      {description && (
        <div
          className={`px-4 py-2.5 text-xs border-t border-slate-700 ${
            isBad
              ? "bg-red-950/20 text-red-300"
              : "bg-green-950/20 text-green-300"
          }`}
        >
          {description}
        </div>
      )}
    </div>
  );
}

interface LiveComparisonCardProps {
  data: LiveComparisonData;
}

export function LiveComparisonCard({ data }: LiveComparisonCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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

  const handlePlay = () => {
    setHasEnteredViewport(true);
    setReloadToken((currentToken) => currentToken + 1);
  };

  return (
    <div ref={cardRef} className="bg-slate-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-50 font-mono">
              {data.title}
            </h3>
            {data.subtitle && (
              <p className="text-sm text-slate-400 mt-1">{data.subtitle}</p>
            )}
          </div>
          {data.replayable && (
            <button
              type="button"
              onClick={handlePlay}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-500/70 bg-slate-900 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
              aria-label={data.replayLabel ?? "Play comparison animation"}
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
      </div>

      {/* Two panels side by side */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Panel
          label={data.left.label}
          variant="bad"
          code={data.left.code}
          html={data.left.html}
          css={data.left.css}
          description={data.left.description}
          active={hasEnteredViewport}
          reloadToken={reloadToken}
        />
        <Panel
          label={data.right.label}
          variant="good"
          code={data.right.code}
          html={data.right.html}
          css={data.right.css}
          description={data.right.description}
          active={hasEnteredViewport}
          reloadToken={reloadToken}
        />
      </div>
    </div>
  );
}

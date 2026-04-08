import type { CodeData } from "@/types/topic";

interface CodeSnippetProps {
  data: CodeData;
}

export function CodeSnippet({ data }: CodeSnippetProps) {
  return (
    <div className="bg-[#0a0f1e] rounded-xl overflow-hidden">
      {/* Code Header */}
      <div className="h-10 bg-slate-800 flex items-center px-3 gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase">
          {data.title || data.language}
        </span>
      </div>

      {/* Code Body */}
      <div className="p-5">
        <pre className="font-mono text-sm leading-relaxed">
          <code className="text-slate-200">{data.code}</code>
        </pre>
      </div>
    </div>
  );
}

import type { ComparisonData } from "@/types/topic";

interface ComparisonCardProps {
  data: ComparisonData;
}

export function ComparisonCard({ data }: ComparisonCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-slate-50 font-mono">
          {data.title}
        </h3>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
        {/* Left Side */}
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <h4 className="text-sm font-semibold text-slate-50">
              {data.left.label}
            </h4>
          </div>
          <div className="bg-[#0a0f1e] rounded-lg p-4">
            <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
              <code className="text-slate-200">{data.left.code}</code>
            </pre>
          </div>
          {data.left.description && (
            <p className="text-xs text-slate-400">{data.left.description}</p>
          )}
        </div>

        {/* Right Side */}
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <h4 className="text-sm font-semibold text-slate-50">
              {data.right.label}
            </h4>
          </div>
          <div className="bg-[#0a0f1e] rounded-lg p-4">
            <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap break-words">
              <code className="text-slate-200">{data.right.code}</code>
            </pre>
          </div>
          {data.right.description && (
            <p className="text-xs text-slate-400">{data.right.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

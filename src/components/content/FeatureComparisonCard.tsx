import type { FeatureComparisonData, FeatureList } from "@/types/topic";

interface FeatureComparisonCardProps {
  data: FeatureComparisonData;
}

export function FeatureComparisonCard({ data }: FeatureComparisonCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
        <h3 className="text-lg font-semibold text-slate-50 font-mono">
          {data.title}
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700">
        <FeatureColumn column={data.left} />
        <FeatureColumn column={data.right} />
      </div>
    </div>
  );
}

function FeatureColumn({ column }: { column: FeatureList }) {
  const variantClasses = {
    info: "text-blue-400 bg-blue-400/10",
    success: "text-emerald-400 bg-emerald-400/10",
    danger: "text-rose-400 bg-rose-400/10",
    warning: "text-amber-400 bg-amber-400/10",
  }[column.variant || "info"];

  const iconColor = {
    info: "text-blue-500",
    success: "text-emerald-500",
    danger: "text-rose-500",
    warning: "text-amber-500",
  }[column.variant || "info"];

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${variantClasses}`}>
          {column.label}
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {column.items.map((item, index) => (
          <li key={index} className="flex gap-3 items-start group">
            <div className={`mt-1.5 flex-shrink-0 ${iconColor}`}>
              <FeatureIcon type={column.icon} />
            </div>
            <span className="text-sm text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureIcon({ type }: { type?: "check" | "dot" | "plus" }) {
  switch (type) {
    case "plus":
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
        </svg>
      );
    case "dot":
      return <div className="w-1.5 h-1.5 rounded-full bg-current mt-1" />;
    case "check":
    default:
      return (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      );
  }
}

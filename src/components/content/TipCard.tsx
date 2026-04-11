import type { TipData } from "@/types/topic";

interface TipCardProps {
  data: TipData;
}

export function TipCard({ data }: TipCardProps) {
  const variantStyles = {
    info: {
      bg: "bg-blue-900/30",
      border: "border-blue-600",
      icon: "ℹ️",
      iconBg: "bg-blue-600",
    },
    warning: {
      bg: "bg-yellow-900/30",
      border: "border-yellow-600",
      icon: "⚠️",
      iconBg: "bg-yellow-600",
    },
    success: {
      bg: "bg-green-900/30",
      border: "border-green-600",
      icon: "✓",
      iconBg: "bg-green-600",
    },
    danger: {
      bg: "bg-red-900/30",
      border: "border-red-600",
      icon: "✕",
      iconBg: "bg-red-600",
    },
  };

  const variant = variantStyles[data.variant as keyof typeof variantStyles] || variantStyles.info;

  return (
    <div
      className={`${variant.bg} ${variant.border} border-l-4 rounded-lg p-5 flex gap-4`}
    >
      {/* Icon */}
      <div
        className={`${variant.iconBg} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
      >
        <span className="text-white text-sm">{variant.icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-slate-50">{data.title}</h4>
        <p className="text-sm text-slate-300 leading-relaxed">
          {data.content}
        </p>
      </div>
    </div>
  );
}

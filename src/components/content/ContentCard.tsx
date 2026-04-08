import type { CardData } from "@/types/topic";

interface ContentCardProps {
  data: CardData;
}

export function ContentCard({ data }: ContentCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-slate-50 font-mono">
        {data.title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">{data.content}</p>
    </div>
  );
}

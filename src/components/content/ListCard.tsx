import type { ListData } from "@/types/topic";

interface ListCardProps {
  data: ListData;
}

export function ListCard({ data }: ListCardProps) {
  const ListComponent = data.ordered ? "ol" : "ul";

  return (
    <div className="bg-slate-800 rounded-xl p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-slate-50 font-mono">
        {data.title}
      </h3>

      <ListComponent
        className={`flex flex-col gap-3 ${
          data.ordered
            ? "list-decimal list-inside"
            : "list-none"
        }`}
      >
        {data.items.map((item, index) => (
          <li key={index} className="flex gap-3 items-start">
            {!data.ordered && (
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
            )}
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-sm text-slate-300 leading-relaxed">
                {item.text}
              </span>
              {item.subtext && (
                <span className="text-xs text-slate-500">{item.subtext}</span>
              )}
            </div>
          </li>
        ))}
      </ListComponent>
    </div>
  );
}

import type { QuoteData } from "@/types/topic";

interface QuoteCardProps {
  data: QuoteData;
}

export function QuoteCard({ data }: QuoteCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-600">
      <div className="flex flex-col gap-4">
        {/* Quote Icon */}
        <svg
          className="w-8 h-8 text-blue-600 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote Text */}
        <blockquote className="text-base text-slate-300 leading-relaxed italic">
          {data.quote}
        </blockquote>

        {/* Author */}
        {data.author && (
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-slate-700" />
            <cite className="text-sm text-slate-400 not-italic">
              {data.author}
            </cite>
          </div>
        )}
      </div>
    </div>
  );
}

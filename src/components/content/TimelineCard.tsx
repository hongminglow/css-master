import type { TimelineData } from "@/types/topic";

interface TimelineCardProps {
  data: TimelineData;
}

export function TimelineCard({ data }: TimelineCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-slate-50 font-mono">
        {data.title}
      </h3>

      <div className="relative flex flex-col gap-6">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-700" />

        {data.events.map((event, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Timeline Dot */}
            <div className="relative z-10 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            {/* Event Content */}
            <div className="flex-1 flex flex-col gap-1 pt-1">
              <h4 className="text-sm font-semibold text-slate-50">
                {event.title}
              </h4>
              <p className="text-sm text-slate-400">{event.description}</p>
              {event.code && (
                <div className="mt-2 bg-[#0a0f1e] rounded-lg p-3">
                  <pre className="font-mono text-xs leading-relaxed">
                    <code className="text-slate-200">{event.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

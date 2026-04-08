import type { DosDontsData } from "@/types/topic";

interface DosDontsCardProps {
  data: DosDontsData;
}

export function DosDontsCard({ data }: DosDontsCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-slate-50 font-mono">
          {data.title}
        </h3>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 divide-x divide-slate-700">
        {/* Do's */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-green-400">Do</h4>
          </div>

          <ul className="flex flex-col gap-3">
            {data.dos.map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-green-400 text-sm mt-0.5">✓</span>
                <span className="text-sm text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Don'ts */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-red-400">Don't</h4>
          </div>

          <ul className="flex flex-col gap-3">
            {data.donts.map((item, index) => (
              <li key={index} className="flex gap-2 items-start">
                <span className="text-red-400 text-sm mt-0.5">✕</span>
                <span className="text-sm text-slate-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

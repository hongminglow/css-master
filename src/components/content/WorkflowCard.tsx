import type { WorkflowData } from "@/data/topics";

interface WorkflowCardProps {
  data: WorkflowData;
}

export function WorkflowCard({ data }: WorkflowCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-slate-50 font-mono">
        {data.title}
      </h3>

      {data.steps.map((step) => (
        <div key={step.number} className="flex gap-3">
          {/* Step Number */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-base font-bold text-white">
              {step.number}
            </span>
          </div>

          {/* Step Content */}
          <div className="flex-1 flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-slate-50">
              {step.title}
            </h4>
            <p className="text-sm text-slate-400">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

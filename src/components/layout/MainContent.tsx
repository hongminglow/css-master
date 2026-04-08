import { CodeSnippet } from "@/components/content/CodeSnippet";
import { ContentCard } from "@/components/content/ContentCard";
import { PreviewCard } from "@/components/content/PreviewCard";
import { WorkflowCard } from "@/components/content/WorkflowCard";
import type {
  CardData,
  CodeData,
  PreviewData,
  WorkflowData,
} from "@/data/topics";
import type { Topic } from "@/types/topic";

interface MainContentProps {
  topic?: Topic;
}

export function MainContent({ topic }: MainContentProps) {
  if (!topic) {
    return (
      <main className="flex-1 bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-50 font-mono mb-4">
            Welcome to CSS Tricks
          </h2>
          <p className="text-slate-400 text-lg">
            Select a topic from the sidebar or press{" "}
            <kbd className="px-2 py-1 bg-slate-700 rounded text-sm">⌘K</kbd> to
            search
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-900 overflow-y-auto">
      <div className="max-w-5xl mx-auto p-8 flex flex-col gap-6">
        {/* Content Header */}
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-slate-50 font-mono">
            {topic.name}
          </h1>
          <p className="text-base text-slate-400">{topic.description}</p>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {topic.tags.map((tag) => (
              <span
                key={tag}
                className="h-7 bg-slate-700 rounded-full px-3 flex items-center text-xs text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content Sections */}
        {topic.content.sections.map((section, index) => {
          switch (section.type) {
            case "card":
              return (
                <ContentCard key={index} data={section.data as CardData} />
              );
            case "workflow":
              return (
                <WorkflowCard key={index} data={section.data as WorkflowData} />
              );
            case "code":
              return (
                <CodeSnippet key={index} data={section.data as CodeData} />
              );
            case "preview":
              return (
                <PreviewCard key={index} data={section.data as PreviewData} />
              );
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}

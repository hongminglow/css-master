import { CodeSnippet } from "@/components/content/CodeSnippet";
import { ComparisonCard } from "@/components/content/ComparisonCard";
import { ContentCard } from "@/components/content/ContentCard";
import { DosDontsCard } from "@/components/content/DosDontsCard";
import { ListCard } from "@/components/content/ListCard";
import { LiveComparisonCard } from "@/components/content/LiveComparisonCard";
import { PreviewCard } from "@/components/content/PreviewCard";
import { QuoteCard } from "@/components/content/QuoteCard";
import { TableCard } from "@/components/content/TableCard";
import { TimelineCard } from "@/components/content/TimelineCard";
import { TipCard } from "@/components/content/TipCard";
import { WorkflowCard } from "@/components/content/WorkflowCard";
import { categories } from "@/data/categories";
import { topics } from "@/data/topics/index";
import type {
  CardData,
  CodeData,
  ComparisonData,
  DosDontsData,
  ListData,
  LiveComparisonData,
  PreviewData,
  QuoteData,
  TableData,
  TimelineData,
  TipData,
  WorkflowData,
} from "@/types/topic";
import type { Topic } from "@/types/topic";

interface MainContentProps {
  topic?: Topic;
  onTopicSelect?: (topic: Topic) => void;
}

export function MainContent({ topic, onTopicSelect }: MainContentProps) {
  if (!topic) {
    return (
      <main className="flex-1 bg-slate-900 min-w-0">
        <div className="max-w-5xl mx-auto p-8 flex flex-col gap-8">
          {/* Hero Section */}
          <header className="flex flex-col gap-4 pt-8">
            <h1 className="text-5xl font-bold text-slate-50 font-mono">
              CSS Tricks Platform
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A curated collection of CSS techniques and tricks that developers
              commonly miss. Discover powerful patterns, learn best practices,
              and level up your styling skills.
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-500 font-mono mb-2">
                {topics.length}
              </div>
              <div className="text-sm text-slate-400">CSS Tricks</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-500 font-mono mb-2">
                {categories.length}
              </div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-500 font-mono mb-2">
                100%
              </div>
              <div className="text-sm text-slate-400">Dark Mode</div>
            </div>
          </div>

          {/* Features */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-slate-50 font-mono">
              Features
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-500 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Fuzzy Search
                    </h3>
                    <p className="text-sm text-slate-400">
                      Press{" "}
                      <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">
                        ⌘K
                      </kbd>{" "}
                      to quickly find any trick by name or tag
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-500 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Live Code Preview
                    </h3>
                    <p className="text-sm text-slate-400">
                      See CSS code alongside visual demonstrations in real-time
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-500 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Organized by Category
                    </h3>
                    <p className="text-sm text-slate-400">
                      Browse tricks grouped by layout, typography, colors, and
                      more
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-500 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50 mb-2">
                      Keyboard Navigation
                    </h3>
                    <p className="text-sm text-slate-400">
                      Navigate efficiently with keyboard shortcuts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links by Category */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-slate-50 font-mono">
              Browse by Category
            </h2>
            <div className="flex flex-col gap-3">
              {categories.map((category) => {
                const categoryTopics = topics.filter(
                  (t) => t.categoryId === category.id,
                );
                return (
                  <div
                    key={category.id}
                    className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-50">
                        {category.name}
                      </h3>
                      <span className="px-3 py-1 bg-slate-700 rounded-full text-xs font-semibold text-slate-300">
                        {categoryTopics.length} tricks
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categoryTopics.slice(0, 6).map((t) => (
                        <button
                          key={t.id}
                          onClick={() => onTopicSelect?.(t)}
                          className="px-3 py-1.5 bg-slate-700 hover:bg-blue-600 rounded text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                        >
                          {t.name}
                        </button>
                      ))}
                      {categoryTopics.length > 6 && (
                        <span className="px-3 py-1.5 text-sm text-slate-500">
                          +{categoryTopics.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-slate-50 font-mono mb-4">
              Getting Started
            </h2>
            <div className="flex flex-col gap-3 text-slate-300">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  1
                </span>
                <p className="text-sm">
                  Browse categories in the sidebar or use{" "}
                  <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">
                    ⌘K
                  </kbd>{" "}
                  to search
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  2
                </span>
                <p className="text-sm">
                  Click on any trick to see detailed explanations, code
                  comparisons, and live previews
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  3
                </span>
                <p className="text-sm">
                  Copy code snippets and apply them to your projects
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-900 min-w-0">
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

        {/* Content Sections — all 12 types handled */}
        {topic.content.sections.map((section, index) => {
          switch (section.type) {
            case "card":
              return <ContentCard key={index} data={section.data as CardData} />;
            case "workflow":
              return <WorkflowCard key={index} data={section.data as WorkflowData} />;
            case "code":
              return <CodeSnippet key={index} data={section.data as CodeData} />;
            case "preview":
              return <PreviewCard key={index} data={section.data as PreviewData} />;
            case "comparison":
              return <ComparisonCard key={index} data={section.data as ComparisonData} />;
            case "timeline":
              return <TimelineCard key={index} data={section.data as TimelineData} />;
            case "tip":
              return <TipCard key={index} data={section.data as TipData} />;
            case "table":
              return <TableCard key={index} data={section.data as TableData} />;
            case "list":
              return <ListCard key={index} data={section.data as ListData} />;
            case "quote":
              return <QuoteCard key={index} data={section.data as QuoteData} />;
            case "dosd\u043e\u043dts":
              return <DosDontsCard key={index} data={section.data as DosDontsData} />;
            case "livecomparison":
              return <LiveComparisonCard key={index} data={section.data as LiveComparisonData} />;
            default:
              return null;
          }
        })}
      </div>
    </main>
  );
}

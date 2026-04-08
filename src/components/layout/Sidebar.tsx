import { categories } from "@/data/categories";
import { topics } from "@/data/topics";
import type { Topic } from "@/types/topic";
import { useState } from "react";

interface SidebarProps {
  currentTopicId?: string;
  onTopicSelect: (topic: Topic) => void;
  onSearchClick: () => void;
}

export function Sidebar({
  currentTopicId,
  onTopicSelect,
  onSearchClick,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["layout"]),
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const getTopicsByCategory = (categoryId: string) => {
    return topics.filter((topic) => topic.categoryId === categoryId);
  };

  return (
    <aside className="w-[280px] h-full bg-slate-800 flex flex-col gap-4 p-6 overflow-y-auto">
      {/* Platform Title */}
      <h1 className="text-2xl font-bold text-slate-50 font-mono">CSS Tricks</h1>

      {/* Search Hint */}
      <button
        onClick={onSearchClick}
        className="w-full h-10 bg-slate-700 rounded-lg flex items-center gap-2 px-3 hover:bg-slate-600 transition-colors cursor-pointer"
      >
        <span className="text-xs font-semibold text-slate-400">⌘K</span>
        <span className="text-sm text-slate-400">Search tricks...</span>
      </button>

      {/* Categories */}
      <nav className="flex flex-col gap-4">
        {categories.map((category) => {
          const categoryTopics = getTopicsByCategory(category.id);
          const isExpanded = expandedCategories.has(category.id);

          return (
            <div key={category.id} className="flex flex-col gap-2">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full h-9 bg-slate-700 rounded-md flex items-center gap-2 px-3 hover:bg-slate-600 transition-colors cursor-pointer"
              >
                <span className="text-xs text-slate-400">
                  {isExpanded ? "▼" : "▶"}
                </span>
                <span className="text-sm font-semibold text-slate-50 flex-1 text-left">
                  {category.name}
                </span>
                <span className="w-6 h-5 bg-slate-600 rounded-full flex items-center justify-center text-xs font-semibold text-slate-50">
                  {categoryTopics.length}
                </span>
              </button>

              {/* Topic List */}
              {isExpanded && (
                <div className="flex flex-col gap-1 pl-4">
                  {categoryTopics.map((topic) => {
                    const isActive = topic.id === currentTopicId;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onTopicSelect(topic)}
                        className={`w-full h-8 rounded px-2 flex items-center text-sm transition-colors cursor-pointer ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-slate-700"
                        }`}
                      >
                        {topic.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

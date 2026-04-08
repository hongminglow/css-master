import { CategoryIcon } from "@/components/common/CategoryIcon";
import { categories } from "@/data/categories";
import { topics } from "@/data/topics";
import type { Topic } from "@/types/topic";
import { useEffect, useState } from "react";

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
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-expand category when a topic is selected
  useEffect(() => {
    if (currentTopicId) {
      const currentTopic = topics.find((t) => t.id === currentTopicId);
      if (currentTopic) {
        setExpandedCategories((prev) => {
          const next = new Set(prev);
          next.add(currentTopic.categoryId);
          return next;
        });
      }
    }
  }, [currentTopicId]);

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
    <aside
      className={`h-full bg-slate-800 flex flex-col gap-4 p-6 overflow-y-auto overflow-x-hidden transition-all duration-300 relative ${
        isCollapsed ? "w-[72px]" : "w-[280px]"
      }`}
    >
      {/* Toggle Button - Floating outside */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-6 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-all duration-300 cursor-pointer z-50 border-2 border-slate-900 shadow-lg"
        style={{
          left: isCollapsed ? "60px" : "268px",
        }}
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg
          className={`w-4 h-4 text-slate-300 transition-transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Platform Title */}
      {!isCollapsed ? (
        <h1 className="text-2xl font-bold text-slate-50 font-mono">
          CSS Tricks
        </h1>
      ) : (
        <div className="flex items-center justify-center">
          <svg
            className="w-8 h-8 text-blue-500"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M24 8L36 12L34 32L24 36L14 32L12 12L24 8Z"
              fill="currentColor"
            />
            <text
              x="24"
              y="26"
              fontFamily="monospace"
              fontSize="10"
              fontWeight="bold"
              fill="#f8fafc"
              textAnchor="middle"
            >
              CSS
            </text>
          </svg>
        </div>
      )}

      {/* Search Hint */}
      <button
        onClick={onSearchClick}
        className="w-full h-10 bg-slate-700 rounded-lg flex items-center gap-2 px-3 hover:bg-slate-600 transition-colors cursor-pointer"
        title="Search (⌘K)"
      >
        {!isCollapsed ? (
          <>
            <span className="text-xs font-semibold text-slate-400">⌘K</span>
            <span className="text-sm text-slate-400">Search tricks...</span>
          </>
        ) : (
          <svg
            className="w-5 h-5 text-slate-400 mx-auto"
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
        )}
      </button>

      {/* Categories */}
      <nav className="flex flex-col gap-4 flex-1">
        {categories.map((category) => {
          const categoryTopics = getTopicsByCategory(category.id);
          const isExpanded = expandedCategories.has(category.id);

          return (
            <div key={category.id} className="flex flex-col gap-2">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full h-9 bg-slate-700 rounded-md flex items-center gap-2 px-3 hover:bg-slate-600 transition-colors cursor-pointer"
                title={isCollapsed ? category.name : undefined}
              >
                {!isCollapsed ? (
                  <>
                    <span className="text-xs text-slate-400">
                      {isExpanded ? "▼" : "▶"}
                    </span>
                    <CategoryIcon
                      icon={category.icon}
                      className="w-4 h-4 text-slate-400"
                    />
                    <span className="text-sm font-semibold text-slate-50 flex-1 text-left">
                      {category.name}
                    </span>
                    <span className="w-6 h-5 bg-slate-600 rounded-full flex items-center justify-center text-xs font-semibold text-slate-50">
                      {categoryTopics.length}
                    </span>
                  </>
                ) : (
                  <CategoryIcon
                    icon={category.icon}
                    className="w-5 h-5 text-slate-400 mx-auto"
                  />
                )}
              </button>

              {/* Topic List */}
              {isExpanded && !isCollapsed && (
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

      {/* Version Label */}
      {!isCollapsed && (
        <div className="pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">Version</span>
            <span className="text-xs font-semibold text-slate-400">v1.0.0</span>
          </div>
        </div>
      )}
    </aside>
  );
}

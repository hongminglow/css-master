/**
 * Sidebar component for CSS Tricks Platform
 * Validates: Requirements 2.1, 2.2, 1.1
 */

import { useState } from "react";
import { Category } from "../../types/category";

interface SidebarProps {
  categories: Category[];
  currentTopicId: string | null;
  onTopicSelect: (topicId: string) => void;
}

export function Sidebar({
  categories,
  currentTopicId,
  onTopicSelect,
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["layout"]), // Default first category expanded
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

  // Sort categories by order
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white mb-2">CSS Tricks</h1>
        <p className="text-sm text-slate-400 mb-6">
          Discover overlooked CSS techniques
        </p>

        <nav className="space-y-2">
          {sortedCategories.map((category) => (
            <div key={category.id}>
              {/* CategoryAccordion will be implemented next - placeholder for now */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-3 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <span className="font-medium">{category.name}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    expandedCategories.has(category.id) ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Topics list - will be replaced with CategoryAccordion */}
              {expandedCategories.has(category.id) && (
                <div className="ml-3 mt-1 space-y-1 border-l border-slate-700 pl-3">
                  {/* Topics will be rendered here by CategoryAccordion */}
                  <div className="text-sm text-slate-500 py-2">
                    Topics will appear here
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

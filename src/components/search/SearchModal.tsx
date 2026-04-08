import { topics } from "@/data/topics/index";
import { useDebounce } from "@/hooks/useDebounce";
import { searchService } from "@/services/searchService";
import type { Topic } from "@/types/topic";
import { useEffect, useRef, useState } from "react";

interface SearchModalProps {
  onClose: () => void;
  onTopicSelect: (topic: Topic) => void;
}

export function SearchModal({ onClose, onTopicSelect }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce search query
  const debouncedQuery = useDebounce(query, 300);
  const results = searchService.search(debouncedQuery, topics, { limit: 10 });

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);



  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        onTopicSelect(results[selectedIndex].topic);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, selectedIndex, onClose, onTopicSelect]);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-[560px] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="h-13 bg-slate-700 flex items-center gap-3 px-4 border-b border-slate-600">
          <svg
            className="w-5 h-5 text-slate-400"
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
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search tricks..."
            className="flex-1 bg-transparent text-base text-slate-50 outline-none placeholder-slate-400"
          />
        </div>

        {/* Search Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {results.length === 0 && debouncedQuery && (
            <div className="p-4 text-center text-slate-400">
              No results found for "{debouncedQuery}"
            </div>
          )}
          {results.length === 0 && !debouncedQuery && (
            <div className="p-4 text-center text-slate-400">
              Start typing to search...
            </div>
          )}
          {results.map((result, index) => (
            <button
              key={result.topic.id}
              onClick={() => onTopicSelect(result.topic)}
              className={`w-full px-4 py-3 flex items-center justify-between text-left transition-colors cursor-pointer border-b border-slate-700 last:border-b-0 ${
                index === selectedIndex
                  ? "bg-blue-600"
                  : "hover:bg-slate-700/50"
              }`}
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`text-sm font-semibold ${
                    index === selectedIndex ? "text-white" : "text-slate-50"
                  }`}
                >
                  {result.topic.name}
                </span>
                <span
                  className={`text-xs ${
                    index === selectedIndex ? "text-blue-100" : "text-slate-400"
                  }`}
                >
                  {result.topic.tags.join(" • ")}
                </span>
              </div>
              {index === selectedIndex && (
                <svg
                  className="w-5 h-5 text-white"
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
              )}
            </button>
          ))}
        </div>

        {/* Search Footer */}
        <div className="h-10 bg-slate-800 flex items-center justify-center gap-4 border-t border-slate-700">
          <div className="flex items-center gap-1.5">
            <kbd className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-400">
              ↑↓
            </kbd>
            <span className="text-xs text-slate-500">Navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-400">
              ↵
            </kbd>
            <span className="text-xs text-slate-500">Select</span>
          </div>
          <div className="flex items-center gap-1.5">
            <kbd className="w-7 h-6 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-400">
              Esc
            </kbd>
            <span className="text-xs text-slate-500">Close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

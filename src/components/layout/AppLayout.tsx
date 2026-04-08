import React from "react";

interface AppLayoutProps {
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

/**
 * AppLayout Component
 *
 * Base layout component that provides the structure for the CSS Tricks Platform.
 * Features a fixed sidebar for navigation and a main content area for displaying topics.
 *
 * Layout Structure:
 * - Sidebar: Fixed position, full height, dark background (slate-900)
 * - Main Content: Flexible area with padding to account for sidebar width
 *
 * Requirements: 1.1 (Dark Theme), 7.1 (Enterprise Architecture)
 */
export const AppLayout: React.FC<AppLayoutProps> = ({
  sidebar,
  mainContent,
}) => {
  return (
    <div className="flex min-h-screen bg-slate-900">
      {/* Sidebar - Fixed navigation panel */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-700 overflow-y-auto">
        {sidebar}
      </aside>

      {/* Main Content Area - Offset by sidebar width */}
      <main className="flex-1 ml-64 bg-slate-900 min-h-screen">
        {mainContent}
      </main>
    </div>
  );
};

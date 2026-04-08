import { AppLayout } from "@/components/layout/AppLayout";
import { SearchModal } from "@/components/search/SearchModal";
import { topics } from "@/data/topics/index";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // Global search shortcut (Cmd+K or Ctrl+K)
  useKeyboardShortcut("k", () => setIsSearchOpen(true), { metaKey: true });
  useKeyboardShortcut("k", () => setIsSearchOpen(true), { ctrlKey: true });

  // Find current topic based on route
  const currentTopic = topics.find((topic) => topic.route === currentPath);

  return (
    <>
      <AppLayout
        currentTopic={currentTopic}
        onTopicSelect={(topic) => navigate(topic.route)}
        onSearchClick={() => setIsSearchOpen(true)}
      />
      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onTopicSelect={(topic) => {
            navigate(topic.route);
            setIsSearchOpen(false);
          }}
        />
      )}
    </>
  );
}

export default App;

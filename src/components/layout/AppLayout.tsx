import type { Topic } from "@/types/topic";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  currentTopic?: Topic;
  onTopicSelect: (topic: Topic) => void;
  onSearchClick: () => void;
}

export function AppLayout({
  currentTopic,
  onTopicSelect,
  onSearchClick,
}: AppLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar
        currentTopicId={currentTopic?.id}
        onTopicSelect={onTopicSelect}
        onSearchClick={onSearchClick}
      />
      <MainContent topic={currentTopic} onTopicSelect={onTopicSelect} />
    </div>
  );
}

import { useEffect, useRef } from "react";
import { scrollService } from "@/services/scrollService";
import { useRoute } from "@/hooks/useRoute";

/**
 * Hook to manage scroll restoration in a Single Page Application (SPA).
 * It listens to scroll events to silently record the scroll position in memory,
 * and restores it instantaneously when the route path changes.
 */
export function useScrollRestoration() {
  const scrollRef = useRef<HTMLElement>(null);
  const { currentPath } = useRoute();

  // Restore scroll position whenever the path formally changes.
  useEffect(() => {
    if (scrollRef.current) {
      const savedPosition = scrollService.getPosition(currentPath);
      // Immediately forcefully snap to the saved position (or top of page if unvisited)
      scrollRef.current.scrollTop = savedPosition;
    }
  }, [currentPath]);

  // Save scroll position invisibly as the user scrolls
  const handleScroll = () => {
    if (scrollRef.current) {
      scrollService.savePosition(currentPath, scrollRef.current.scrollTop);
    }
  };

  return { scrollRef, handleScroll };
}

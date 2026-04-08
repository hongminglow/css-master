import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Global map to store scroll positions by pathname
const scrollPositions = new Map<string, number>();

export function useScrollRestoration<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  // Save scroll position just before leaving current route
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      scrollPositions.set(location.pathname, element.scrollTop);
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // Also save directly on unmount/cleanup as a fallback
      scrollPositions.set(location.pathname, element.scrollTop);
      element.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Restore scroll position when entering a route
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (navigationType === "POP") {
      // Going back/forward: restore position
      const savedPosition = scrollPositions.get(location.pathname) || 0;
      element.scrollTop = savedPosition;
    } else {
      // New navigation: scroll to top
      element.scrollTop = 0;
    }
  }, [location.pathname, navigationType]);

  return ref;
}

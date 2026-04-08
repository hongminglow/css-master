import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: { ctrlKey?: boolean; metaKey?: boolean; shiftKey?: boolean } = {},
) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const { ctrlKey = false, metaKey = false, shiftKey = false } = options;

      const matchesModifiers =
        event.ctrlKey === ctrlKey &&
        event.metaKey === metaKey &&
        event.shiftKey === shiftKey;

      if (event.key.toLowerCase() === key.toLowerCase() && matchesModifiers) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, options]);
}

import { routeService } from "@/services/routeService";
import { useEffect, useState } from "react";

export function useRoute() {
  const [currentPath, setCurrentPath] = useState(routeService.getCurrentPath());

  useEffect(() => {
    const unsubscribe = routeService.subscribe(() => {
      setCurrentPath(routeService.getCurrentPath());
    });

    return unsubscribe;
  }, []);

  const navigate = (path: string) => {
    routeService.navigate(path);
  };

  return { currentPath, navigate };
}

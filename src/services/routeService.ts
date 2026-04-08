export class RouteService {
  private listeners: Set<() => void> = new Set();

  constructor() {
    window.addEventListener("popstate", () => {
      this.notifyListeners();
    });
  }

  navigate(path: string): void {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
      this.notifyListeners();
    }
  }

  getCurrentPath(): string {
    return window.location.pathname;
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export const routeService = new RouteService();

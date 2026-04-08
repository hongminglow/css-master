class ScrollService {
  private scrollPositions = new Map<string, number>();

  savePosition(path: string, position: number) {
    this.scrollPositions.set(path, position);
  }

  getPosition(path: string): number {
    return this.scrollPositions.get(path) ?? 0;
  }
}

export const scrollService = new ScrollService();

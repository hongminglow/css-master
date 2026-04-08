import type { SearchOptions, SearchResult } from "@/types/search";
import type { Topic } from "@/types/topic";
import { fuzzyMatch } from "@/utils/fuzzyMatch";

export class SearchService {
  search(
    query: string,
    topics: Topic[],
    options: SearchOptions = {},
  ): SearchResult[] {
    const { threshold = 0.3, limit = 10 } = options;

    if (!query.trim()) {
      return [];
    }

    const results: SearchResult[] = [];

    for (const topic of topics) {
      const nameScore = fuzzyMatch(query, topic.name);
      const descScore = fuzzyMatch(query, topic.description);
      const tagScores = topic.tags.map((tag) => fuzzyMatch(query, tag));
      const maxTagScore = Math.max(0, ...tagScores);

      const score = Math.max(nameScore * 1.5, descScore, maxTagScore);

      if (score >= threshold) {
        const matchedFields: string[] = [];
        if (nameScore > 0) matchedFields.push("name");
        if (descScore > 0) matchedFields.push("description");
        if (maxTagScore > 0) matchedFields.push("tags");

        results.push({ topic, score, matchedFields });
      }
    }

    return results.sort((a, b) => b.score - a.score).slice(0, limit);
  }
}

export const searchService = new SearchService();

/**
 * Fuzzy match algorithm
 * Returns a score between 0 and 1, where 1 is a perfect match
 */
export function fuzzyMatch(query: string, target: string): number {
  if (!query || !target) return 0;

  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();

  // Exact match
  if (targetLower === queryLower) return 1;

  // Contains match
  if (targetLower.includes(queryLower)) {
    return 0.8 - (targetLower.indexOf(queryLower) / targetLower.length) * 0.2;
  }

  // Character-by-character fuzzy match
  let queryIndex = 0;
  let targetIndex = 0;
  let matches = 0;

  while (queryIndex < queryLower.length && targetIndex < targetLower.length) {
    if (queryLower[queryIndex] === targetLower[targetIndex]) {
      matches++;
      queryIndex++;
    }
    targetIndex++;
  }

  if (matches === queryLower.length) {
    return 0.5 * (matches / targetLower.length);
  }

  return 0;
}

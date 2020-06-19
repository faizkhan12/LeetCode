import collections
class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        count = collections.Counter(words)
        candidates = count.keys()
        candidates1=sorted(candidates, key = lambda w: (-count[w], w))
        return list(candidates1)[:k]

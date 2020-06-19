class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if len(strs) < 1:
            return ""
        min_word,max_word = strs[0],strs[0]
        for w in strs:
            if min_word > w:
                min_word = w
            if max_word < w:
                max_word = w
        iter = min(len(min_word),len(max_word))
        res = 0
        for i in range(iter):
            if min_word[i] == max_word[i]:
                res+=1
            else:
                return min_word[:res]
        return min_word[:res]

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        s = set(nums)
        if len(s) == 0:
            return 0
        if len(s) == 1:
            for i in s:
                return i
        if len(s) == 2:
            return max(s)
        if len(s) == 3:
            return min(s)
        if len(s) > 3:
            s.remove(max(s))
            s.remove(max(s))
            return max(s)

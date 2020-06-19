class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        c1 = nums[-1] * nums[-2] * nums[-3]
        c2 = nums[0] * nums[1] * nums[-1]
        maximum = max(c1,c2)
        return maximum

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        lag = 0
        i = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                if lag < i:
                    nums[lag],nums[i] = nums[i],nums[lag]
                lag += 1
        

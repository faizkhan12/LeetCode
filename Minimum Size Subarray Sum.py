import sys
class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        val_sum = 0
        left = 0
        result = sys.maxsize
        for i in range(len(nums)):
            val_sum += nums[i]
            while(val_sum >= s):
                result = min(result,i+1-left)
                val_sum -= nums[left]
                left += 1 
        return result if result!= sys.maxsize else 0
            
        

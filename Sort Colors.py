class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count = [0, 0]
        for i in nums:
            curr = nums.pop()
            if curr == 0:
                nums.insert(0,0)
                count[0] += 1
            elif curr == 1:
                nums.insert(count[0], 1)
                count[1] += 1
            else:
                nums.insert(count[0] + count[1], 2)
                
        

class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        largest = ''.join(sorted(map(str,nums), key=LargestNumberKey))
        if largest[0] == '0':
            return '0'
        else:
            return largest
        
class LargestNumberKey(str):
    def __lt__(x,y):
        return x + y > y + x

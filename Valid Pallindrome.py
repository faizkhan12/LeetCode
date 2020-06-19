import re
class Solution:
    def isPalindrome(self, s: str) -> bool:
        word = re.sub("\W+",'',s.lower())
        return word == word[::-1]

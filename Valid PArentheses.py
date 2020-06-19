class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) %2 != 0:
            return False
        opening = set(['(','[','{'])
        matches = {'(':')','[':']','{':'}'}
        stack = []
        for i in s:
            if i in opening:
                stack.append(i)
            elif stack and i == matches[stack[-1]]:
                stack.pop()
            else:
                return False
        return stack == []

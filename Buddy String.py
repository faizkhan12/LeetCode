class Solution:
    def buddyStrings(self, A: str, B: str) -> bool:
        if len(A) != len(B):
            return False 
        diff = {}
        for i in range(len(A)):
            if A[i] != B[i]:
                diff[i] = A[i]
        
        if len(diff) == 2:
            i,j = diff.keys()
            A = list(A)
            A[i],A[j] = A[j],A[i]
            return "".join(A) == B
        elif len(diff) == 0 and A == B and len(A) > len(set(A)):
            return True
        else:
            return False

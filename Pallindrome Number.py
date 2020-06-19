class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if(x==0):
            return True
        if(x<0 or x%10 == 0):
            return False
        res = 0
        temp = x
        while(x>res):
            rev = x%10
            temp = x
            res = res * 10 + rev
            x=x//10
        if(x == res or temp == res):
            return True
        else:
            return False

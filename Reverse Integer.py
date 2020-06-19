class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        res = 0
        temp = abs(x)
        while(temp!=0):
            rev = temp%10
            res = res * 10 + rev
            temp =  int(temp/10)
        if x>0 and res <2**31:
            return res
        elif x<0 and res <= 2**31:
            return -res
        else:
            return 0

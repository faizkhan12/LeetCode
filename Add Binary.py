class Solution:
    def addBinary(self, a: str, b: str) -> str:
        max_len = max(len(a), len(b))
        a = a.zfill(max_len)
        b = b.zfill(max_len)
        result = ''
        carry = 0
        for i in range(max_len - 1, -1, -1):
            r = carry
            if a[i] == '1':
                r = r + 1
            else:
                r = r + 0
            if b[i] =='1':
                r = r + 1
            else:
                r = r + 0
            if r % 2 == 1:
                result ='1' + result
            else:
                result ='0' + result
            if r < 2:
                carry = 0
            else:
                carry = 1
        if carry != 0:
            result = '1' + result
        return result.zfill(max_len)

import sys
def maxSize(arr,k):
    max_sum = -sys.maxsize
    n = len(arr)
    windows_sum = sum([arr[i] for i in range(k)])
    for i in range(n - k):
        windows_sum = windows_sum - arr[i] + arr[i + k]
        max_sum = max(windows_sum,max_sum)

    return max_sum

arr = [100,200,300,400]
k = 2
print(maxSize(arr,k))

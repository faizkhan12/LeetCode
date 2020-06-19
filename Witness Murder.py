def witness(height):
    max_height = float('-inf')
    flag = 0
    for i in range(len(height) - 1,-1,-1):
        if(height[i] > max_height):
            flag += 1
            max_height = max(height[i], max_height)
    return flag

print(witness([3, 6, 3, 4, 1]))
# 3
print(witness([3, 4, 4, 4, 1]))
# 2
print(witness([-1, -3, -7, -2]))
# 2

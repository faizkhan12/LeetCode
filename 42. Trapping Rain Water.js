/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height === null)
        return null

    let totalWater = 0
    let length = height.length
    let left = []
    let right = []

    left[0] = height[0]
    for (let i = 1; i < length; i++) {
        left[i] = Math.max(height[i], left[i - 1])
    }
    right[length - 1] = height[length - 1]
    for (let i = length - 2; i > 0; i--) {
        right[i] = Math.max(height[i], right[i + 1])
    }
    for (let i = 1; i < length - 1; i++) {
        totalWater += Math.min(left[i], right[i]) - height[i]
    }
    return totalWater
};
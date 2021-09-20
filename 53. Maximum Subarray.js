/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = 0
  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) currentSum = 0
    currentSum += nums[i]

    if (currentSum > maxSum) {
      maxSum = currentSum
    }
  }
  return maxSum
}

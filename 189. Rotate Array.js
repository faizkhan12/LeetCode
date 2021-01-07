/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let a = [nums.length]

    // 1st loop to put the numbers i nthe new array
    for (let i = 0; i < nums.length; i++) {
        a[(i + k) % nums.length] = nums[i]
    }
    // 2nd loop to copy the new array to the new array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = a[i]
    }
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = []
    let map = new Map()
    let ans = []

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            let pop = stack.pop()
            map.set(pop, nums2[i])
        }
        stack.push(nums2[i])
    }

    for (let i = 0; i < nums1.length; i++) {
        map.has(nums1[i]) ? ans.push(map.get(nums1[i])) : ans.push(-1)
    }
    return ans
};
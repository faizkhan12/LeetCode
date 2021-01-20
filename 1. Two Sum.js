/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i]
        if (map.has(compliment)) {
            res.push(map.get(compliment))
            res.push(i)
            return res
        }
        map.set(nums[i], i)
    }
};
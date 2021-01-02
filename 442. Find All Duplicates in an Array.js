/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var output_arr = []
    for(var i = 0; i < nums.length; i++){
        var index = Math.abs(nums[i]) - 1
        if(nums[index] < 0)
            output_arr.push(index+1)
    nums[index] = -nums[index]
    }
    return output_arr
};
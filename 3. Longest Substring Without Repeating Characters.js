/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let ans = 0
    let map = new Map()

    for (let j = 0, i = 0; j < s.length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i)
        }

        ans = Math.max(ans, j - i + 1)
        map.set(s.charAt(j), j + 1)
    }
    return ans
};
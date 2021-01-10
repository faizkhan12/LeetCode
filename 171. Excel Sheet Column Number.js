/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let ans = 0
    let p = 0
    for (let i = s.length - 1; i >= 0; i--) {
        //   let c = s.charAt(i)
        let val = s.charCodeAt(i) - 65 + 1
        ans += val * Math.pow(26, p)
        p++
    }
    return ans
};
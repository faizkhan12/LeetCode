/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let count = 0
    while (n > 0) {
        count = count + Math.floor(n / 5)
        n = n / 5
    }
    return count

};
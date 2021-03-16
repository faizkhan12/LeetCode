/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i of s) {
        if (!map[i]) {
            stack.push(i)
        } else if (stack.pop() !== map[i])
            return false
    }
    return stack.length === 0
};
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {}

  for (let i of s) {
    if (obj[i] == null) obj[i] = 0
    obj[i] += 1
  }

  // check the uniqueness
  for (let i in obj) {
    if (obj[i] == 1) return s.indexOf(i)
  }
  return -1
}

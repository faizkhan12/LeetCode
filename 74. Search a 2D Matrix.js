/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0
  let j = matrix.length - 1

  while (i < j) {
    const middle = Math.ceil((i + j) / 2)
    const num = matrix[middle][0]

    if (num === target) {
      return true
    } else if (num < target) {
      i = middle
    } else {
      j = middle - 1
    }
  }

  let k = 0
  let l = matrix[i].length - 1

  while (k <= l) {
    const middle = Math.floor((k + l) / 2)
    const num = matrix[i][middle]

    if (num === target) {
      return true
    } else if (num < target) {
      k = middle + 1
    } else {
      l = middle - 1
    }
  }

  return false
}

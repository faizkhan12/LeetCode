/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let R = matrix.length
    let C = matrix[0].length
    let rows = new Set()
    let cols = new Set()

    // step 1: make a pass over original array and look for zero entries
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }

    // step 2: iterate oover the original matrix and update the elements with 0
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
};
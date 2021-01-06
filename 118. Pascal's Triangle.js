/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var triangle = []
    if (numRows == 0)
        return triangle

    var first_row = []
    first_row.push(1)
    triangle.push(first_row)

    for (let i = 1; i < numRows; i++) {
        let prev_row = triangle[i - 1]
        let current_row = []
        current_row.push(1)

        for (let j = 1; j < i; j++) {
            current_row.push(prev_row[j - 1] + prev_row[j])
        }
        current_row.push(1)
        triangle.push(current_row)
    }
    return triangle
};
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    let n = arr.length
    let pre = [n]
    pre[0] = arr[0]

    for (let i = 1; i < n; i++) {
        pre[i] = pre[i - 1] ^ arr[i]
    }
    let res = []
    for (let i = 0; i < queries.length; i++) {
        let l = queries[i][0]
        let r = queries[i][1]
        if (l == 0)
            res.push(pre[r])
        else
            res.push(pre[r] ^ pre[l - 1])
    }
    return res
};
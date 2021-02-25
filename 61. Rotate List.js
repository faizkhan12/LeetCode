/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null)
        return null
    let n = 1
    let tail = head
    while (tail.next !== null) {
        n += 1
        tail = tail.next
    }

    k %= n
    if (k === 0)
        return head

    let stepsToNewHead = n - k
    tail.next = head
    let newTail = tail

    while (stepsToNewHead-- > 0) {
        newTail = newTail.next
    }

    let newHead = newTail.next
    newTail.next = null
    return newHead
};
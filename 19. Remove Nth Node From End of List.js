/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let result = new ListNode()
    result.next = head

    let slow = result
    let fast = result

    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next
    }

    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next

    return result.next

};
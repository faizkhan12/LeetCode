/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let slow = head
    let stack = []
    let isPalin = true

    while (slow !== null) {
        stack.push(slow.val)
        slow = slow.next
    }

    while (head !== null) {
        let i = stack.pop()
        if (head.val === i)
            isPalin = true
        else {
            isPalin = false
            break
        }
        head = head.next
    }
    return isPalin
};
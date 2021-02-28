/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // if (head === null && head.next === null) {
    //     return null
    // }
    let intersect = intersection(head)
    if (intersect === null) {
        return null
    }
    let start = head
    while (intersect !== start) {
        start = start.next
        intersect = intersect.next
    }
    return start
};

var intersection = function (head) {
    let slow = head
    let fast = head

    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            return slow
        }
    }
    return null
}
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let current = head

    while (current !== null) {
        let copy = new Node(current.val)
        copy.next = current.next
        current.next = copy
        current = current.next.next
    }
    current = head
    while (current !== null) {
        current.next.random = current.random === null ? null : current.random.next
        current = current.next.next
    }

    let dummyHead = new Node(-1)
    let dummy = dummyHead
    current = head

    while (current !== null) {
        dummy.next = current.next
        dummy = dummy.next
        current.next = current.next.next
        current = current.next
    }
    return dummyHead.next
};
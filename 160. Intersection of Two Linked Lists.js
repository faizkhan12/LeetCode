/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // edge case 
    if (headA === null || headB === null)
        return null

    let a_pointer = headA
    let b_pointer = headB

    while (a_pointer !== b_pointer) {
        if (a_pointer === null)
            a_pointer = headB
        else
            a_pointer = a_pointer.next
        if (b_pointer === null)
            b_pointer = headA
        else
            b_pointer = b_pointer.next
    }
    return a_pointer
};
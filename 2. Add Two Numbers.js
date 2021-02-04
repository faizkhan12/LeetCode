/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let tail, head = null;
    let prevTenth = 0;

    while (l1 || l2) { // continue until any of l1 and l2 is not NULL
        let sum = 0;

        sum += l1 ? l1.val : 0; // Get value from l1 node, or 0 if l1 is NULL
        sum += l2 ? l2.val : 0; // Get value from l2 node, or 0 if l1 is NULL

        l1 = l1 ? l1.next : l1; // Move l1 pointer to next node
        l2 = l2 ? l2.next : l2; // Move l2 pointer to next node

        let curVal = (sum + prevTenth) % 10;  // Store curVal
        prevTenth = Math.floor((sum + prevTenth) / 10); // Get tenth of curVal

        if (!head) {
            tail = head = new ListNode(curVal); // since head and tail were empty, we need to set to new ListNode
        }
        else {
            tail.next = new ListNode(curVal);
            tail = tail.next;
        }
    }
    if (prevTenth > 0) {  // if after itetaion, we have prevTenth, which is not added to our list yet, ex: 9+9 => 8 -> 1 (1 is this prevTenth)
        tail.next = new ListNode(prevTenth);
    }

    return head;
};
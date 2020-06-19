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
var removeZeroSumSublists = function(head) {
    const dummy = {};
    dummy.next = head;
    const hm = new Map();
    let pSum = 0;
    hm.set(pSum,dummy);
    while(head){
        pSum += head.val;
        if(hm.has(pSum)){
            let to_remove = hm.get(pSum).next;
            SUM = pSum;
            while(to_remove != head){
                SUM += to_remove.val;
                hm.delete(SUM);
                to_remove = to_remove.next;
            }
            hm.get(pSum).next = head.next;
        }else
            hm.set(pSum,head);
            head = head.next;
        
    }
    return dummy.next;
};
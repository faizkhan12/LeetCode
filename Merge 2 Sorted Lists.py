# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = temp = ListNode(0)
        if l1 is None:
            return l2
        if l2 is None:
            return l1
        while(l1 and l2):
            if(l1.val < l2.val):
                temp.next = l1
                l1 = l1.next
                temp = temp.next
            elif(l1.val >= l2.val):
                temp.next = l2
                l2 = l2.next
                temp = temp.next
        temp.next = l1 or l2
        return head.next

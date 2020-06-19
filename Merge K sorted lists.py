# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        self.nodes = []
        head = point = ListNode(0)
        for i in lists:
            while i:
                self.nodes.append(i.val)
                i = i.next
        for j in sorted(self.nodes):
            point.next = ListNode(j)
            point = point.next
            
        return head.next

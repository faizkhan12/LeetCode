# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if headA == None or headB == None:
            return None
        
        pointerA = headA
        pointerB = headB
        swapA = 0
        swapB = 0
        
        while(True):
            if pointerA == pointerB:
                return pointerA
            if pointerA != None:
                pointerA = pointerA.next
            else:
                pointerA = headB
                swapA = swapA + 1
            
            if pointerB != None:
                pointerB = pointerB.next
            else:
                pointerB = headA
                swapB = swapB + 1
            #if swapA == 2 and swapB == 2:
             #   return None

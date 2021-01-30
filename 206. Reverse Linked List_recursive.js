var reverseList = function (head) {


    // recursive method 
    if (head === null || head.next === null) {
        return head
    }
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p

}
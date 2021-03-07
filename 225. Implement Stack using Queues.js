/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue = new Queue1()
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    let rotation = this.queue.size()
    this.queue.enqueue(x)

    while (rotation > 0) {
        this.queue.enqueue(this.queue.dequeue())
        rotation--
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.queue.dequeue()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue.peek()
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.isEmpty()
};

class Queue1 {
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.storage = {};
    }

    enqueue(val) {
        this.storage[this.top] = val;
        this.top++;
    }

    dequeue() {
        let removedElement = this.storage[this.bottom];
        delete this.storage[this.bottom];
        this.bottom++;
        return removedElement;
    }

    peek() {
        return this.storage[this.bottom];
    }

    size() {
        return this.top - this.bottom;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
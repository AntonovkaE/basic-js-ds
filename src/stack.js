const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.store = {}
    this.size = 0
  }
  push(element) {
    this.size++;
    this.store[this.size] = element;
  }

  pop() {
    let remove = this.store[this.size]
    delete this.store[this.size]
    this.size--
    return remove
    // remove line with error and write your code here
  }

  peek() {
    return this.store[this.size]
  }
}

module.exports = {
  Stack
};

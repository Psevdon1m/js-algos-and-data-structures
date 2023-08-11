/**
 * Represents a Node with a value and a reference to the next node.
 * @class Node
 * @param {*} value - The value to be stored in the node.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Represents a Stack data structure.
 * @class Stack
 */
class Stack {
  /**
   * Creates a new Stack instance.
   * @constructor
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Pushes a new value onto the stack.
   * @method push
   * @param {*} value - The value to be pushed onto the stack.
   * @returns {number} The new length of the stack.
   * @example
   * const stack = new Stack();
   * stack.push("1"); // Returns: 1
   * stack.push("2"); // Returns: 2
   */
  push(value) {
    let node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      let prevLastNode = this.first;
      this.first = node;
      this.first.next = prevLastNode;
    }
    return ++this.length;
  }

  /**
   * Removes and returns the value from the top of the stack.
   * @method pop
   * @returns {*} The value removed from the top of the stack.
   * @example
   * const stack = new Stack();
   * stack.push("1");
   * stack.push("2");
   * stack.push("3");
   * stack.push("4");
   * stack.pop(); // Returns: "4"
   */
  pop() {
    if (!this.length) return null;
    let nodeToRemove = this.first;
    if (this.length === 1) {
      this.first.next = null;
      this.last = null;
    } else {
      this.first = nodeToRemove.next;
    }
    this.length--;
    return nodeToRemove.value;
  }
}

// Example usage:
const stack = new Stack();
console.log(stack.push("1"));
stack.push("2");
stack.push("3");
stack.push("4");
console.log(stack.pop());
console.log(stack);

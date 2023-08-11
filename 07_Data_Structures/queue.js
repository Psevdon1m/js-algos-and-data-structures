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
 * Represents a Queue data structure.
 * @class Queue
 */
class Queue {
  /**
   * Create a new Queue.
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Add a new value to the end of the queue.
   * @method enqueue
   * @param {*} value - The value to be enqueued.
   * @returns {number} The new length of the queue.
   * @example
   * const queue = new Queue();
   * queue.enqueue("1"); // Returns 1
   * queue.enqueue("2"); // Returns 2
   */
  enqueue(value) {
    let node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.length;
  }

  /**
   * Remove and return the value from the front of the queue.
   * @method dequeue
   * @returns {*} The value that was dequeued, or null if the queue is empty.
   * @example
   * const queue = new Queue();
   * queue.enqueue("1");
   * queue.enqueue("2");
   * queue.dequeue(); // Returns "1"
   * queue.dequeue(); // Returns "2"
   * queue.dequeue(); // Returns null
   */
  dequeue() {
    if (!this.length) return null;
    let nodeToRemove = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
    return nodeToRemove.value;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);

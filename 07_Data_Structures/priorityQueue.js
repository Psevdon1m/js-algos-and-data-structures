/**
 * Represents a node with a value and priority.
 *
 * @class Node
 * @param {*} value - The value of the node.
 * @param {number} priority - The priority of the node.
 */

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * Implements a priority queue data structure.
 *
 * @class PriorityQueue
 */

class PriorityQueue {
  /**
   * Creates a new instance of PriorityQueue.
   *
   * @constructor
   */
  constructor() {
    this.values = [];
  }

  /**
   * Adds an element to the priority queue.
   *
   * @method enqueue
   * @param {*} value - The value to enqueue.
   * @param {number} priority - The priority of the value.
   * @returns {Array} The updated priority queue.
   */

  enqueue(value, priority) {
    let node = new Node(value, priority);

    let childIndex = this.values.push(node) - 1;
    if (this.values.length === 1) return this.values;

    let parentNodeIndex = Math.floor((childIndex - 1) / 2);
    while (
      this.values[childIndex].priority < this.values[parentNodeIndex]?.priority
    ) {
      this.swap(this.values, parentNodeIndex, childIndex);
      childIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }

  /**
   * Removes and returns the highest-priority element from the queue.
   *
   * @method dequeue
   * @returns {*} The highest-priority element.
   */

  dequeue() {
    if (!this.values.length) return;
    this.swap(this.values, 0, this.values.length - 1);
    let extractedValue = this.values.pop();
    let indexOfWrongParent = 0;
    let indexOfLChild = 2 * indexOfWrongParent + 1;
    let indexOfRChild = 2 * indexOfWrongParent + 2;
    if (indexOfLChild >= this.values.length) {
      indexOfLChild = this.values.length - 1;
    }
    if (indexOfRChild >= this.values.length) {
      indexOfRChild = this.values.length - 1;
    }

    while (
      this.values[indexOfWrongParent]?.priority >
        this.values[indexOfLChild]?.priority ||
      this.values[indexOfWrongParent]?.priority >
        this.values[indexOfRChild]?.priority
    ) {
      if (
        this.values[indexOfLChild].priority >
        this.values[indexOfRChild].priority
      ) {
        this.swap(this.values, indexOfWrongParent, indexOfRChild);
        indexOfWrongParent = indexOfRChild;
        indexOfLChild = 2 * indexOfWrongParent + 1;
        indexOfRChild = 2 * indexOfWrongParent + 2;
      } else {
        this.swap(this.values, indexOfWrongParent, indexOfLChild);
        indexOfWrongParent = indexOfLChild;
        indexOfLChild = 2 * indexOfWrongParent + 1;
        indexOfRChild = 2 * indexOfWrongParent + 2;
      }
    }
    return extractedValue;
  }

  /**
   * An alternative implementation of dequeue.
   *
   * @method dequeueAlternative
   * @returns {*} The highest-priority element.
   */

  dequeueAlternative() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  /**
   * Moves the element down the queue to maintain the heap property.
   *
   * @method sinkDown
   */

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  /**
   * Swaps two elements in the given array.
   *
   * @method swap
   * @param {number[]} array - The array in which elements should be swapped.
   * @param {number} index1 - The index of the first element to be swapped.
   * @param {number} index2 - The index of the second element to be swapped.
   * @private
   */

  swap(array, index1, index2) {
    return ([array[index1], array[index2]] = [array[index2], array[index1]]);
  }
}
// Example usage

let hospitalQueue = new PriorityQueue();
hospitalQueue.enqueue("Low Fever", 3);
hospitalQueue.enqueue("Concussion", 2);
hospitalQueue.enqueue("Drunk", 3);
hospitalQueue.enqueue("Head exploaded", 1);
hospitalQueue.enqueue("Flu", 2);
console.log(hospitalQueue);
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());

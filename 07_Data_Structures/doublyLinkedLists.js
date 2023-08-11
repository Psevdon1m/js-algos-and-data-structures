/**
 * @class Node
 * Represents a node in a doubly linked list.
 * @param {*} value - The value to be stored in the node.
 * @property {*} value - The value stored in the node.
 * @property {Node} next - Reference to the next node.
 * @property {Node} prev - Reference to the previous node.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @class DoublyLinkedList
 * Represents a doubly linked list data structure.
 * @property {Node} head - Reference to the first node in the list.
 * @property {Node} tail - Reference to the last node in the list.
 * @property {number} length - The number of nodes in the list.
 */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log("list items  are: ", arr);
  }

  /**
   * Add a new node with the given value to the end of the list.
   * @param {*} value - The value to be added.
   * @returns {DoublyLinkedList} The modified list.
   * @example
   * const list = new DoublyLinkedList();
   * list.push(1).push(2).push(3);
   */

  push(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  /**
   * Remove and return the last node from the list.
   * @returns {Node} The removed node.
   * @example
   * const list = new DoublyLinkedList();
   * list.push(1).push(2);
   * const removedNode = list.pop(); // Returns the node with value 2
   */

  pop() {
    if (!this.head) return;
    let tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length--;
    return tail;
  }

  /**
   * Remove and return the first node from the list.
   * @returns {Node} The removed node.
   */

  shift() {
    if (!this.length) return;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  /**
   * Add a new node with the given value to the beginning of the list.
   * @param {*} value - The value to be added.
   * @returns {DoublyLinkedList} The modified list.
   */

  unshift(val) {
    let node = new Node(val);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  /**
   * Get the node at the specified index.
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node|null} The node at the specified index, or null if not found.
   */

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index > Math.floor(this.length / 2)) {
      //begin from end
      current = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        current = current.prev;
      }
    } else {
      //begin from start
      current = this.head;
      for (let i = 0; i !== index; i++) {
        current = current.next;
      }
    }
    return current;
  }

  /**
   * Set the value of the node at the specified index.
   * @param {*} value - The new value to set.
   * @param {number} index - The index of the node to update.
   * @returns {boolean} True if the update was successful, false otherwise.
   */

  set(value, index) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  /**
   * Insert a new node with the given value at the specified index.
   * @param {*} value - The value to be inserted.
   * @param {number} index - The index at which to insert the value.
   * @returns {boolean} True if the insertion was successful, false otherwise.
   */

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let oldNode = this.get(index);
    let preNode = oldNode.prev;
    (preNode.next = newNode), (newNode.prev = preNode);
    (newNode.next = oldNode), (oldNode.prev = newNode);
    this.length++;
    return true;
  }

  /**
   * Remove and return the node at the specified index.
   * @param {number} index - The index of the node to remove.
   * @returns {*} The value of the removed node, or false if not found.
   */

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift()?.value;
    if (index === this.length - 1) return this.pop()?.value;
    let targetItem = this.get(index);
    let itemBefore = targetItem.prev;
    let itemNext = targetItem.next;
    (targetItem.next = null), (targetItem.prev = null);
    (itemBefore.next = itemNext), (itemNext.prev = itemBefore);
    this.length--;
    return targetItem.value;
  }
}

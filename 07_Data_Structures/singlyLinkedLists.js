/**
 * Represents a node in a singly linked list.
 * @class Node
 */
class Node {
  /**
   * Create a new node.
   * @param {*} val - The value to be stored in the node.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Represents a singly linked list.
 * @class SinglyLinkedList
 */
class SinglyLinkedList {
  /**
   * Create a new singly linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Add a new element to the end of the list.
   * @param {*} val - The value to be added.
   * @returns {SinglyLinkedList} The updated list.
   * @method push
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   */
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Remove and return the last element from the list.
   * @returns {*} The value of the removed element.
   * @method pop
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.pop(); // Returns 2
   */
  pop() {
    if (!this.head) return;
    let temp = this.head;
    let pre = temp;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return temp.val;
  }

  /**
   * Remove and return the first element from the list.
   * @returns {*} The value of the removed element.
   * @method shift
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.shift(); // Returns 1
   */
  shift() {
    if (!this.length) return;
    let curHead = this.head;
    this.head = curHead.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return curHead;
  }

  /**
   * Add a new element to the beginning of the list.
   * @param {*} val - The value to be added.
   * @returns {SinglyLinkedList} The updated list.
   * @method unshift
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.unshift(1);
   * list.unshift(2);
   */
  unshift(val) {
    let curHead = this.head;
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head = newHead;
      this.head.next = curHead;
    }
    this.length++;
    return this;
  }

  /**
   * Get the element at a specified index.
   * @param {number} index - The index of the element to retrieve.
   * @returns {Node|null} The element at the specified index, or null if the index is invalid.
   * @method get
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.get(1); // Returns the Node with value 2
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let temp = this.head;
    while (i !== index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }

  /**
   * Set the value of an element at a specified index.
   * @param {number} index - The index of the element to update.
   * @param {*} value - The new value for the element.
   * @returns {boolean} True if the update was successful, false if the index is invalid.
   * @method set
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.set(1, 3); // Returns true, updates the value of the second element to 3
   */
  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.val = value;
    return true;
  }

  /**
   * Insert a new element at a specified index.
   * @param {number} index - The index at which to insert the element.
   * @param {*} value - The value to be inserted.
   * @returns {boolean} True if the insertion was successful, false if the index is invalid.
   * @method insert
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(3);
   * list.insert(1, 2); // Returns true, inserts the value 2 between 1 and 3
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(value);
    } else if (index === this.length) {
      return !!this.push(value);
    } else {
      let preNode = this.get(index - 1);
      let node = new Node(value);
      node.next = preNode.next;
      preNode.next = node;
      this.length++;
      return true;
    }
  }

  /**
   * Remove the element at a specified index.
   * @param {number} index - The index of the element to remove.
   * @returns {Node|null} The removed element, or null if the index is invalid.
   * @method remove
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.push(3);
   * list.remove(1); // Returns the Node with value 2, removes it from the list
   */
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let prev = this.get(index - 1);
    let cur = prev.next;
    prev.next = cur.next;
    this.length--;
    return cur;
  }

  /**
   * Reverse the order of elements in the list.
   * @returns {SinglyLinkedList} The reversed list.
   * @method reverse
   * @memberof SinglyLinkedList
   * @instance
   * @example
   * const list = new SinglyLinkedList();
   * list.push(1);
   * list.push(2);
   * list.push(3);
   * list.reverse(); // Returns the reversed list [3, 2, 1]
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

/**
 * @title Binary Search Tree
 * @summary Implementation of a Binary Search Tree (BST) data structure.
 *
 * @class Node
 * @param {any} value - The value to be stored in the node.
 * @property {any} value - The value stored in the node.
 * @property {Node} left - The left child node.
 * @property {Node} right - The right child node.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * @class BinarySearchTree
 * @summary Implementation of a Binary Search Tree (BST) data structure.
 *
 * @property {Node} root - The root node of the BST.
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * @method insert
   * Inserts a value into the Binary Search Tree.
   * @param {any} value - The value to be inserted.
   * @returns {BinarySearchTree} - The modified BinarySearchTree instance.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   */

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let isFound = false;
    let targetNode = this.root;
    while (!isFound) {
      if (node.value === targetNode.value) return;
      if (node.value > targetNode.value) {
        if (targetNode.right) {
          targetNode = targetNode.right;
        } else {
          targetNode.right = node;
          isFound = true;
        }
      } else if (node.value < targetNode.value) {
        if (targetNode.left) {
          targetNode = targetNode.left;
        } else {
          targetNode.left = node;
          isFound = true;
        }
      }
    }
    return this;
  }

  /**
   * @method find
   * Finds if a value exists in the Binary Search Tree.
   * @param {any} value - The value to be searched.
   * @returns {boolean} - True if the value is found, false otherwise.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   * bst.find(6); // Returns: true
   * bst.find(15); // Returns: false
   */

  find(value) {
    if (!this.root) return false;
    let node = new Node(value);

    let targetNode = this.root;
    while (true) {
      if (node.value > targetNode.value) {
        if (targetNode.right) {
          targetNode = targetNode.right;
        } else {
          return false;
        }
      } else if (node.value < targetNode.value) {
        if (targetNode.left) {
          targetNode = targetNode.left;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }
  }

  /**
   * @method breadthFirstSearch
   * Performs a breadth-first search traversal of the Binary Search Tree.
   * @returns {Array} - An array containing the values in breadth-first order.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   * bst.insert(15);
   * bst.insert(3);
   * bst.insert(8);
   * bst.insert(20);
   * bst.breadthFirstSearch(); // Returns:  [ 10, 6, 15, 3, 8, 20 ]
   */

  breadthFirstSearch() {
    let node;
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /**
   * @method depthFirstSearchPreOrder
   * Performs a depth-first search traversal of the Binary Search Tree in pre-order.
   * @param {Node} [currentNode=this.root] - The current node (starting from the root).
   * @returns {Array} - An array containing the values in pre-order.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   * bst.insert(15);
   * bst.insert(3);
   * bst.insert(8);
   * bst.insert(20);
   * bst.depthFirstSearchPreOrder(); // Returns: [ 10, 6, 3, 8, 15, 20 ]
   */

  depthFirstSearchPreOrder(currentNode = this.root) {
    let visited = [];
    function searchHelper(node) {
      visited.push(node.value);
      if (node.left) searchHelper(node.left);
      if (node.right) searchHelper(node.right);
    }
    searchHelper(currentNode);
    return visited;
  }

  /**
   * @method depthFirstSearchPostOrder
   * Performs a depth-first search traversal of the Binary Search Tree in post-order.
   * @param {Node} [currentNode=this.root] - The current node (starting from the root).
   * @returns {Array} - An array containing the values in post-order.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   * bst.insert(15);
   * bst.insert(3);
   * bst.insert(8);
   * bst.insert(20);
   * bst.depthFirstSearchPostOrder(); // Returns: [ 3, 8, 6, 20, 15, 10 ]
   */

  depthFirstSearchPostOrder(currentNode = this.root) {
    let visited = [];
    function searchHelper(node) {
      if (node.left) searchHelper(node.left);
      if (node.right) searchHelper(node.right);
      visited.push(node.value);
    }
    searchHelper(currentNode);
    return visited;
  }

  /**
   * @method depthFirstSearchInOrder
   * Performs a depth-first search traversal of the Binary Search Tree in in-order.
   * @param {Node} [currentNode=this.root] - The current node (starting from the root).
   * @returns {Array} - An array containing the values in in-order.
   * @example
   * const bst = new BinarySearchTree();
   * bst.insert(10);
   * bst.insert(6);
   * bst.insert(15);
   * bst.insert(3);
   * bst.insert(8);
   * bst.insert(20);
   * bst.depthFirstSearchInOrder(); // Returns: [6, 8, 10,15,20]
   */

  depthFirstSearchInOrder(currentNode = this.root) {
    let visited = [];
    function searchHelper(node) {
      node.left && searchHelper(node.left);
      visited.push(node.value);
      node.right && searchHelper(node.right);
    }
    searchHelper(currentNode);
    return visited;
  }
}

let root = new BinarySearchTree();
root.insert(10);
root.insert(6);
root.insert(15);
root.insert(3);

root.insert(8);
root.insert(20);

console.log(root.find(20));
console.log(root.breadthFirstSearch());
console.log(root.depthFirstSearchPreOrder());
console.log(root.depthFirstSearchPostOrder());
console.log(root.depthFirstSearchInOrder());

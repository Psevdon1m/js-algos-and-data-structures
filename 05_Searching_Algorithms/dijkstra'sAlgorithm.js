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

/**
 * Represents a weighted graph data structure.
 */

class WeightedGraph {
  /**
   * Creates a new WeightedGraph instance.
   */
  constructor() {
    this.adjecencyList = {};
  }

  /**
   * Adds a new vertex to the graph.
   * @param {string} vertex - The label of the vertex to be added.
   */

  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
  }

  /**
   * Adds a weighted edge between two vertices in the graph.
   * @param {string} vertex1 - The label of the first vertex.
   * @param {string} vertex2 - The label of the second vertex.
   * @param {number} weight - The weight of the edge.
   */

  addEdge(vertex1, vertex2, weight) {
    this.adjecencyList[vertex1]?.length
      ? this.adjecencyList[vertex1].push({ node: vertex2, weight })
      : (this.adjecencyList[vertex1] = [{ node: vertex2, weight }]);
    this.adjecencyList[vertex2]?.length
      ? this.adjecencyList[vertex2].push({ node: vertex1, weight })
      : (this.adjecencyList[vertex2] = [{ node: vertex1, weight }]);
  }

  /**
   * Finds the shortest path between two vertices using Dijkstra's algorithm.
   * @param {string} startVertex - The starting vertex for the path.
   * @param {string} endVertex - The ending vertex for the path.
   * @returns {Array} - An array of vertices representing the shortest path.
   */

  dijkstrasShortPath(startVertex, endVertex) {
    const nodes = new PriorityQueue();

    const distances = {};
    const previous = {};
    let resultPathNodes = [];
    let vertex;
    // Initialize distances and priority queue

    Object.keys(this.adjecencyList).forEach((element) => {
      if (element === startVertex) {
        distances[element] = 0;
        nodes.enqueue(element, 0);
      } else {
        distances[element] = Infinity;
        nodes.enqueue(element, Infinity);
      }

      previous[element] = null;
    });
    while (nodes.values.length) {
      vertex = nodes.dequeue().value;

      if (vertex === endVertex) {
        while (previous[vertex]) {
          resultPathNodes.push(vertex);
          vertex = previous[vertex];
        }
        break;
      }
      if (vertex || distances[vertex] !== Infinity) {
        for (let neighbor in this.adjecencyList[vertex]) {
          // Find neighboring node
          let nextNode = this.adjecencyList[vertex][neighbor];
          // Calculate the distance to neighbor
          let candidate = distances[vertex] + nextNode.weight;
          if (candidate < distances[nextNode.node]) {
            // Update new smallest distance to neighbor
            distances[nextNode.node] = candidate;
            // Update previous - how we got to neighbor
            previous[nextNode.node] = vertex;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNode.node, candidate);
          }
        }
      }
    }
    return resultPathNodes.concat(vertex).reverse();
  }
}

let wg = new WeightedGraph();

wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);
// console.log(wg.adjecencyList);
console.log(wg.dijkstrasShortPath("A", "E"));
console.log(wg.dijkstrasShortPath("A", "C"));
console.log(wg.dijkstrasShortPath("A", "F"));
console.log(wg.dijkstrasShortPath("A", "D"));

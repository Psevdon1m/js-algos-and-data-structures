/**
 * A MaxBinaryHeap represents a binary heap data structure where the parent nodes
 * have values greater than or equal to their child nodes. It supports insertion,
 * extraction of the maximum value, and sinking down elements as needed to maintain
 * the heap property.
 *
 * @class MaxBinaryHeap
 * @constructor
 */
class MaxBinaryHeap {
  /**
   * Initializes a new MaxBinaryHeap with an optional initial set of values.
   * @constructor
   */
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  /**
   * Inserts a new value into the heap while maintaining the heap property.
   *
   * @method insert
   * @param {number} value - The value to be inserted into the heap.
   * @returns {number[]} - The updated array representing the binary heap.
   */

  insert(value) {
    let childIndex = this.values.push(value) - 1;
    if (this.values.length === 1) return this.values;

    let parentNodeIndex = Math.floor((childIndex - 1) / 2);
    while (this.values[childIndex] > this.values[parentNodeIndex]) {
      this.swap(this.values, parentNodeIndex, childIndex);
      childIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((childIndex - 1) / 2);
    }
    return this.values;
  }

  /**
   * Extracts the maximum value from the heap and maintains the heap property.
   *
   * @method extractMax
   * @returns {number|undefined} - The maximum value extracted from the heap,
   * or undefined if the heap is empty.
   */

  extractMax() {
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
      this.values[indexOfWrongParent] < this.values[indexOfLChild] ||
      this.values[indexOfWrongParent] < this.values[indexOfRChild]
    ) {
      if (this.values[indexOfLChild] < this.values[indexOfRChild]) {
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
   * Alternative method for extracting the maximum value from the heap.
   *
   * @method extractMaxAlternative
   * @returns {number|undefined} - The maximum value extracted from the heap,
   * or undefined if the heap is empty.
   */

  extractMaxAlternative() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  /**
   * Sinks down the element at the given index to its proper position in the heap.
   *
   * @method sinkDown
   * @private
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(73); // -> [73, 55, 39, 41, 18, 27, 12, 33]
console.log("removed value: ", heap.extractMaxAlternative()); // -> removed value: 73,  [55, 39, 41, 18, 27, 12, 33]
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);
console.log("removed value: ", heap.extractMaxAlternative());
console.log(heap.values);

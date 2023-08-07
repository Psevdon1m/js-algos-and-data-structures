/**
 * Finds the length of the longest number in the given array.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The length of the longest number in the array.
 * @example
 * const longest = findLongestNumber([23, 4440, 17, 9, 2002, 100]);
 * console.log(longest); // Output: 4 (the number 4440 has the longest length, which is 4 digits)
 */

function findLongestNumber(arr) {
  let maxLength = 0;

  for (let num of arr) {
    const curNumLength = Math.floor(Math.log10(num)) + 1;
    maxLength = Math.max(curNumLength, maxLength);
  }

  return maxLength;
}
/* ================================================================================================= */
/**
 * Returns the digit of a number at the specified index position.
 * @param {number} num - The input number.
 * @param {number} index - The index position of the digit to retrieve (0-based index).
 * @returns {number} The digit at the given index position. If the index is out of range, 0 is returned.
 * @example
 * const digit = getDigitByIndex(4440, 2);
 * console.log(digit); // Output: 4 (the digit at index 2 of the number 4440 is 4)
 */
function getDigitByIndex(num, index) {
  num = num.toString();
  //   return Number(num[num.length - 1 - index]) || 0;
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

/* ================================================================================================= */

/**
 * Sorts an array of non-negative integers using the Radix Sort algorithm.
 * @param {number[]} arr - An array of non-negative integers to be sorted.
 * @returns {number[]} A new sorted array with the same elements.
 * @example
 * const sortedArray = radixSort([23, 4440, 17, 9, 2002, 100]);
 * console.log(sortedArray); // Output: [9, 17, 23, 100, 2002, 4440]
 */

function radixSort(arr) {
  let maxNumberLength = findLongestNumber(arr);

  for (let i = 0; i < maxNumberLength; i++) {
    let subArray = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let insertIndex = getDigitByIndex(arr[j], i);
      //   console.log({ insertIndex, number: arr[j], indexOfNumber: i });
      subArray[insertIndex].push(arr[j]);
    }

    arr = [].concat(...subArray);
  }
  return arr;
}

console.log(radixSort([23, 4440, 17, 9, 2002, 100]));

/* ================================================================================================= */

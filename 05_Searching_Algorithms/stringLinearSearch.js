/**
 * Counts the occurrences of a substring within a given string.
 *
 * @param {string} string - The main string to search in.
 * @param {string} subString - The substring to count occurrences of.
 * @returns {number} - The number of occurrences of the substring in the main string.
 *
 * @example
 * // Example 1
 * const result1 = countSubString("wowomgwomg", "omg");
 * console.log(result1); // Output: 2
 *
 * @example
 * // Example 2
 * const result2 = countSubString("lorie loled", "lol");
 * console.log(result2); // Output: 1
 */

function countSubString(string, subString) {
  let counter = 0;
  let length = subString.length;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[0]) {
      for (let j = 1; j < subString.length; j++) {
        if (string[i + j] !== subString[j]) break;
        if (j === length - 1) {
          counter += 1;
          i = i + j + 1;
        }
      }
    }
  }

  return counter;
}

console.log("Result: ", countSubString("wowomgwomg", "omg"));
console.log("Result: ", countSubString("lorie loled", "lol"));
console.log("Result: ", countSubString("lorie loled", "lo"));
console.log("Result: ", countSubString("lorie loled", "pop"));

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

function countSubString(string, subString) {
  let matched = 0;
  for (let i = 0; i < string.length; ) {
    // loop over long str
    for (let j = 0; j < subString.length; j++) {
      //for each char loop over substring
      let char = string[i];
      let subChar = subString[j];
      //chars selected

      if (char === subChar) {
        //chars are equal so we need to both increment j and i. J incremented in for loop declaration. I shoud be incremented here.
        if (j === subString.length - 1) {
          //also we need to check if we come to an end in inner loop, then we checked all chars and they are equal, so we need to inc the counter.
          matched++;
        }
        //otherwise just increase i counter
        i++;
      } else {
        //if charst not equal we need to break the inner loop and go to other car in string to start checking from the beginning.
        i++;
        break;
      }
    }
  }
  //return tootal matched count
  return matched;
}
console.log("Result: ", countSubString("wowomgwomg", "omg"));
console.log("Result: ", countSubString("lorie loled", "lol"));
console.log("Result: ", countSubString("lorie loled", "lo"));
console.log("Result: ", countSubString("lorie loled", "pop"));

/**
 * @title Anagram Validator
 * @dev This function checks if two input strings are anagrams of each other.
 *      An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *      typically using all the original letters exactly once.
 *      For example, "listen" and "silent" are anagrams.
 *
 * @param {string} srt1 - The first input string.
 * @param {string} str2 - The second input string.
 * @return {boolean} Returns true if the input strings are anagrams, false otherwise.
 *
 * @notice The input strings must contain only alphabets (A-Z or a-z). Any non-alphabet character will be ignored.
 * @notice The function is case-sensitive, so "Listen" and "silent" are not considered anagrams.
 *
 * @example
 *   validAnagram("listen", "silent"); // Returns true
 *   validAnagram("hello", "world");   // Returns false
 *   validAnagram("Taco", "coat");     // Returns false (case-sensitive)
 */

// function validAnagram(srt1, str2) {
//   if (srt1.length !== str2.length) {
//     return false;
//   }
//   const frequencyObject1 = {};
//   const frequencyObject2 = {};

//   for (let char of srt1) {
//     frequencyObject1[char] = (frequencyObject1[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     frequencyObject2[char] = (frequencyObject2[char] || 0) + 1;
//   }

//   for (let key in frequencyObject1) {
//     if (!frequencyObject2.hasOwnProperty(key)) {
//       return false;
//     }
//     if (frequencyObject1[key] !== frequencyObject2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

//solution2
/**
 * @title Anagram Validator
 * @dev Checks if two input strings are anagrams of each other.
 * @notice An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *         typically using all the original letters exactly once.
 * @param str1 The first input string.
 * @param str2 The second input string.
 * @return Returns `true` if the input strings are anagrams, otherwise returns `false`.
 * @example
 *   // returns true
 *   validAnagram("listen", "silent");
 *
 *   // returns false
 *   validAnagram("hello", "world");
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let char of str1) {
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  for (char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}
console.log(`' ', ' ' ${validAnagram(" ", " ")}`);
console.log(`'aaz', 'zza' ${validAnagram("aaz", "zza")}`);
console.log(`'anagram', 'nagaram' ${validAnagram("anagram", "nagaram")}`);
console.log(`'rat', 'car' ${validAnagram("rat", "car")}`);
console.log(`'awesome', 'awesom' ${validAnagram("awesome", "awesom")}`);
console.log(`'qwerty', 'qeywrt' ${validAnagram("qwerty", "qeywrt")}`);
console.log(
  `'texttwisttime', 'timetwisttext' ${validAnagram(
    "texttwisttime",
    "timetwisttext"
  )}`
);

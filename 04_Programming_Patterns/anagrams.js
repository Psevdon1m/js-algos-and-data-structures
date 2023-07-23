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

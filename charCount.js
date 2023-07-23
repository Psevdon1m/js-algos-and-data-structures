// function charCount(str) {
//   let obj = {};
//   for (let i = 0; i, str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

function charCount(str) {
  let charMap = new Map();
  str = str.toLowerCase();
  for (let char of str) {
    if (isAlphaNumberic(char)) {
      charMap.set(char, charMap.get(char) + 1 || 1);
    }
  }
  return charMap;
}
// regex work slower than comparison so the alternalive way to check if char is alpha numeric is to check its code
function isAlphaNumberic(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
console.log(charCount("Hello  hi"));

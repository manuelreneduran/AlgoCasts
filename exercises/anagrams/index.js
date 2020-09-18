// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let cleanStrA = cleanString(stringA);
//   let cleanStrB = cleanString(stringB);

//   if (cleanStrA.length !== cleanStrB.length) {
//     return false;
//   }

//   for (var i = 0; i < cleanStrA.length; i++) {
//     if (cleanStrA[i] !== cleanStrB[i]) return false;
//   }
//   return true;
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").split("").sort().join("");
// }

// function anagrams(stringA, stringB) {
//   let stringAMap = makeMap(stringA);
//   let stringBMap = makeMap(stringB);

//   if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//     return false;
//   }

//   for (let char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function makeMap(string) {
//   let map = {};

//   for (let char of string) {
//     if (char.match(/[A-Z]/gi)) map[char] = map[char] + 1 || 1;
//   }

//   return map;
// }

function anagrams(strA, strB) {
  let cleanStringA = cleanString(strA)
  let cleanStringB = cleanString(strB)

  if (cleanStringA.length !== cleanStringB.length) {
    return false
  }

  for (var i = 0; i < cleanStringA.length; i++) {
    if (cleanStringA[i] !== cleanStringB[i]) return false
  }
  return true
}

function cleanString(str) {
  return str.match(/[\w]/g).sort().join('')
}

module.exports = anagrams

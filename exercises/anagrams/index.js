// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let stringAMap = makeMap(stringA);
  let stringBMap = makeMap(stringB);

  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
    return false;
  }

  for (let char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) {
      return false;
    }
  }
  return true;
}

function makeMap(string) {
  let map = {};

  for (let char of string) {
    if (char.match(/[A-Z]/gi)) map[char] = map[char] + 1 || 1;
  }

  return map;
}

module.exports = anagrams;

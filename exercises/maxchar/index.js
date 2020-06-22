// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  let highNum = 0;

  for (let char in charMap) {
    if (charMap[char] > highNum) {
      highNum = char;
    }
  }

  return highNum;
}

module.exports = maxChar;

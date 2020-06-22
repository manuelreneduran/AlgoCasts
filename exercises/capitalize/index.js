// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var words = [];

  for (var word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}
// function capitalize(str) {
//   let sentence = str.split(" ");
//   for (var i = 0; i < sentence.length; i++) {
//     var word = sentence[i];
//     word = word[0].toUpperCase() + word.slice(1);
//     sentence[i] = word;
//   }
//   return sentence.join(" ");
// }

module.exports = capitalize;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var counter = 1;

  for (var i = 0; i < n; i++) {
    var step = "";

    for (var q = 0; q < n; q++) {
      if (q < counter) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
    counter++;
  }
}

module.exports = steps;

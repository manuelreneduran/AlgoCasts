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

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

// function steps(n, step = "", counter = 1) {
//   if (counter > n) {
//     return null;
//   }

//   if (step.length < counter) {
//     step += "#";
//   } else {
//     step += " ";
//   }

//   if (step.length === n) {
//     console.log(step);
//     step = "";
//     steps(n, step, counter + 1);
//     return null;
//   }

//   steps(n, step, counter);
// }
// function steps(n) {
//   var counter = 1;

//   for (var i = 0; i < n; i++) {
//     var step = "";

//     for (var q = 0; q < n; q++) {
//       if (q < counter) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     console.log(step);
//     counter++;
//   }
// }

module.exports = steps;

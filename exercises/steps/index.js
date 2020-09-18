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

//O(n^2)

function steps(n, row = 0, stairs = '') {
  if (n === row) {
    return
  }

  if (stairs.length === n) {
    console.log(stairs)
    return steps(n, row + 1, '')
  }

  if (stairs.length <= row) {
    stairs += '#'
  } else {
    stairs += ' '
  }

  return steps(n, row, stairs)
}

// function steps(n) {
//   for (var i = 0; i < n; i++) {
//     let string = ''

//     for (var q = 0; q < n; q++) {
//       if (q <= i) {
//         string += '#'
//       } else {
//         string += ' '
//       }
//     }

//     console.log(string)
//   }
// }

//recursive

// function steps(n, row = 0, stairs = '') {
//   if (n === row) {
//     return
//   }

//   if (stairs.length === n) {
//     console.log(stairs)
//     return steps(n, row + 1)
//   }

//   if (stairs.length <= row) {
//     stairs += '#'
//   } else {
//     stairs += ' '
//   }

//   return steps(n, row, stairs)
// }

module.exports = steps

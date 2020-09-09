// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let maxLength = n * 2 - 1
  let midPointInd = n - 1

  for (var row = 0; row < n; row++) {
    let level = ''
    let start = midPointInd - row
    let end = midPointInd + row

    for (var col = 0; col < maxLength; col++) {
      if (col >= start && col <= end) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}
module.exports = pyramid

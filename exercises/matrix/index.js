// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(N) {
//   let spiral = []

//   for (var i = 0; i < N; i++) {
//     spiral.push(Array.from(Array(N), (_, ind) => 'n'))
//   }

//   let max = N * N
//   let counter = 1

//   let colInd = 0
//   let rowInd = 0

//   while (counter <= max) {
//     let direction = ''
//     spiral[rowInd][colInd] = counter
//     if (
//       spiral[rowInd][colInd + 1] &&
//       spiral[rowInd][colInd + 1] === 'n' &&
//       (!spiral[rowInd - 1] || spiral[rowInd - 1][colInd] !== 'n')
//     ) {
//       direction = 'right'
//     }

//     if (
//       spiral[rowInd + 1] &&
//       spiral[rowInd + 1][colInd] === 'n' &&
//       (!spiral[rowInd][colInd + 1] || spiral[rowInd][colInd + 1] !== 'n')
//     ) {
//       direction = 'down'
//     }

//     if (
//       spiral[rowInd][colInd - 1] &&
//       spiral[rowInd][colInd - 1] === 'n' &&
//       (!spiral[rowInd + 1] || spiral[rowInd + 1][colInd] !== 'n')
//     ) {
//       direction = 'left'
//     }

//     if (
//       spiral[rowInd - 1] &&
//       spiral[rowInd - 1][colInd] === 'n' &&
//       (!spiral[rowInd][colInd - 1] || spiral[rowInd][colInd - 1] !== 'n')
//     ) {
//       direction = 'up'
//     }

//     switch (direction) {
//       case 'right':
//         colInd++
//         break

//       case 'down':
//         rowInd++
//         break

//       case 'left':
//         colInd--
//         break

//       case 'up':
//         rowInd--
//         break
//     }

//     counter++
//   }

//   return spiral
// }

function matrix(N) {
  let spiral = []

  for (var i = 0; i < N; i++) {
    spiral.push(Array.from(Array(N), (_, ind) => 'n'))
  }

  let counter = 1

  let startRow = 0
  let endRow = N - 1
  let startCol = 0
  let endCol = N - 1

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      spiral[startRow][i] = counter
      counter++
    }
    startRow++

    for (let q = startRow; q <= endRow; q++) {
      spiral[q][endCol] = counter
      counter++
    }
    endCol--

    for (let p = endCol; p >= startCol; p--) {
      spiral[endRow][p] = counter
      counter++
    }
    endRow--

    for (let s = endRow; s >= startRow; s--) {
      spiral[s][startCol] = counter
      counter++
    }
    startCol++
  }

  return spiral
}

module.exports = matrix

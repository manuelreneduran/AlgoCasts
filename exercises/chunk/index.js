// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //using slice
  let chunks = [];
  let minPos = 0;

  while (minPos < array.length) {
    chunks.push(array.slice(minPos, minPos + size));
    minPos += size;
  }
  return chunks;
}

// function chunk(array, size) {
//   var chunks = [];
//   var chunk = [];

//   for (var i = 0; i < array.length; i++) {
//     let num = array[i];
//     chunk.push(num);
//     if (chunk.length === size || array[i + 1] === undefined) {
//       chunks.push(chunk);
//       chunk = [];
//     }
//   }
//   return chunks;
// }

module.exports = chunk;

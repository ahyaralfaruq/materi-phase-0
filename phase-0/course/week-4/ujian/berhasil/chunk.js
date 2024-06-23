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
   let merges = Math.ceil(array.length / size);
   let counterSize = 0;
   let counterArray = 0;
   let counter = 1;
   let result = [];

   for (let i = 0; i < merges; i++) {
      let arr = [];

      for (let j = counterArray; j < array.length; j++) {
         // j = counterArray;
         arr.push(array[counterArray]);
         counterArray++;
         if (arr.length === size) {
            break;
         }
      }

      result.push(arr);
   }

   // console.log(result);

   return result;
}

console.log(chunk([1, 2, 3, 4], 2)); //--> [[ 1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2)); //--> [[ 1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); //--> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4)); // --> [[ 1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10)); // --> [[ 1, 2, 3, 4, 5]]

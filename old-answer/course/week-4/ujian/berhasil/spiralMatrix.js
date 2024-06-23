function spiralMatrix(n) {
   let arr = [];
   let rowEnd = n - 1;
   let colEnd = n - 1;
   let rowField = 0;
   let colField = 0;
   let counter = 1;

   for (let i = 1; i <= n; i++) {
      arr.push([]);
   }

   while (rowField <= rowEnd && colField <= colEnd) {
      for (let i = colField; i <= colEnd; i++) {
         arr[rowField][i] = counter;
         counter++;
      }
      rowField++;

      for (let i = rowField; i <= rowEnd; i++) {
         arr[i][colEnd] = counter;
         counter++;
      }
      colEnd--;

      for (let i = colEnd; i >= colField; i--) {
         arr[rowEnd][i] = counter;
         counter++;
      }
      rowEnd--;

      for (let i = rowEnd; i >= rowField; i--) {
         arr[i][colField] = counter;
         counter++;
      }
      colField++;
   }

   console.log(`counter = ${counter}, row = ${rowField}, column = ${colField}`);

   console.log(arr);
}

console.log(spiralMatrix(2));
// [
//    [1,2],
//    [4,3]
// ]
console.log(spiralMatrix(3));
// [
//    [1,2,3],
//    [8,9,4],
//    [7,6,5]
// ]
console.log(spiralMatrix(4));
// [
//    [1,2,3,4],
//    [12,13,14,5],
//    [11,16,15,6],
//    [10,9,8,7]
// ]
console.log(spiralMatrix(6));

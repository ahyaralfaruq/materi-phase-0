function sorting(arrNumber) {
   let result = [];

   let s = arrNumber.sort(function (a, b) {
      return a - b;
   });

   for (let i = 0; i < s.length; i++) {
      // console.log(s[i])

      if (s[s.length - 1] <= s[i]) {
         result.push(s[i]);
      }
   }

   return result;
}

function getTotal(arrNumber) {
   let fil = Array.from(new Set(arrNumber));

   let toNumb = Number(fil);

   let result = `angka paling besar adalah ${toNumb} dan jumlah kemunculan sebanyak ${arrNumber.length} kali`;

   if (arrNumber.length === 0) {
      return "''";
   }

   return result;
}

function mostFrequentLargestNumbers(arrNumber) {
   var listSort = sorting(arrNumber);
   var countHighest = getTotal(listSort);
   return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
   mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

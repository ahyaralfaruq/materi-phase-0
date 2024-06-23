function totalDigitRekursif(angka) {
   let change = String(angka);

   if (angka === 0) {
      return 0;
   } else {
      let i_change = change.substring(1);

      // console.log(i_change)

      return Number(change[0]) + totalDigitRekursif(Number(i_change));
   }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

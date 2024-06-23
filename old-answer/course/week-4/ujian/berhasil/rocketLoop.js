/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 7
  [OUTPUT]
    7777777
    666666
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555
    666666
    7777777

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/

var max = 7;
var str = "";

var min = 0;

for (let i = max; i >= 1; i--) {
   for (let j = 1; j <= i; j++) {
      str += i;
   }
   str += "\n";

   min = i;
}

for (let i = min + 1; i <= max; i++) {
   for (let j = 1; j <= i; j++) {
      str += i;
   }
   str += "\n";
}

// code here

console.log(str);

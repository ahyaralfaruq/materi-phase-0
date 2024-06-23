// Problem:
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints:
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

// Skeleton Code:
// var word = 'wow JavaScript is so cool';
// var exampleFirstWord = word[0] + word[1] + word[2];
// var secondWord; // do your own!
// var thirdWord; // do your own!
// var fourthWord; // do your own!
// var fifthWord; // do your own!

// console.log('First Word: ' + exampleFirstWord);
// console.log('Second Word: ' + secondWord);
// console.log('Third Word: ' + thirdWord);
// console.log('Fourth Word: ' + fourthWord);
// console.log('Fifth Word: ' + fifthWord);

// Output:
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool


var word = 'wow JavaScript is so cool';
var firstWord = word[0] + word[1] + word[2]
var secondWord = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] + word[14] 
var thirdWord = word[15] + word[16] + word[17]
var fourthWord = word[18] + word[19] + word[20]
var fifthWord = word[21] + word[22] + word[23] + word[24]


console.log(firstWord + secondWord + thirdWord +fourthWord + fifthWord)
// Problem:
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

// Skeleton Code:
// Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

// var word4 = 'wow JavaScript is so cool';
// var exampleFirstWord4 = word.substring(0, 3);
// var secondWord4; // do your own!
// var thirdWord4; // do your own!
// var fourthWord4; // do your own!
// var fifthWord4; // do your own!

// var firstWordLength = exampleFirstWord4.length;
// // create new variables around here

// console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);
// console.log('Second Word: ' + secondWord);
// console.log('Third Word: ' + thirdWord);
// console.log('Fourth Word: ' + fourthWord);
// console.log('Fifth Word: ' + fifthWord);

// Output:
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4


// my code :

var word = 'wow JavaScript is so cool';
var firstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4,14)
var thirdWord4 = word.substring(15,17)
var fourthWord4 = word.substring(18,20)
var fifthWord4 = word.substring(21,25)

var firstWordLength = firstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;
// create new variables around here

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);
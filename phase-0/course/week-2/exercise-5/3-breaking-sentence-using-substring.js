// Problem:
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

// Skeleton Code:
// var word3 = 'wow JavaScript is so cool';
// var exampleFirstWord3 = word.substring(0, 3);
// var secondWord3; // do your own!
// var thirdWord3; // do your own!
// var fourthWord3; // do your own!
// var fifthWord3; // do your own!

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



// my code :

var word = 'wow JavaScript is so cool'
var firstWord3 = word.substring(0,3)
var secondWord3 = word.substring(4,14)
var thirdWord3 = word.substring(15,17)
var fourthWord3 = word.substring(18,20)
var fifthWord3 = word.substring(21,25)

console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
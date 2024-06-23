// Logic Challenge - Palindrome
// Problem
// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

// Code
// function palindrome(kata) {
//   // you can only write your code here!
// }

// // TEST CASES
// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false

// my code:

function palindrome(kata) {

    let result;

    let reverseData = ""
    let tampung = []

    for(let i = kata.length - 1; i >= 0; i--) {
        reverseData += kata[i]
    }

    if(reverseData === kata) {
        result = true;
    } else {
        result = false;
    }

    return result
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
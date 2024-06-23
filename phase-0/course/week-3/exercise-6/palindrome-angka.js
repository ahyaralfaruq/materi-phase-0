// Logic Challenge - Number Palindrome
// Problem
// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

// Code
function angkaPalindrome(num) {
    
    let leftSide = 1
    let rightSide = 2

    console.log(num)
    
    while(leftSide !== rightSide) {
        
        num++

        // tujuannya untuk memberhentikan looping.
        let str = num.toString()
        leftSide = str.slice(0,Math.ceil(str.length/2)) // index 0-2 ===> 117 == 11
        rightSide = str.slice(Math.floor(str.length/2), str.length).split('').reverse().join('') // index 2-3 ===> 117 == 17
        

        console.log(`leftside : ${leftSide}`)
        console.log(`rightside : ${rightSide}`)
        console.log(str.slice(Math.floor(str.length/2), str.length))
    }

    return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
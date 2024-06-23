// source by : https://www.codewars.com/kata/5966e33c4e686b508700002d

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// my code :

function sumTheString(a = "0",b = "0") {
    let result

    if(typeof a === "string" && typeof b === "string") {
        
        if(isNaN(Number(a)) || isNaN(Number(b))) {
            
            result = "data yang anda masukan harus berupa string yang diisi oleh number"
        } else if(Number(a) > (2 ** 31 - 1) || Number(b) > (2 ** 31 -1)) {
            
            result = "data yang anda masukan melebihi 32 bit"

        } else {
            
            let tampung = Number(a) + Number(b)

            result = String(tampung)
        }
    } else {
        result = "Tipe data yang anda masukkan bukan string"
    }

    return result
}

console.log(sumTheString("1","999999999999999"))
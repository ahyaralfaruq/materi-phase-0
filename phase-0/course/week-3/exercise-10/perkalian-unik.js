// Logic Challenge - Perkalian Unik
// Problem
// Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.

// Code :
function perkalianUnik(arr) {

    // rumus :
    // 2 * 4 * 6 / 2 = 24
    // 4 * 2 * 6 / 4 = 12
    // 6 * 2 * 4 / 6 = 8

    let result = []

    for (let i = 0; i < arr.length; i++) {
        
        let tampung = 1;

        for (let j = 0; j < arr.length; j++) {
            tampung *= arr[j]
            console.log(tampung)
        }
        
        tampung /= arr[i]

        result.push(tampung)
    }

    return result
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
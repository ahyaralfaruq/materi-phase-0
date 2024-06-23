// Logic Challenge - Mencari Mean
// Problem
// Diberikan sebuah function cariMean(arr) yang menerima sebuah array angka. Function akan me-return mean dari array atau deret angka tersebut. Mean adalah angka rata-rata dari deret bilangan tersebut. Contoh, mean atau rata-rata dari [1, 2, 3, 4, 5] adalah 3. Kita perlu kemudian melakukan pembulatan angka dari hasil mean yang didapatkan (pembulatan ke atas).

// Code
function cariMean(arr) {
    // buat variable result untuk menampung hasil yang di inginkan.
    let result

    // buat variable untuk menampung total jumlah nilai yang terdapat di parameter arr.
    let total = 0

    // looping isi arr untuk memasukkan semua hasilnya kedalam variable tampungan
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]    
    }

    result = Math.round(total / arr.length)

    return result
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
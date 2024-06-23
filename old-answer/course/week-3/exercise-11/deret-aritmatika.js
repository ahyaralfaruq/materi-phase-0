// Logic Challenge - Tentukan Deret Aritmatika
// Problem
// Diberikan sebuah function tentukanDeretAritmatika(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

// Code
function tentukanDeretAritmatika(arr) {

    // assign variable untuk menampung hasil yang ditentukan.
    let result = true;
    
    // rumus menentukan selisih dari jumlah deret aritmatika
    let rum = arr[1] - arr[0]

    // looping untuk mendapatkan selisih pada setiap value dari array
    for (let i = 0; i < arr.length - 1; i++) {
        
        // arr.length - 1 bertujuan untuk menyesuaikan index agar i+1 jika di iterasi menjadi index yang terakhir.

        // jumlah total value pada array yang di iterasi (arr.length) = 0,1,2,3,4,5 => 6
        // jika arr.length - 1 akan menjadi 0,1,2,3,4 => 5

        // rumus menentukan selisih dari jumlah deret aritmatika sesuai dengan index yang di iterasi.
        let currentVal = arr[i+1] - arr[i]

        // arr[i + 1] = 2 index ke [1]
        // arr[i + 1] = 3 index ke [2]
        // arr[i + 1] = 4 index ke [3]
        // arr[i + 1] = 5 index ke [4]
        // arr[i + 1] = 6 index ke [5]

        // arr[i] = 1 index ke [0]
        // arr[i] = 2 index ke [1]
        // arr[i] = 3 index ke [2]
        // arr[i] = 4 index ke [3]
        // arr[i] = 5 index ke [4]

        // kondisi jika selisih antara setiap value pada array sama (konsisten). maka, hasil berupa true
        // selain itu false.

        if(currentVal === rum) {
            resutl = true
        } else {
            result = false
        }
    }

    return result
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
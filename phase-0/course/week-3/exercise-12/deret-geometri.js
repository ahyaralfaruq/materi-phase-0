// Logic Challenge - Tentukan Deret Geometri
// Problem
// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan truejika array dari parameter tersebut merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).

// Code
function tentukanDeretGeometri(arr) {
    
    // untuk menampung inti hasil yang diinginkan / di return.
    let result = true

    // rumus untuk mendapatkan jumlah perkalian berdasarkan selisih yang sesuai.
    // 3 : 1 = 3 , 4 : 2 = 2 dst.
    let rumus = arr[1] / arr[0]

    for (let i = 0; i < arr.length - 1; i++) {
        
        // untuk mendapatkan selisih sesuai index yang dipanggil.
        let currentVal = Math.floor(arr[i+1] / arr[i])

        // kondisi jika parameter yang berisi array adalah deret Geometri

        if(currentVal === rumus) {
            // re-assign variable result agar hasilnya sesuai dengan kondisi yang diinginkan.
            result = true
        } else {
            result = false
        }
    }
    
    return result
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
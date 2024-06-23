// Problem :
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// Code
function konversiMenit(menit) {

    let times = ""
    let hour = 0
    let minutes = 0
    let formatMenit

    for(let i = 1; i <= menit; i++){

        hour = String(Math.floor(i / 60))
        minutes = String(i % 60 / 100)

    }

    formatMenit = minutes.substr(2) === "" ? minutes.substr(2) + "00" : minutes.substr(2)
    times = hour + ":" + formatMenit
    console.log(formatMenit)
    
    return times
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
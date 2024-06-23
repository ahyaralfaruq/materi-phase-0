// Menggunakan Built-in Function pada Array

// Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.

// Objectives
// Mengerti Kegunaan dari Built-in Function yang dimiliki Array
// Mampu Menggunakan Built-in Function yang dimiliki Array
// Directions
// //contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
// Buatlah sebuah function dengan nama dataHandling2yang akan menerima input array seperti di atas.

// Gunakan fungsi spliceuntuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.logarray yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.lognama bulan sesuai dengan angka tersebut.

// Gunakan splituntuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan "Januari"
// Gunakan switch caseuntuk menuliskan bulan di atas.
// Pada array hasil splitdari tanggal/bulan/tahun, lakukan sorting secara descending dan console.logarray yang sudah di-sort.

// Masih pada array hasil splitdari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan joindan pisahkan dengan karakter strip (-) lalu console.loghasilnya.

// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan sliceuntuk menghapus kelebihan karakter dan console.lognama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk Stringagar bisa di-slice.

// Test-case
// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

// var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// dataHandling2(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */



// my code :

const data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(arr) {
    
    let result;

    arr.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

    let getTanggalLahir = arr[3]

    let splitTanggalLahir = getTanggalLahir.split("/")

    // mengubah string bulan menjadi angka
    let getMonthOnly = Number(splitTanggalLahir[1])

    // mengubah number menjadi string sesuai nama bulan
    let month;

    switch(getMonthOnly) {
        case 1 :
            month = "Januari"
            break;
        case 2 :
            month = "Febuari"
            break;
        case 3 :
            month = "Maret"
            break;
        case 4 :
            month = "April"
            break;
        case 5 :
            month = "Mei"
            break;
        case 6 :
            month = "juni"
            break;
        case 7 :
            month = "Juli"
            break;
        case 8 :
            month = "Agustus"
            break;
        case 9 :
            month = "September"
            break;
        case 10 :
            month = "Oktober"
            break;
        case 11 :
            month = "November"
            break;
        case 12 :
            month = "Desember"
            break;
        default :
            month = "Angka Bulan tidak terdaftar !"
            break;
    }
    
    console.log(month)

    // let arrStrToArrNumb = []

    // for(let i = 0; i < splitTanggalLahir.length; i++) {
    //     arrStrToArrNumb.push(Number(splitTanggalLahir[i]))
    // }

    // let sorter = arrStrToArrNumb.sort(function(a,b) {
    //     return b - a
    // })
    
    // console.log(arrStrToArrNumb)


    let sorter = splitTanggalLahir.sort(function(a,b) {
        return b - a
    })
    
    console.log(sorter)

    let fusionValOfArr = getTanggalLahir.split("/").join("-")

    console.log(fusionValOfArr)

    let limitName = arr[1].slice(0,14)

    console.log(limitName)

    return result = `${arr} \n ${month} \n ${sorter} \n ${fusionValOfArr} \n ${limitName}`
}


console.log(dataHandling2(data))
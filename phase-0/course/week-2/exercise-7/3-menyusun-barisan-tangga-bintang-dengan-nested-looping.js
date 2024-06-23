// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

// Skeleton Code
// var rows3; // input the number of rows

// // do loops to display asterisks in the console.
// Output
// jika rows3 = 5

// *
// **
// ***
// ****
// *****

var rows3 = 5
var star = ""

for(var i = 0; i < rows3; i++) {
    for(var j = 0; j <= i; j++) {
        star += "*"
    }
    star += "\n"
}

console.log(star)
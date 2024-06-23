// Problem:
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

// Skeleton Code:
// var rows2; // input the number of rows

// // do loops to display asterisks in the console.
// Output:
// jika rows2 = 5

// *****
// *****
// *****
// *****
// *****


// my code :

var rows2 = 5
var star = ""

// for pertama untuk vertical
for(var i = 0; i < rows2; i++) {
    
    // for ke 2 untuk horizontal
    for(var j = 0; j < rows2; j++) {
        star += "*"
    }

    star += "\n"
}

console.log(star)
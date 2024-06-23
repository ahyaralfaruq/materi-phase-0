// Hint: 
// kamu akan menggunakan kondisional juga di kasus ini.

// Problem:
// 1. Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// 2. Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
// 3. Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:

// "3 kelipatan 3"dan seterusnya.
// output
// //contoh - ganjil genap
// //counter sekarang = 1,
// //output
// "GANJIL"
// //counter sekarang = 2,
// //output
// "GENAP"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 2
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 3,
// //output
// "3 KELIPATAN 3"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 5
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 6,
// //output
// "6 KELIPATAN 6"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 9
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 10,
// //output
// "10 KELIPATAN 10"
// // dan seterusnya :)

var counter = 1
var ganjilGenap
var kelipatan

console.log(`PROBLEM 1`)
while(counter <= 100) {

    if(counter % 2 === 0) {
        console.log(`counter sekarang : ${counter}`)
        console.log(`${counter} - adalah angka GENAP`)
    } else {
        console.log(`counter sekarang : ${counter}`)
        console.log(`${counter} - adalah angka GANJIL`)
    }

    counter++
}

console.log(`PROBLEM 2`)
for(counter = 1; counter <= 100; counter += 2) {

    if(counter % 3 === 0) {
        console.log(`counter sekarang : ${counter}`)
        console.log(`${counter} KELIPATAN 3`)
    } else {
        console.log(`counter sekarang : ${counter}`)
        console.log(` `)
    }
}

console.log(`PROBLEM 3`)
for(counter = 1; counter <= 100; counter += 5) {

    if(counter % 6 === 0) {
        console.log(`counter sekarang : ${counter}`)
        console.log(`${counter} KELIPATAN 6`)
    } else {
        console.log(`counter sekarang : ${counter}`)
        console.log(` `)
    }
}

console.log(`PROBLEM 4`)
for(counter = 1; counter <= 100; counter += 9) {

    if(counter % 10 === 0) {
        console.log(`counter sekarang : ${counter}`)
        console.log(`${counter} KELIPATAN 10`)
    } else {
        console.log(`counter sekarang : ${counter}`)
        console.log(` `)
    }
}
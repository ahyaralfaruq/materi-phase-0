// Tugas 3:
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(name,age,address,hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, saya tinggal di ${address}, dan saya punya hobby yaitu ${hobby}`
}



var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
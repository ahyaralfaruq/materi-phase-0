console.log("TAHUN KABISAT");

// =============================================================== TAHUN KABISAT

// diketahui tahun habis dibagi 4 & tidak habis dibagi 100
// atau jika tahun habis dibagi 4 & habis dibagi 100 & habis dibagi 400

let tahun = 1999;

if((tahun % 4) === 0 && (tahun % 100) !== 0 || (tahun & 4) === 0 && (tahun % 100) === 0 &&  (tahun % 400) === 0)  {
    console.log(`tahun ${tahun} adalah tahun kabisat`)
} else {
    console.log(`tahun ${tahun} adalah BUKAN tahun kabisat`)
}
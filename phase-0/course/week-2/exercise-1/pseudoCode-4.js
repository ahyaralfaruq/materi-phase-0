console.log("PERIKSA KUKU");

// ============================================================================== PERIKSA KUKU

// guru memeriksa kuku murid sebanyak 40 orang.
// jika kuku murid panjang, murid akan mendapatkan hukuman.
// jika tidak, murid akan di apresiasi.

let murid = 40;
let kukuPanjang = 11;
let kukuPendek = murid - kukuPanjang;

for(let i = 1; i <= murid; i++) {

    if(i <= kukuPanjang) {
        console.log(`${kukuPanjang} murid akan mendapatkan hukuman`)
    } else {
        console.log(`${kukuPendek} murid akan mendapatkan apresiasi/pujian`)
    }
}
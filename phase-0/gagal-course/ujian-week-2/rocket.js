/*
==============
Kotak Berlipat
==============
Instruksi
=========
Buatlah sebuah function bernama kotakBerlipat yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama determinant.

Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana 
- baris mewakili kelipatan counter
    - baris 1 akan berisi deret dengan basis kelipatan 1
    - baris 2 akan berisi deret dengan basis kelipatan 2
    dst
- kolom berisi simbol-simbol yang: 
    - @ mewakili kelipatan determinan
    - * yang bukan kelipatan dari determinan

contoh 1 (kotakBerlipat(3)):
Proses
1 2 3 = baris satu, kelipatan satu
2 4 6 = baris dua, kelipatan dua
3 6 9 = baris tiga, kelipatan tiga

OUTPUT
* * @
* * @
@ @ @


contoh 2 (kotakBerlipat(4)):
1 2 3 4   = baris satu, kelipatan satu
2 4 6 8   = baris dua, kelipatan dua
3 6 9 12  = baris tiga, kelipatan tiga
4 8 12 16 = baris empat, kelipatan empat

OUTPUT
* * * @
* @ * @
* * * @
@ @ @ @

Note: 
1. Setiap simbol diberikan spasi.
2. Tinggi kotak sesuai dengan nilai parameter yang diberikan!
3. Pola bersifat dinamis (parameter determinan bisa diisi angka positif berapa saja)
*/


function kotakBerlipat(determinant) {

    let result = ""

    for (let i = 1; i <= determinant; i++) {

        let temp = i
        
        for (let j = 1; j <= determinant; j++) {
            
            let test = j*temp
            
            if(test % 2 === 0 || test % 3 === 0) {
                result += "@"
                result += " "
            } else {
                result += "*"
                result += " "
            }
        }
        result += "\n"
    }

    return result
}

function handleSymbol(p) {

    if(p % 2 === 0 && p % 3 === 0 && p !== 0) {
        return "@"
    } else {
        return "*"
    }
}


kotakBerlipat(2);
// Output
// * @
// @ @
console.log(kotakBerlipat(2));

kotakBerlipat(10);
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * @ * @ * @ * @ * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// @ @ @ @ @ @ @ @ @ @
console.log(kotakBerlipat(10));

kotakBerlipat(-1); // Angka harus nilai positif.
console.log();

kotakBerlipat(); // Angka harus diisi.
console.log();
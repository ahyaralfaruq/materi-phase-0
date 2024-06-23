/**
 * ============
 * Lucky Number
 * ============
 * 
 * [Instruction]
 * 1. Buat sebuah program yang akan menampilkan deret angka mulai dari 1 hingga angka yang diberikan
 * 
 * 2. Ketika angka itu menyentuh 2 digit, maka hanya menampilkan angka satuannya, angka puluhannya tidak diprint
 *    Contoh:
 *    angka 1-15: 123456789012345
 *    angka 1-21: 123456789012345678901
 * 
 * 3. Jika angka tersebut `habis dibagi 2 DAN habis dibagi 3`, maka angka tersebut diganti menjadi asterisk ('*')
 *    Contoh:
 *    angka 1-12: 12345*78901*345
 *    Penjelasan:
 *    asterisk jatuh pada angka 6 dan 12 karena angka tersebut habis dibagi 2 DAN 3,
 *    maka angka tersebut diganti dengan asterisk.
 */


 



var size = 30 // 12345*78901*34567*90
let string = "";

for(var i = 1; i <= size; i++) {

    let angka = i
    
    // handle angka 10
    if(angka.toString()[1] == "0"){
        string += handleStar(0)
    }// handle digit 2
    else if(angka > 9){
        let check = handleStar(angka)

        if(check != "*"){
            string += angka % 10
        }else {
            string += check
        }
    }else {
        string += handleStar(angka)
    }
    
    
}

function handleStar(angka){
    if(angka % 2 == 0 && angka % 3 == 0 && angka !== 0){
        return "*"
    }else {
        return angka.toString()
    }
}



console.log(string);
function kaliTerusRekursif(angka) {
    
    let change = angka.toString()
    
    if (change.length === 0) {
        return 0
    } else if (change.length === 1) {
        return angka
    } else {
        return kaliTerusRekursif(Number(change[0]) * kaliTerusRekursif(Number(change.substring(1))))
    }

    
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
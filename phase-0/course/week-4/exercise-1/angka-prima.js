function angkaPrima(angka) {
    
    let result
    let temp = []
    let temp2 = []
    
    for (let i = angka; i >= 1; i--) {

        if (angka % i === 0) {
            temp.push(i)
        }
        
    }

    if (temp.length === 2) {
        result = true
    } else {
        result = false
    }

    return result
}


console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
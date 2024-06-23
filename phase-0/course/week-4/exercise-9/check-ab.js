function checkAB(num) {

    let a = -1
    let b = -1

    let result = false

    for (let i = 0; i < num.length; i++) {
        
        // untuk mendapatkan nilai a
        if(num[i] === "a" && i > b) {
            a = i
        } else if (num[i] === "b" && i > a) {
            b = i
        }
        
    }

    if((a !== -1 && b !== -1) && (a !== 0 && b !== 0)) {
        result = true
    }

    return result
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
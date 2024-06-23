// Problem :

// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// Code :

function xo(str) {
    let result
    let x = ""
    let o = ""
    
    for (let i = 0; i < str.length; i++) {
        
        if(str[i] === 'x') {
            x += str[i]
        } else {
            o += str[i]
        }

        // if(str[i] === 'o') {
        //     o += str[i]
        // }
        
    }

    if( x.length === o.length) {
        result = true;
    } else {
        result = false
    }

    return result
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
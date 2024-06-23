function fpb(angka1, angka2) {
    
    let leftside = []
    let rightside = []
    let temp = []

    for (let i = 1; i <= angka1; i++) {
        
        if(angka1 % i === 0) {
            leftside.push(i)
        }
        
    }

    for (let i = 1; i <= angka2; i++) {
        
        if(angka2 % i === 0) {
            rightside.push(i)
        }
        
    }

    for (let i = 0; i < rightside.length; i++) {
        
        for (let j = 0; j < leftside.length; j++) {
            
            if (rightside[i] === leftside[j]) {
                temp.push(leftside[j])
            }
            
        }
        
    }

    let result = temp[temp.length-1]

    return result
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
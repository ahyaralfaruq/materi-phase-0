function digitPerkalianMinimum(angka) {

    let temp = []
    
    for (let i = 1; i <= angka; i++) {
        
        for (let j = 1; j <= angka; j++) {
            
            if(i * j === angka) {
                let t = String(i) + String(j)
                temp.push(t)
            }
            
        }
        
    }

    let result = temp[0].length

    for (let i = 0; i < temp.length; i++) {
        
        if (temp[i].length < result) {
            // console.log(temp[i])
            result = temp[i].length
        }
        
    }

    return result
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
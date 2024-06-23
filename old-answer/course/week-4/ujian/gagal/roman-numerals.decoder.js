function solution (roman) {

    let data = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    if (roman < 2) {
        return data[roman]
    }
    
    let temp = 0

    for (let i = 0; i < roman.length; i++) {

        if (roman[i] === "I" && roman[i+1] === "V") {
            temp += 4
            i++
        } else if (roman[i] === "I" && roman[i+1] === "X") {
            temp += 9
            i++
        } else if (roman[i] === "x" && roman[i+1] === "L") {
            temp += 40
            i++
        } else if (roman[i] === "X" && roman[i+1] === "C") {
            temp += 90
            i++
        } else if (roman[i] === "C" && roman[i+1] === "D") {
            temp += 400
            i++
        } else if (roman[i] === "C" && roman[i+1] === "M") {
            temp += 900
            i++
        } else {
            temp += data[roman[i]]
        }
    }
    
    return temp;
}

console.log(solution('XXI')); // 21
console.log(solution('I')); // 1
console.log(solution('IV')); // 4
console.log(solution('MMVIII')); // 2008
console.log(solution('MDCLXVI')); // 1666
console.log(solution('MCMXC')); // 1990
// Find value of X

// Jack's teacher gave him a ton of equation for homework. The things is they are all kind of same so they are boring.

// So help him by making equation solving function that will return the value of x.

// the cases will be like this :

// # INPUT            # OUTPUT

// 'x + 1 = 9 - 2'    # 6
// '- 10 = x'         # -10
// 'x - 2 + 3 = 2'    # 1
// '- x = - 1'        # 1

// Task :

// All test are valid.
// Every +, - and number will be separated by space.
// There will be only one x either on the left or right.
// x can have a - mark before it.
// returned object will be an integer.


function valueOfX(str) {
    
    let strlen = str.split(" ").join("")
    let len  = strlen.length
    let sign = 1
    let total = 0
    let coeff = 0
    let i = 0

    // console.log(len)

    for (let j = 0; j < len; j++) {

        if(strlen[j] == "+" || strlen[j] == "-") {

            if(j > i) {
                total += sign * parseInt(strlen.substr(i,j-i))
            }

            i = j
        } else if(strlen[j] == "x") {
            // kondisi jika terdapat tanda + atau - diantara sebelum atau sesudah huruf x. 
            // contoh : -x, x, +x

            if(i == j || strlen[j - 1] == "+") {
                coeff += sign
            } else if(strlen[j - 1] == "-") {
                coeff -= sign
            } else {
                coeff += sign * parseInt(strlen.substr(i,j-1))
            }

            i = j + 1
        } else if(strlen[j] == "=") {

            if(j > i) {
                total += sign * parseInt(strlen.substr(i,j-i))
            }

            sign = -1
            i = j + 1
        }
        
    }

    if(i < strlen.length) {
        total += sign * parseInt(strlen.substr(i))
    }

    let result = -total / coeff

    return `x = ${result}`
}

console.log(valueOfX('x + 1 = 9 - 2')) // 6
console.log(valueOfX('- 10 = x')) // -10
console.log(valueOfX('x - 2 + 3 = 2')) // 1
console.log(valueOfX('- x = - 1')) // 1
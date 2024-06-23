// source by : https://www.codewars.com/kata/5590961e6620c0825000008f

// Given a string, swap the case for each of the letters.

// e.g. CodEwArs --> cODeWaRS

// Examples

// ""           ->   ""
// "CodeWars"   ->   "cODEwARS"
// "abc"        ->   "ABC"
// "ABC"        ->   "abc"
// "123235"     ->   "123235"

// my code :

function caseSwapping(str) {
    let result

    if (str === "" || str === null || str === undefined) {
        result = ""
    } else if (str === str.toLowerCase()) {
        result = str.toUpperCase()
    } else if (str === str.toUpperCase()) {
        result = str.toLowerCase()
    } else {

        let newStr = ""

        for(let i = 0; i < str.length; i++) {

            if(str[i] === str[i].toUpperCase()) {
                newStr += str[i].toLowerCase()
            } else {
                newStr += str[i].toUpperCase()
            }
        }

        result = newStr
    }


    return result
}


console.log(caseSwapping(""))
console.log(caseSwapping("CodeWars"))
console.log(caseSwapping("abc"))
console.log(caseSwapping("ABC"))
console.log(caseSwapping("123235"))
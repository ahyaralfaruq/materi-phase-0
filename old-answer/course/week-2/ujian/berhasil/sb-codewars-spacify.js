// source by : https://www.codewars.com/kata/57f8ee485cae443c4d000127

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// my code :

function spacify(strings) {
    let result = ""
    
    for(let i = 0; i < strings.length; i++) {
        result += strings[i]

        if(i < (strings.length - 1)) {
            result += " "
        }
    }

    return result
}

console.log(spacify("hello world"))
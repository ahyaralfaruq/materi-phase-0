// source by ===> https://www.codecademy.com/courses/introduction-to-javascript/lessons/variables/exercises/review-variables

// pre-ES6
var nama = 'Muhammad Ahyar'
var age =  29
console.log(nama)
console.log(age)

console.log("==================================")

// variable : let
// can be re-assigned
let gf = 'rani'
console.log(gf)
gf = 'diena fahrani aisyah fitri'
console.log(gf)

// variable : const
// cannot be re-assigned because it is the preffered way to declare a variable
const ttl = 29031999
console.log(ttl)
ttl = 9032000

console.log("==================================")

// primitive data type : undifined
let test;
console.log(test)

console.log("==================================")

// mathematical assignment operatiors
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++
console.log(gainedDollar)
lostDollar--
console.log(lostDollar)


console.log("==================================")

// concatenate (penggabung string)
let favoriteAnimal = 'cat'
console.log('My favorite animal: ' + favoriteAnimal)

console.log("==================================")

// template literals (backticks (`) & (${}) string interpolation)
let myName = 'Ahyar'
let myCity = 'Seoul'
console.log(`My name is ${myName}. My favorite city is ${myCity}`)

console.log("==================================")

// typeof operator

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable)

newVariable = 1
console.log(typeof newVariable)

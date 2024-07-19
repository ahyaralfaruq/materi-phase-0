function xo(str) {
  // you can only write your code here!
  let newX = 0
  let newO = 0

  for(let i = 0; i < str.length; i++) {
    if(str[i] === "x") {
      newX++
    } else {
      newO++
    }
  }

  return newX === newO
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
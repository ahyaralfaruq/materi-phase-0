function palindrome(kata) {
  // you can only write your code here!
  const reverseKata = kata.split("").reverse().join("")

  return reverseKata === kata
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


function palindrome2(kata) {
  let result = ""

  for(let i = kata.length - 1; i >= 0; i--) {
    result += kata[i]
  }

  return result === kata
}



// TEST CASES 2
console.log(palindrome2('katak')); // true
console.log(palindrome2('blanket')); // false
console.log(palindrome2('civic')); // true
console.log(palindrome2('kasur rusak')); // true
console.log(palindrome2('mister')); // false
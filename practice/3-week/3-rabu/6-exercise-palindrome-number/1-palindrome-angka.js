function angkaPalindrome(num) {
  // you can only write your code here!
  let checkLength = num.toString()

  if(checkLength.length === 1) {
    return num + 1
  }

  while(checkLength.split("").reverse().join("") !== checkLength) {
    num++
    checkLength = num.toString()
  }

  return parseInt(checkLength)
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
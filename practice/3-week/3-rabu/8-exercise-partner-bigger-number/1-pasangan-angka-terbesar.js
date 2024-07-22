function pasanganTerbesar(num) {
  // you can only write your code here!
  const numToString = num.toString()
  let bigNum = parseInt(numToString[0])  
  
  for(let i = 1; i < numToString.length; i++) {
    const getNum = parseInt(numToString[i])
    
    if(getNum > bigNum) {
      bigNum = getNum
    }
  }
  
  const result = numToString.substr(numToString.indexOf(bigNum), 2)

  return parseInt(result)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
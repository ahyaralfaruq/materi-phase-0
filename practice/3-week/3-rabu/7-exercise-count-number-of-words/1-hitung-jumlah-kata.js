function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  return kalimat.split(" ").length
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5


function hitungJumlahKata2(kalimat) {
  // you can only write your code here!
  const arr = []
  let tempStr = ""

  for(let i = 0; i < kalimat.length; i++) {
    if(kalimat[i] !== " ") {
      tempStr += kalimat[i]
    } else {
      arr.push(tempStr)
      tempStr = ""
    }
  }

  if(tempStr) {
    arr.push(tempStr)
  }

  return arr.length
}

// TEST CASES
console.log(hitungJumlahKata2('I have a dream')); // 4
console.log(hitungJumlahKata2('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata2('A song to sing')); // 4
console.log(hitungJumlahKata2('I')); // 1
console.log(hitungJumlahKata2('I believe I can code')); // 5